import {Injectable} from '@angular/core';
import {AppWeb3Service} from "./app-web3.service";

import * as Application from '../../../../build/contracts/Application.json';
import * as UserApplications from '../../../../build/contracts/UserApplications.json';
import * as TruffleContract from 'truffle-contract';
import {Observable} from "rxjs/Observable";
import {ApplicationEntity} from "../app-domain/app-application";
import {AppWeb3ArtifactService} from "./app-web3-artifact.service";
import {AppWeb3VisaService} from "./app-web3-visa.service";
import {AppWeb3ApplicantRegistryService} from "./app-web3-applicant-registry.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class AppWeb3ApplicationService {
	APPLICATION = TruffleContract(Application);
	USER_APPLICATIONS = TruffleContract(UserApplications);

	constructor(private appWeb3Svc: AppWeb3Service,
				private appWeb3ArtifactSvc: AppWeb3ArtifactService,
				private appWeb3VisaSvc: AppWeb3VisaService,
				private appWeb3ApplicantSvc: AppWeb3ApplicantRegistryService) {
		console.log("Injecting the provider");
		this.APPLICATION.setProvider(this.appWeb3Svc.currentProvider());
		this.USER_APPLICATIONS.setProvider(this.appWeb3Svc.currentProvider());
	}

	userApplications() {
		return this.USER_APPLICATIONS
			.deployed();
	}

	create(application: ApplicationEntity, ethAddress: string): Observable<any> {
		return Observable.create(observer => {
			let userApplications;
			this.userApplications()
				.then(instance => {
					userApplications = instance;
					return instance.createApplication(application.visa.address,
						application.artifacts.map(artifact => artifact.address),
						{from: ethAddress})
				})
				.then(result => userApplications.findUserApplications(ethAddress))
				.then(addresses => {
					if (addresses.length > 0) {
						addresses.forEach(address => observer.next(this.findOne(address)))
					} else {
						observer.complete();
					}
				})
				.catch(error => observer.error(error));
		});
	}

	findOne(applicationAddress: string): ApplicationEntity {
		let truffleApplication = this.APPLICATION.at(applicationAddress);
		let application = new ApplicationEntity();
		truffleApplication.owner()
			.then(owner => application.isActive = (typeof owner === "string"))
			.catch(error => {
				application.isActive = false;
				console.error("Unable to get status of the application: " + error);
			});
		truffleApplication.getArtifacts()
			.then(addresses => application.artifacts = addresses.map(address =>
				this.appWeb3ArtifactSvc.findOne(address)))
			.catch(error => console.error("Unable to get artifacts for the application: " + error));
		truffleApplication.visa_details()
			.then(address => application.visa = this.appWeb3VisaSvc.findOne(address))
			.catch(error => console.error("Unable to get visa for the application: " + error));
		truffleApplication.is_approved()
			.then(approved => application.status = approved)
			.catch(error => console.error("Unable to get status of the application: " + error));
		truffleApplication.getBalance()
			.then(value => application.fee = this.appWeb3Svc.fromWei(value))
			.catch(error => console.log("Unable to get the application fee: " + error));
		application.address = applicationAddress;
		return application;
	}

	findFor(ethAddress: string): Observable<ApplicationEntity> {
		return Observable.create(observer => {
			this.userApplications()
				.then(registry => registry.findUserApplications(ethAddress))
				.then(addresses => {
					if (addresses.length > 0) {
						addresses.forEach(address => observer.next(this.findOne(address)))
					} else {
						observer.complete();
					}
				})
				.catch(error => observer.error(error));
		});
	}


	findAll(ethAddress: string): Observable<any[]> {
		return Observable.create(observer => {
			//find all applicants
			this.appWeb3ApplicantSvc.findAll(ethAddress)
				.subscribe(applicant => {
						//for each applicant find application
						this.findFor(applicant)
							.subscribe(application => {
									application.owner = applicant;
									observer.next(application);
								}, error => observer.error(error),
								() => observer.complete());
					},
					error => observer.error(error),
					() => observer.complete());
		});
	}

	takeDecision(appAddress: string, isApproved: boolean, ethAddress: string): Observable<string> {
		return Observable.create(observer => {
			let truffleApplication = this.APPLICATION.at(appAddress);
			truffleApplication.decision(isApproved, {from: ethAddress})
				.then(result => observer.next(appAddress))
				.catch(error => observer.error(error));
		});
	}

	withdraw(appAddress: string, ethAddress: string): Observable<any> {
		return Observable.create(observer => {
			let truffleApplication = this.APPLICATION.at(appAddress);
			truffleApplication.withdraw({from: ethAddress})
				.then(result => observer.next(appAddress))
				.catch(error => observer.error(error));
		});
	}

	depositApplicationFee(applicationAddress: string, ethAddress: string): Observable<any> {
		return Observable.create(observer => {
			let truffleApplication = this.APPLICATION.at(applicationAddress);
			let feeInWei = this.appWeb3Svc.toWei(environment.applicationFee);
			truffleApplication.depositFee.sendTransaction(feeInWei, {
				from: ethAddress,
				to: applicationAddress,
				value: feeInWei
			})
				.then(reciept => this.APPLICATION.at(applicationAddress).getBalance())
				.then(balance => observer.next(this.appWeb3Svc.fromWei(balance)))
				.catch(error => observer.error(error));
		});
	}
}

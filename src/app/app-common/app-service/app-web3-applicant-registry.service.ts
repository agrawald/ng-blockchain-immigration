import {Injectable} from '@angular/core';
import {AppWeb3Service} from "./app-web3.service";

import * as ApplicantRegistry from '../../../../build/contracts/ApplicantRegistry.json';
import * as TruffleContract from 'truffle-contract';
import {Observable} from "rxjs/Observable";

declare var window: any;

@Injectable()
export class AppWeb3ApplicantRegistryService {
	APPLICANT_REGISTRY = TruffleContract(ApplicantRegistry);

	constructor(private appWeb3Svc: AppWeb3Service) {
		console.log("Injecting the provider");
		this.APPLICANT_REGISTRY.setProvider(this.appWeb3Svc.currentProvider());
	}

	applicantRegistry() {
		return this.APPLICANT_REGISTRY.deployed();
	}

	checkStatus(ethAddress: string): Observable<boolean> {
		return Observable.create(observer => {
			this.applicantRegistry()
				.then(registry => registry.getApplicantStatus(ethAddress, {from: ethAddress}))
				.then(status => observer.next(status))
				.catch(error => observer.error(error));
		});
	}

	addApplicant(ethAddress: string): Observable<boolean> {
		return Observable.create(observer => {
			this.applicantRegistry()
				.then(registry => registry.addApplicant(ethAddress, {from: ethAddress}))
				.then(result => observer.next(true))
				.catch(error => observer.error(error));
		});
	}

	changeStatus(ethAddress: string, active: boolean): Observable<boolean> {
		return Observable.create(observer => {
			this.applicantRegistry()
				.then(registry => registry.changeStatus(ethAddress, active, {from: ethAddress}))
				.then(result => observer.next(true))
				.catch(error => observer.error(error));
		});
	}

	findAll(ethAddress: string): Observable<any> {
		return Observable.create(observer => {
			this.applicantRegistry()
				.then(registry => registry.getApplicants({from: ethAddress}))
				.then(addresses => {
					if (addresses.length > 0) {
						addresses.forEach(address => observer.next(address));
					} else {
						observer.complete();
					}
				})
				.catch(error => observer.error(error));
		});
	}
}

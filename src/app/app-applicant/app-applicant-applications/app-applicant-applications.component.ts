import {Component, OnInit} from '@angular/core';
import {AppWeb3ApplicationService} from "../../app-common/app-service/app-web3-application.service";
import {DialogService} from "ng2-bootstrap-modal";
import {AppApplicantAddDocumentsComponent} from "../app-applicant-add-documents/app-applicant-add-documents.component";
import {ArtifactEntity} from "../../app-common/app-domain/app-artifact";
import {ApplicationEntity} from "../../app-common/app-domain/app-application";
import {VisaEntity} from "../../app-common/app-domain/app-visa";
import {AppWeb3VisaService} from "../../app-common/app-service/app-web3-visa.service";
import {AppWeb3ArtifactService} from "../../app-common/app-service/app-web3-artifact.service";

@Component({
	selector: 'app-app-applicant-applications',
	templateUrl: './app-applicant-applications.component.html',
	styleUrls: ['./app-applicant-applications.component.css']
})
export class AppApplicantApplicationsComponent implements OnInit {
	applications = [];
	role: string;
	ethAddress: string;
	loading = false;
	visas: VisaEntity[] = [];
	artifacts: ArtifactEntity[] = [];
	selectedArtifacts: ArtifactEntity[] = [];

	constructor(private appWeb3ApplicationSvc: AppWeb3ApplicationService,
				private appWeb3VisaSvc: AppWeb3VisaService,
				private appWeb3ArtifactSvc: AppWeb3ArtifactService,
				private dialogSvc: DialogService) {
		this.ethAddress = localStorage.getItem('ethAddress');
		this.role = localStorage.getItem('role');
	}

	ngOnInit() {
		this.loading = true;
		//load all available visas
		this.appWeb3VisaSvc.findAll(this.ethAddress)
			.subscribe(visa => this.visas.push(visa),
				error => alert("Unable to get visas: " + error));
		//load user artifacts
		this.appWeb3ArtifactSvc.findAll(this.ethAddress)
			.subscribe(artifact => this.artifacts.push(artifact),
				error => alert("Unable to get artifacts: " + error));
		//load user applications
		this.appWeb3ApplicationSvc
			.findFor(this.ethAddress)
			.subscribe(
				application => {
					this.loading = false;
					this.applications.push(application);
				},
				error => {
					this.loading = false;
					console.error("Unable to find all application: " + error);
					alert(error);
					// this.applications = [];
				}, () => this.loading = false);
	}

	onAddArtifactsClick() {
		this.dialogSvc
			.addDialog(AppApplicantAddDocumentsComponent, {
				artifacts: this.artifacts,
				selectedArtifacts: this.selectedArtifacts
			})
			.subscribe(result => console.log("Add Artifact modal closed: " + result));
	}

	onWithdrawClick(applicationAddress: string) {
		this.appWeb3ApplicationSvc.withdraw(applicationAddress, this.ethAddress)
			.subscribe(appAddress => {
				let idx = this.applications.findIndex(application => appAddress === application.address);
				if (idx >= 0) {
					this.applications.splice(idx, 1);
				}
			}, error => alert("Unable to withdraw: " + error))
	}

	onCreateClick(data) {
		if (this.selectedArtifacts.length < 0) {
			alert("You must select documents");
			return false;
		}

		let application = new ApplicationEntity();
		application.visa = this.visas.find(visa => visa.address = data.visaType);
		this.selectedArtifacts
			.forEach(artifact => application.artifacts.push(artifact));

		this.loading = true;
		this.appWeb3ApplicationSvc
			.create(application, this.ethAddress)
			.subscribe(
				application => {
					this.loading = false;
					let idx = this.applications.findIndex(existing => existing.address === application.address);
					if (idx === -1) {
						this.applications.push(application);
					}
				},
				error => {
					alert("Unable to create new application: " + error);
					this.loading = false;
				},
				() => this.loading = false);
	}

	onDepositClick(applicationAddress: string) {
		this.loading = true;
		this.appWeb3ApplicationSvc.depositApplicationFee(applicationAddress, this.ethAddress)
			.subscribe(balance => {
					let idx = this.applications
						.findIndex(application => application.address === applicationAddress);
					let application: ApplicationEntity = this.applications[idx];
					this.applications.splice(idx, 1);
					application.fee = balance;
					this.applications.push(application);
					this.loading = false;
				},
				error => {
					this.loading = false;
					alert("Unable to deposit verifier fee: " + error);
				});
	}
}

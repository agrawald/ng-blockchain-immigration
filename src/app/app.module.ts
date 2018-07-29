import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppNavbarComponent} from './app-common/app-navbar/app-navbar.component';
import {AppApplicantLoginComponent} from './app-applicant/app-applicant-login/app-applicant-login.component';
import {AppVerifierLoginComponent} from './app-verifier/app-verifier-login/app-verifier-login.component';
import {AppImmigrationLoginComponent} from './app-immigration/app-immigration-login/app-immigration-login.component';
import {AppHomeComponent} from './app-home/app-home.component';
import {AppApplicantRegisterComponent} from './app-applicant/app-applicant-register/app-applicant-register.component';
import {AppWeb3Service} from "./app-common/app-service/app-web3.service";
import {EthAddressValidatorDirective} from "./app-common/app-validators/eth-address-validator.directive";
import {AppApplicantDocumentsComponent} from "./app-applicant/app-applicant-documents/app-applicant-documents.component";
import {AppWeb3ArtifactService} from "./app-common/app-service/app-web3-artifact.service";
import {AppApplicantApplicationsComponent} from "./app-applicant/app-applicant-applications/app-applicant-applications.component";
import {AppWeb3ApplicationService} from "./app-common/app-service/app-web3-application.service";
import {AppVerifierDocumentsComponent} from "./app-verifier/app-verifier-documents/app-verifier-documents.component";
import {AppImmigrationApplicationsComponent} from "./app-immigration/app-immigration-applications/app-immigration-applications.component";
import {AppWeb3VisaService} from "./app-common/app-service/app-web3-visa.service";
import {AppWeb3ApplicantRegistryService} from "./app-common/app-service/app-web3-applicant-registry.service";
import {AppWeb3AdminRegistryService} from "./app-common/app-service/app-web3-admin-registry.service";
import {AppWeb3VerifierService} from "./app-common/app-service/app-web3-verifier.service";
import {AppImmigrationVerifiersComponent} from "./app-immigration/app-immigration-verifiers/app-immigration-verifiers.component";
import {AppImmigrationVisasComponent} from "./app-immigration/app-immigration-visas/app-immigration-visas.component";
import {LoadingModule} from "ngx-loading";
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {AppApplicantAddDocumentsComponent} from './app-applicant/app-applicant-add-documents/app-applicant-add-documents.component';
import {AppIpfsService} from "./app-common/app-service/app-web3-ipfs.service";
import {HttpClientModule} from "@angular/common/http";

const APP_ROUTES: Routes = [
	{path: '', component: AppHomeComponent},
	// applicant routes
	{path: 'applicant', component: AppApplicantLoginComponent},
	{path: 'applicant/register', component: AppApplicantRegisterComponent},
	{path: 'applicant/:ethAddress/documents', component: AppApplicantDocumentsComponent},
	{path: 'applicant/:ethAddress/documents', component: AppApplicantDocumentsComponent},
	{path: 'applicant/:ethAddress/applications', component: AppApplicantApplicationsComponent},
	{path: 'applicant/:ethAddress/:application', component: AppApplicantDocumentsComponent},

	// verifier routes
	{path: 'verifier', component: AppVerifierLoginComponent},
	{path: 'verifier/:ethAddress/documents', component: AppVerifierDocumentsComponent},
	// immigration routes
	{path: 'immigration', component: AppImmigrationLoginComponent},
	{path: 'immigration/:ethAddress/applications', component: AppImmigrationApplicationsComponent},
	{path: 'immigration/:ethAddress/verifiers', component: AppImmigrationVerifiersComponent},
	{path: 'immigration/:ethAddress/visas', component: AppImmigrationVisasComponent},
];

@NgModule({
	declarations: [
		AppComponent,
		AppNavbarComponent,
		AppApplicantLoginComponent,
		AppVerifierLoginComponent,
		AppImmigrationLoginComponent,
		AppHomeComponent,
		AppApplicantRegisterComponent,
		AppApplicantDocumentsComponent,
		AppApplicantApplicationsComponent,
		AppVerifierDocumentsComponent,
		AppImmigrationApplicationsComponent,
		AppImmigrationVerifiersComponent,
		AppImmigrationVisasComponent,
		EthAddressValidatorDirective,
		AppApplicantAddDocumentsComponent
	],
	imports: [
		HttpClientModule,
		RouterModule.forRoot(
			APP_ROUTES,
			{enableTracing: true} // <-- debugging purposes only
		),
		FormsModule,
		BrowserModule,
		LoadingModule,
		BootstrapModalModule.forRoot({container: document.body})
	],
	providers: [
		HttpClientModule,
		AppWeb3Service,
		AppWeb3ArtifactService,
		AppWeb3ApplicationService,
		AppWeb3AdminRegistryService,
		AppWeb3ApplicantRegistryService,
		AppWeb3VerifierService,
		AppWeb3VisaService,
		AppIpfsService
	],
	entryComponents: [
		AppApplicantAddDocumentsComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

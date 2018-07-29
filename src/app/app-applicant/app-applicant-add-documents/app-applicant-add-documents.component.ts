import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {ArtifactEntity} from "../../app-common/app-domain/app-artifact";

export interface AddArtifactModal {
	artifacts: ArtifactEntity[];
	selectedArtifacts: ArtifactEntity[];
}

@Component({
	selector: 'app-app-applicant-add-documents',
	templateUrl: './app-applicant-add-documents.component.html',
	styleUrls: ['./app-applicant-add-documents.component.css']
})
export class AppApplicantAddDocumentsComponent extends DialogComponent<AddArtifactModal, boolean>
	implements AddArtifactModal, OnInit {
	artifacts: ArtifactEntity[] = [];
	selectedArtifacts: ArtifactEntity[] = [];

	constructor(dialogService: DialogService) {
		super(dialogService);
	}

	ngOnInit() {
		let selectedAddresses = this.selectedArtifacts
			.map(artifact => artifact.address);
		this.artifacts = this.artifacts
			.filter(artifact => !selectedAddresses.find(address => artifact.address === address));
	}

	onAddClick(selectedArtifact: ArtifactEntity) {
		this.selectedArtifacts.push(selectedArtifact);
		this.artifacts = this.artifacts
			.filter(artifact => artifact.address !== selectedArtifact.address);
	}

	onRemoveClick(artifact: ArtifactEntity) {
		let idx = this.selectedArtifacts
			.findIndex(selectedArtifact => artifact.address === selectedArtifact.address);
		if (idx > -1) {
			this.selectedArtifacts.splice(idx, 1);
		}
		this.artifacts.push(artifact);
	}
}

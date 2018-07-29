import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppApplicantAddDocumentsComponent} from './app-applicant-add-documents.component';

describe('AppApplicantAddDocumentsComponent', () => {
	let component: AppApplicantAddDocumentsComponent;
	let fixture: ComponentFixture<AppApplicantAddDocumentsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppApplicantAddDocumentsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppApplicantAddDocumentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

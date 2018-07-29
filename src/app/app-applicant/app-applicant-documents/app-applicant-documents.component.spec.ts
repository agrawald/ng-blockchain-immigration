import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppApplicantDocumentsComponent} from './app-applicant-documents.component';

describe('AppApplicantDocumentsComponent', () => {
  let component: AppApplicantDocumentsComponent;
  let fixture: ComponentFixture<AppApplicantDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppApplicantDocumentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppApplicantDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

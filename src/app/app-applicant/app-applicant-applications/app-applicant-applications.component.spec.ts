import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppApplicantApplicationsComponent} from './app-applicant-applications.component';

describe('AppApplicantApplicationsComponent', () => {
  let component: AppApplicantApplicationsComponent;
  let fixture: ComponentFixture<AppApplicantApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppApplicantApplicationsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppApplicantApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

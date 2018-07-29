import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppApplicantLoginComponent} from './app-applicant-login.component';

describe('AppApplicantLoginComponent', () => {
  let component: AppApplicantLoginComponent;
  let fixture: ComponentFixture<AppApplicantLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppApplicantLoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppApplicantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

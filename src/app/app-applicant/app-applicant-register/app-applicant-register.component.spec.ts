import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppApplicantRegisterComponent} from './app-applicant-register.component';

describe('AppApplicantRegisterComponent', () => {
  let component: AppApplicantRegisterComponent;
  let fixture: ComponentFixture<AppApplicantRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppApplicantRegisterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppApplicantRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

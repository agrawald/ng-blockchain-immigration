import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppVerifierLoginComponent} from './app-verifier-login.component';

describe('AppVerifierLoginComponent', () => {
  let component: AppVerifierLoginComponent;
  let fixture: ComponentFixture<AppVerifierLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppVerifierLoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVerifierLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

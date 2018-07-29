import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppVerifierDocumentsComponent} from './app-verifier-documents.component';

describe('AppVerifierDocumentsComponent', () => {
  let component: AppVerifierDocumentsComponent;
  let fixture: ComponentFixture<AppVerifierDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppVerifierDocumentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVerifierDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

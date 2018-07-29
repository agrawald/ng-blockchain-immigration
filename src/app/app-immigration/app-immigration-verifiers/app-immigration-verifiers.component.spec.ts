import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppImmigrationVerifiersComponent} from './app-immigration-verifiers.component';

describe('AppImmigrationVerifiersComponent', () => {
  let component: AppImmigrationVerifiersComponent;
  let fixture: ComponentFixture<AppImmigrationVerifiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppImmigrationVerifiersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppImmigrationVerifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

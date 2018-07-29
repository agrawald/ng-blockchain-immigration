import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppImmigrationApplicationsComponent} from './app-immigration-applications.component';

describe('AppImmigrationApplicationsComponent', () => {
  let component: AppImmigrationApplicationsComponent;
  let fixture: ComponentFixture<AppImmigrationApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppImmigrationApplicationsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppImmigrationApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

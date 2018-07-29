import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppImmigrationLoginComponent} from './app-immigration-login.component';

describe('AppImmigrationLoginComponent', () => {
  let component: AppImmigrationLoginComponent;
  let fixture: ComponentFixture<AppImmigrationLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppImmigrationLoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppImmigrationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

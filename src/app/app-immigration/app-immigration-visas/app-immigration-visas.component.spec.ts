import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppImmigrationVisasComponent} from './app-immigration-visas.component';

describe('AppImmigrationVisasComponent', () => {
  let component: AppImmigrationVisasComponent;
  let fixture: ComponentFixture<AppImmigrationVisasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppImmigrationVisasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppImmigrationVisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

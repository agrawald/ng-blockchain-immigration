import {inject, TestBed} from '@angular/core/testing';

import {AppWeb3UserRolesService} from './app-web3-user-roles.service';

describe('AppWeb3UserRolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWeb3UserRolesService]
    });
  });

  it('should be created', inject([AppWeb3UserRolesService], (service: AppWeb3UserRolesService) => {
    expect(service).toBeTruthy();
  }));
});

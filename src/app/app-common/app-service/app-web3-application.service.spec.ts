import {inject, TestBed} from '@angular/core/testing';

import {AppWeb3ApplicationService} from './app-web3-application.service';

describe('AppWeb3ApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWeb3ApplicationService]
    });
  });

  it('should be created', inject([AppWeb3ApplicationService], (service: AppWeb3ApplicationService) => {
    expect(service).toBeTruthy();
  }));
});

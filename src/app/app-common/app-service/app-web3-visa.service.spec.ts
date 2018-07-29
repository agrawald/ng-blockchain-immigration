import {inject, TestBed} from '@angular/core/testing';

import {AppWeb3VisaService} from './app-web3-visa.service';

describe('AppWeb3VisaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWeb3VisaService]
    });
  });

  it('should be created', inject([AppWeb3VisaService], (service: AppWeb3VisaService) => {
    expect(service).toBeTruthy();
  }));
});

import {inject, TestBed} from '@angular/core/testing';

import {AppWeb3Service} from './app-web3.service';

describe('AppWeb3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWeb3Service]
    });
  });

  it('should be created', inject([AppWeb3Service], (service: AppWeb3Service) => {
    expect(service).toBeTruthy();
  }));
});

import {inject, TestBed} from '@angular/core/testing';

import {AppWeb3ArtifactService} from './app-web3-artifact.service';

describe('AppWeb3ArtifactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWeb3ArtifactService]
    });
  });

  it('should be created', inject([AppWeb3ArtifactService], (service: AppWeb3ArtifactService) => {
    expect(service).toBeTruthy();
  }));
});

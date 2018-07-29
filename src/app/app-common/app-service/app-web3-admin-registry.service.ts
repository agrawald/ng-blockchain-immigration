import {Injectable} from '@angular/core';
import {AppWeb3Service} from "./app-web3.service";

import * as AdminRegistry from '../../../../build/contracts/AdminRegistry.json';
import * as TruffleContract from 'truffle-contract';
import {Observable} from "rxjs/Observable";

declare var window: any;

@Injectable()
export class AppWeb3AdminRegistryService {
  ADMIN_REGISTRY = TruffleContract(AdminRegistry);

  constructor(private appWeb3Svc: AppWeb3Service) {
    console.log("Injecting the provider");
    this.ADMIN_REGISTRY.setProvider(this.appWeb3Svc.currentProvider());
  }

  checkStatus(ethAddress: string): Observable<boolean> {
    return Observable.create(observer => {
      this.ADMIN_REGISTRY
        .deployed()
        .then(registry => {
          return registry.owner({from: ethAddress});
        })
        .then(address => observer.next(address === ethAddress.toLowerCase()))
        .catch(error => observer.error(error));
    });
  }
}

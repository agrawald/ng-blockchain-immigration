import {Injectable} from '@angular/core';
import {AppWeb3Service} from "./app-web3.service";
import * as Visa from '../../../../build/contracts/Visa.json';
import * as VisaFactory from '../../../../build/contracts/VisaFactory.json';

import * as TruffleContract from 'truffle-contract';
import {Observable} from "rxjs/Observable";
import {VisaEntity} from "../app-domain/app-visa";

declare var window: any;

@Injectable()
export class AppWeb3VisaService {
  VISA = TruffleContract(Visa);
  VISA_FACTORY = TruffleContract(VisaFactory);

  constructor(private appWeb3Svc: AppWeb3Service) {
    console.log("Injecting the provider");
    this.VISA.setProvider(this.appWeb3Svc.currentProvider());
    this.VISA_FACTORY.setProvider(this.appWeb3Svc.currentProvider());
  }

  visaFactory() {
    return this.VISA_FACTORY
      .deployed();
  }

  create(ethAddress: string, visaCode: string, visaName: string): Observable<any> {
    return Observable.create(observer => {
      let visaFactory;
      this.visaFactory()
        .then(factory => {
          visaFactory = factory;
          return factory.createVisa(visaCode, visaName, {from: ethAddress});
        })
        .then(result => visaFactory.findBy(visaCode))
        .then(address => observer.next(this.findOne(address)))
        .catch(error => observer.error(error));
    });
  }

  findAll(ethAddress: string): Observable<any> {
    return Observable.create(observer => {
      this.visaFactory()
        .then(registry => registry.findAll({from: ethAddress}))
        .then(addresses => {
          if (addresses.length > 0) {
            addresses.forEach(address => observer.next(this.findOne(address)));
          } else {
            observer.complete();
          }
        })
        .catch(error => observer.error(error));
    });
  }

  findBy(visaCode: string, ethAddress: string): Observable<any[]> {
    return Observable.create(observer => {
      this.visaFactory()
        .then(registry => registry.findBy(visaCode, {from: ethAddress}))
        .then(address => observer.next(this.findOne(address)))
        .catch(error => observer.error(error));
    });
  }

  findOne(address: string): VisaEntity {
    let truffleVisa = this.VISA.at(address);
    return this.toVisaEntity(truffleVisa)
  }

  private toVisaEntity(truffleVisa: any): VisaEntity {
    let visa = new VisaEntity();
    truffleVisa.visa_name()
      .then(value => visa.name = this.appWeb3Svc.toString(value))
      .catch(error => console.log("Unable to set visa name", error));
    truffleVisa.visa_code()
      .then(value => visa.code = this.appWeb3Svc.toString(value))
      .catch(error => console.log("Unable to set visa code", error));
    visa.address = truffleVisa.address;
    return visa;
  }
}


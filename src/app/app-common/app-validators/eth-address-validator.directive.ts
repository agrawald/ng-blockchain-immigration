import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";
import {AppWeb3Service} from "../app-service/app-web3.service";

@Directive({
  selector: '[invalidEthAddress]',
  providers: [{provide: NG_VALIDATORS, useExisting: EthAddressValidatorDirective, multi: true}]
})
export class EthAddressValidatorDirective implements Validator {
  constructor(private appWeb3Svc: AppWeb3Service) {
  }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.appWeb3Svc.isAddress(control.value) ? null : {'invalidEthAddress': {value: control.value}};
  }
}

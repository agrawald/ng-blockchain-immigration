import {Component, OnInit} from '@angular/core';
import {AppWeb3VisaService} from "../../app-common/app-service/app-web3-visa.service";
import {VisaEntity} from "../../app-common/app-domain/app-visa";

@Component({
  selector: 'app-app-immigration-visas',
  templateUrl: './app-immigration-visas.component.html',
  styleUrls: ['./app-immigration-visas.component.css']
})
export class AppImmigrationVisasComponent implements OnInit {
  visas: VisaEntity[] = [];
  ethAddress: string;
  loading = false;
  role: string;

  constructor(private appWeb3VisaSvc: AppWeb3VisaService) {
    this.ethAddress = localStorage.getItem('ethAddress');
    this.role = localStorage.getItem('role');
  }

  ngOnInit() {
    this.loading = true;
    this.appWeb3VisaSvc
      .findAll(this.ethAddress)
      .subscribe(
        visa => {
          this.loading = false;
          this.visas.push(visa);
        },
        error => {
          this.loading = false;
          alert("Unable to find all visas: " + error);
        },
        () => this.loading = false);
  }

  onAddClick(data) {
    this.loading = true;
    this.appWeb3VisaSvc
      .create(this.ethAddress, data.visaCode, data.visaName)
      .subscribe(instance => {
          this.loading = false;
          this.visas.push(instance);
        },
        error => {
          this.loading = false;
          alert("Unable to create visa: " + error);
        },
        () => this.loading = false);
  }

  onDisableClick() {
    alert("Not implemented");
  }

}

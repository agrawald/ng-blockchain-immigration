import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AppWeb3AdminRegistryService} from "../../app-common/app-service/app-web3-admin-registry.service";

@Component({
  selector: "app-app-immigration",
  templateUrl: "./app-immigration-login.component.html",
  styleUrls: ["./app-immigration-login.component.css"]
})
export class AppImmigrationLoginComponent {

  constructor(private router: Router,
              private appWeb3AdminRegistrySvc: AppWeb3AdminRegistryService) {
  }

  onClickSubmit(data) {
    this.appWeb3AdminRegistrySvc.checkStatus(data.ethAddress)
      .subscribe(allowed => {
          if (allowed) {
            localStorage.setItem("ethAddress", data.ethAddress);
            localStorage.setItem("role", "Admin");
            this.router.navigateByUrl("/immigration/" + data.ethAddress + "/applications");
          } else {
            alert("ETH Address is not immigration department address");
          }
        },
        error => alert("Error while check the ETH address: " + error));
  }

}

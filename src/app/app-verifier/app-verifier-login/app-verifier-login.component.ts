import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AppWeb3VerifierService} from "../../app-common/app-service/app-web3-verifier.service";

@Component({
  selector: "app-app-verifier",
  templateUrl: "./app-verifier-login.component.html",
  styleUrls: ["./app-verifier-login.component.css"]
})
export class AppVerifierLoginComponent implements OnInit {
  loading = false;

  constructor(private router: Router,
              private appWeb3VerifierSvc: AppWeb3VerifierService) {
  }

  ngOnInit() {
  }

  onClickSubmit(data) {
    this.loading = true;
    this.appWeb3VerifierSvc
      .checkStatus(data.ethAddress)
      .subscribe(enabled => {
        if (enabled) {
          localStorage.setItem("ethAddress", data.ethAddress);
          localStorage.setItem("role", "Verifier");
          this.router.navigateByUrl("/verifier/" + data.ethAddress + "/documents");
        } else {
          alert("ETH Address is not registered or disabled verifier.");
        }
        this.loading = false;
      }, error => {
        this.loading = false;
        alert("Unable to check status of the user: " + error);
      })
  }
}

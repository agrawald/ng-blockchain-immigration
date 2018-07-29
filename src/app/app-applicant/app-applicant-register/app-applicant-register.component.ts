import {Component} from '@angular/core';
import {AppWeb3ApplicantRegistryService} from "../../app-common/app-service/app-web3-applicant-registry.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-applicant-register',
  templateUrl: './app-applicant-register.component.html',
  styleUrls: ['./app-applicant-register.component.css']
})
export class AppApplicantRegisterComponent {
  loading = false;
  constructor(private router: Router,
              private appWeb3ApplicantRegistrySvc: AppWeb3ApplicantRegistryService) {
  }

  onClickSubmit(data) {
    this.loading = true;
    this.appWeb3ApplicantRegistrySvc
      .addApplicant(data.ethAddress)
      .subscribe(result => {
          if (result) {
            alert("User registered successfully");
            this.router.navigateByUrl("/applicant");
          } else {
            alert("Error registering the user, please try again.");
          }
          this.loading = false;
        },
        error => {
          this.loading = false;
          alert("Error registering the user, please try again. " + error);
        }, () => this.loading = false);
  }
}

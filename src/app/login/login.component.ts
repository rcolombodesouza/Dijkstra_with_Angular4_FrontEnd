import { Component, OnInit,trigger, state, style, transition, animate } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from './../_services/alert.service';
import { AuthenticationService } from './../_services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})

/**
 * Component responsible for the login process
 */
export class LoginComponent implements OnInit {
    _model: any = {};
    _loading = false;
    _returnUrl: string;
    _title = 'DEXP';
    _titleExp = ' - Delivery Express';
    
    //Class constructor
    constructor(private route: ActivatedRoute, 
                private router: Router,
                private authenticationService: AuthenticationService,
                private alertService: AlertService) { }


    //NgOnInit is called after building the component
    ngOnInit() {
      this.authenticationService.logout();
      this._returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    //Calls the router for the login process
    login(){
      this._loading = true;

      //Calls the login function from authenticationService sending the username and password.
      //If a data is returned, than calls the router sending the returnURL.
      //If an error is returned, than calls the error function from alertService sending the error. 
      this.authenticationService.login(this._model.username, this._model.password).subscribe(
                                       
                                       data => {this.router.navigate(['/search']);},

                                       error => {this.alertService.error(error);
                                                 this._loading = false;})
    }
}
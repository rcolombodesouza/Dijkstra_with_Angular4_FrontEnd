import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})

/**
 * Component to register an user
 */
export class RegisterComponent {
    _model: any = {};
    _loading = false;
    _title = 'DEXP';
    _titleExp = ' - Delivery Express';
    _message: string = '';

    constructor(private router: Router, private userService: UserService, private alertService: AlertService) { }

    //Calls the create function from the userService.
    //If a data is received, than calls the success function from alertService and redirects to login page.
    //If an error is received, than calls the error function from alertService.
    register() {
        this._loading = true;
        this.userService.create(this._model).subscribe(

                                    data => {this.alertService.success(data.Result, true);   
                                             this._message = data.Result;                                          
                                             },

                                    error => {this.alertService.error('NOK');
                                              this._message = 'NOK';
                                              this._loading = false;});
    }
}

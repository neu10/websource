import { Component,ViewEncapsulation } from "@angular/core";
import {NavigationEnd, Router} from '@angular/router';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import { MatInput,MatFormField } from '@angular/material';
@Component({
    selector: "login-form",
    templateUrl: "./login.component.pug",
    styleUrls:['./login.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class LoginComponent {
     
    constructor(private router: Router, private ngSpinningPreloader : NgSpinningPreloader) {
    }
    
    
}
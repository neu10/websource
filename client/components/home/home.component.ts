import { Component,ViewEncapsulation } from "@angular/core";
import {NavigationEnd, Router} from '@angular/router';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import { MatInput,MatFormField } from '@angular/material';
@Component({
    selector: "home",
    templateUrl: "./home.component.pug",
    styleUrls:['./home.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class HomeComponent {
    
    src = '../images/test.jpg';
    constructor(private router: Router, private ngSpinningPreloader : NgSpinningPreloader) {
    }
    
    ngOnInit(){
        this.ngSpinningPreloader.stop();
    }
}
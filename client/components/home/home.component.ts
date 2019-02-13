import { Component,ViewEncapsulation } from "@angular/core";
import {NavigationEnd, Router} from '@angular/router';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import { MatInput,MatFormField } from '@angular/material';
import {Title} from "@angular/platform-browser";
@Component({
    selector: "home",
    templateUrl: "./home.component.pug",
    styleUrls:['./home.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class HomeComponent {
    
    src = '../images/test.jpg';
    constructor(private router: Router, private ngSpinningPreloader : NgSpinningPreloader,
                private titleService : Title) {
        this.setTitle('Nutan Garla');
    }
    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
    ngOnInit(){
        this.ngSpinningPreloader.stop();
    }
}
import { NgModule }                      from "@angular/core";
import { FormsModule }                   from "@angular/forms";
import { CommonModule }                  from '@angular/common';
import { HttpModule }                    from "@angular/http";
import { HomeRoutingModule }             from './home.routing.module';

// Import all the components
import {
    MatSelectModule, MdNativeDateModule,
    MdDatepickerModule,
    MatDialogModule
} from '@angular/material';
 import { HomeComponent } from "../../components/home/home.component";
import { LoginComponent } from "../../components/login/login.component";
 
@NgModule({
    imports: [
        FormsModule,
        MatSelectModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MatDialogModule,
        HttpModule,
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        LoginComponent
    ],
    exports: [
        HomeComponent,
        LoginComponent
    ]
})
export class HomeModule { }
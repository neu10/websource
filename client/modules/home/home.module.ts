import { NgModule }                      from "@angular/core";
import { FormsModule }                   from "@angular/forms";
import { CommonModule }                  from '@angular/common';
import { HttpModule }                    from "@angular/http";
import { HomeRoutingModule }             from './home.routing.module';

// Import all the components
import {
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule
} from '@angular/material';
 import { HomeComponent } from "../../components/home/home.component";
import { LoginComponent } from "../../components/login/login.component";
import { PostmanComponent } from '../../components/postman/postman.component';
import { StorageServiceModule } from "angular-webstorage-service";

@NgModule({
    imports: [
        FormsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        HttpModule,
        CommonModule,
        HomeRoutingModule,
        StorageServiceModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatCheckboxModule

    ],
    declarations: [
        HomeComponent,
        LoginComponent,
        PostmanComponent
    ],
    exports: [
        HomeComponent,
        LoginComponent,
        PostmanComponent
    ]
})
export class HomeModule { }
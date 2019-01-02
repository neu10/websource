import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule }                   from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';

import{ MdInputModule, MdFormFieldModule } from '@angular/material';
import { ROUTING } from "./app.routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonHTTPService } from '../services/common-http.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        JsonpModule,
        ROUTING,
        BrowserAnimationsModule,
        MdFormFieldModule,
        MdInputModule,
        MatProgressSpinnerModule
    ],
    providers: [
        HttpModule,
        HttpClientModule,
        NgSpinningPreloader,
        JsonpModule,
        CommonHTTPService
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

  constructor() {
  }
}
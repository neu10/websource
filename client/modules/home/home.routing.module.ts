import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components to use
import {HomeComponent} from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import {PostmanComponent} from '../../components/postman/postman.component';
const routes: Routes = [{
    path: 'login',
    component : LoginComponent
},{
    path: 'postman',
    component : PostmanComponent
},{
    path: '',
    children : [{
        path : '',
        component: HomeComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {

    constructor() {
    }
}

//
//

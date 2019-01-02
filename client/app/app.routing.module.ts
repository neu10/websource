import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: '../../client/modules/home/home.module#HomeModule'
    },{
        path: '**',
        redirectTo : '/'
    }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
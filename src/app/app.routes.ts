import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'dashboard',
        component: DashboardComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'logout',
        redirectTo: 'home',
    }
];

import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { combineLatest } from 'rxjs';

export const routes: Routes = [
    {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},

    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},



    {path:'**', component:NotFoundComponent},






];

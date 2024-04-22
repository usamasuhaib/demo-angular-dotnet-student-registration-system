import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { StdFormComponent } from './components/std-form/std-form.component';
import { StdListComponent } from './components/std-list/std-list.component';

const routes: Routes = [

  {path:'', component:AdminDashboardComponent, children:[
    {path:'home',component:AdminHomeComponent},
    {path:'add-std',component:StdFormComponent},
    {path:'add-std/:id',component:StdFormComponent},

    {path:'std-list',component:StdListComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'contact',component:ContactComponent},
    {path:'',component:AdminHomeComponent},


  ]},
  {path:'dashboard', component:AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

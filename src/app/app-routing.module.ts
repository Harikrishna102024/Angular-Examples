import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingDemoComponent } from './Routing/routing-demo/routing-demo.component';
import { RoutingHomeComponent } from './Routing/routing-home/routing-home.component';
import { RoutingCourceComponent } from './Routing/routing-cource/routing-cource.component';
import { RoutingAdminComponent } from './Routing/routing-admin/routing-admin.component';
import { RoutingUsersComponent } from './Routing/routing-users/routing-users.component';
import { RoutParametersComponent } from './Routing/rout-parameters/rout-parameters.component';
import { RoutingQueryparamsComponent } from './Routing/routing-queryparams/routing-queryparams.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'demo', pathMatch: 'full' 
  },
  { 
    path: 'demo', component: RoutingDemoComponent 
  },
  { 
    path: 'home', component: RoutingHomeComponent
  },
  {
    path: 'course', component: RoutingCourceComponent
  },
  {
    path: 'adm',
    redirectTo: 'adm/admin',
    pathMatch: 'prefix'
  },
  {
    path: 'adm',
    children: [
      { path: 'admin', component: RoutingAdminComponent },
      { path: 'users', component: RoutingUsersComponent }
    ]
  },
  {
    path: 'products/:id', component: RoutParametersComponent
  },
  {
    path: 'products', component: RoutingQueryparamsComponent
  },
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

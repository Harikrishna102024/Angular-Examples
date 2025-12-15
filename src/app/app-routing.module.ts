import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingDemoComponent } from './Routing/routing-demo/routing-demo.component';
import { RoutingHomeComponent } from './Routing/routing-home/routing-home.component';
import { RoutingCourceComponent } from './Routing/routing-cource/routing-cource.component';
import { RoutingAdminComponent } from './Routing/routing-admin/routing-admin.component';
import { RoutingUsersComponent } from './Routing/routing-users/routing-users.component';
import { RoutParametersComponent } from './Routing/rout-parameters/rout-parameters.component';
import { RoutingQueryparamsComponent } from './Routing/routing-queryparams/routing-queryparams.component';
import { RegisterComponent } from './Routing/register/register.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { LoginComponent } from './Routing/login/login.component';
import { LogOutComponent } from './Routing/log-out/log-out.component';

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
    path: 'login', component: LoginComponent, canActivate: [AuthGuardService], canDeactivate: [AuthGuardService]
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'logout', component: LogOutComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./Routing/admin/admin.module').then(m => m.AdminModule), canLoad: [AuthGuardService]
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

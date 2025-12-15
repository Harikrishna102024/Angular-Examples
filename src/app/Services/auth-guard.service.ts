import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from '../Routing/login/login.component';
import { LogOutComponent } from '../Routing/log-out/log-out.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanDeactivate<LoginComponent> {

  constructor(private router: Router) { }

  isRegistered: boolean = false;
  isLoad: boolean = false;

  canActivate(): boolean {
    if (this.isRegistered) {
      return true; 
    } else {
      return false;
    }
  }

  canDeactivate(component: LoginComponent): boolean {

    if(component.isOut) {
      return true;
    } else {
      return confirm('You have to Leave page?');
    }
    
  }

  canLoad(): boolean {
    return this.isLoad
  }

}

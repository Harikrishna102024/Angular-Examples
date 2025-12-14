import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }
 

  isRegistered: boolean = false;

  canActivate(): boolean {
    if (this.isRegistered) {
      return true; 
    } else {
      return false;
    }
  }

}

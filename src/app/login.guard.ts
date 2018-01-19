import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';

@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {

	constructor (private user: DataService, private router: Router) {
	}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
	  	if ( this.user.getUserLoggedIn() ) {
	  		return true;
	  	}
	  	else {
	  		this.router.navigate(['login']);
	  	} 
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let myRole = 'admin';

    let roles = childRoute.data['roles'] as Array<string>;
    if (!roles || roles.indexOf(myRole) != -1) { return true; }
  	else {
      this.router.navigate(['']);
      return false;
    }
	}

}

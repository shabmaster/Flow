import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

	constructor (private user: DataService, private router: Router) {
	}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	//this.router.navigate(['login']);
    return this.user.getUserLoggedIn();
  }

}

import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

	private isUserLoggedIn;
  public users: any[];
	public user: any = {};

  constructor(private http: Http) {
  	this.isUserLoggedIn = false;
    this.getUsers();
  }

  getUsers() {
    this.http.get('assets/users-info.json').map((response: Response) => response.json())
      .subscribe(data => {
        this.users = data;
    });
  }

  setUserLoggedIn(loginUser) {
  	this.isUserLoggedIn = true;
  	this.user = loginUser;
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

  setUserLogOut() {
    this.isUserLoggedIn = false;
    this.user = {};
  }

}

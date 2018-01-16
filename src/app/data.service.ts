import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

	private isUserLoggedIn;
	public userName;

  constructor() {
  	this.isUserLoggedIn = false;
  }
  
  setUserLoggedIn() {
  	this.isUserLoggedIn = true;
  	this.userName = 'admin';
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

}

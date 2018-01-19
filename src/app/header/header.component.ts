import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	showToggle: boolean = false;
  isLogin: boolean = false;
	toggleClasses = this.setToggleClasses(this.showToggle);

  constructor(private loginData: DataService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isLogin = this.loginData.getUserLoggedIn();
  }

  logOut() {
    this.loginData.setUserLogOut();
  }

  public setToggleClasses(showToggle) {
  	return {
  		'flexy-nav__items': true,
			'flexy-nav__items--visible': showToggle
		}
  }

  toggleShow() {
  	this.showToggle = !this.showToggle;
  	this.toggleClasses = this.setToggleClasses(this.showToggle);
  }
}

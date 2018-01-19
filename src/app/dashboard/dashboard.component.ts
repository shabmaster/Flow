import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showSideBar: boolean = true;
	buttonClasses = this.setButtonClasses(this.showSideBar);
  userRole: string;

  constructor(private userData: DataService) { }

  ngOnInit() {
  	this.userRole = this.userData.user.role;
  }

  public setButtonClasses(showSideBar) {
  	return {
			'content': true,
			'isOpen': showSideBar
		}
  }

  sideBarShow() {
  	this.showSideBar = !this.showSideBar;
  	this.buttonClasses = this.setButtonClasses(this.showSideBar);
  }

  logOut() {
    this.userData.setUserLogOut();
  }
  
}

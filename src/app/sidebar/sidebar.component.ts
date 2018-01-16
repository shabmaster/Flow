import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	showSideBar: boolean = true;
	buttonClasses = this.setButtonClasses(this.showSideBar);

  constructor() { }

  ngOnInit() {
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
}

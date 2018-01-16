import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	showToggle: boolean = false;
	toggleClasses = this.setToggleClasses(this.showToggle);

  constructor() { }

  ngOnInit() {
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: DataService) {
  }

  ngOnInit() {
  }

  loginUser(e) {
  	e.preventDefault();
  	let userName = e.target.elements[0].value;
  	let password = e.target.elements[1].value;
  	
  	if (userName == 'admin' && password == 'admin') {
  		this.user.setUserLoggedIn();
  		this.router.navigate(['management']);
  	}
  }

}

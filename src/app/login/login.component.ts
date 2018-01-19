import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usersList: any[];
  private user: any = {};

  constructor(private router: Router, private users: DataService) {
  }

  ngOnInit() {
  }

  loginUser(e) {
  	e.preventDefault();
  	let userName = e.target.elements[0].value;
  	let password = e.target.elements[1].value;
    this.usersList = this.users.users;

    for(let i = 0; i< this.usersList.length; i++) {
      if (this.usersList[i].login == userName) {
        if (this.usersList[i].pass == password) {
          this.user = this.usersList[i];
          this.users.setUserLoggedIn(this.user);
          this.router.navigate(['dashboard']);
          break
        }
        else {
          alert ('Wrong password');
          break
        }
      }
      else {
        if (i == this.usersList.length-1) {
          alert('Can find user with this name');
        }
      }
    }
  }

}

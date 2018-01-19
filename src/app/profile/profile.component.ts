import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName: string;
  userAvatar: string;
  userProject: string;
  userEmail: string;
  userPhone: string;

  constructor(private userData: DataService) { }

  ngOnInit() {
  	this.userAvatar = this.userData.user.avatar;
  	this.userName = this.userData.user.fullname;
  	this.userProject = this.userData.user.project;
  	this.userEmail = this.userData.user.email;
  	this.userPhone = this.userData.user.phone;
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

	userName: string;

  constructor(private user: DataService) { }

  ngOnInit() {
  	this.userName = this.user.userName;
  }

}

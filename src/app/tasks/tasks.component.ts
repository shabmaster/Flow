import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

	taskForm: FormGroup;
  post: any;
  task: string = '';
  description: string = '';
  user: string = '';
  employee: any [];
  allNewTasks = [];
  allNewDescriptions = [];
  asignTo = [];


  constructor(private fb: FormBuilder, private userData: DataService) {
  	this.taskForm = fb.group ({
  		'task': [null, Validators.required],
  		'description': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(600)])],
  		'user': [null, Validators.required]
  	});
  	this.employee = this.userData.user.team;
  }

  ngOnInit() {
  }

  addTask(post) {
  	this.allNewTasks.push(post.task);
  	this.allNewDescriptions.push(post.description);
  	this.asignTo.push(post.user);
    this.taskForm.reset();
  }

}

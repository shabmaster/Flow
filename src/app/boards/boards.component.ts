import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

	boardCount: number;
	boardName: string = '';
	btnText: string = 'Add board';
	boards = ['To do', 'In progress', 'Done'];

  constructor() { }

  ngOnInit() {
  	this.boardCount = this.boards.length;
  }

  addBoard() {
  	this.boards.push(this.boardName);
  	this.boardName = '';
  	this.boardCount = this.boards.length;
  }

  removeBoard(i) {
    console.log(i);
  	this.boards.splice(i, 1);
    this.boardCount = this.boards.length;
  }
}

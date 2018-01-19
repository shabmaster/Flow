import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialbar',
  templateUrl: './socialbar.component.html',
  styleUrls: ['./socialbar.component.css']
})
export class SocialbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openURLInNewWindow(url, width, height) {
    if (typeof(width) == "undefined") {
        width = 800;
        height = 600;
    }
    if (typeof(height) == "undefined") {
        height = 600;
    }

   	let newWindow = window.open(url, 'share_window', 'width='+width+', height='+height);
   	if (window.focus) {
   		newWindow.focus();
   	}
	}

}

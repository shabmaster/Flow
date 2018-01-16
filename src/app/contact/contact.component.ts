import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	mapLat: number = 50.440285;
  mapLng: number = 30.519353;
  zoom: number = 12;
  oficeLat1: number = 50.440285;
  oficeLng1: number = 30.519353;
  oficeLat2: number = 50.421698;
  oficeLng2: number = 30.548535;

  constructor() { }

  ngOnInit() {
  }

}

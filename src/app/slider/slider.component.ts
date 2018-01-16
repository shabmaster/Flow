import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

	sliderImg = [];
	sliderContent = [];
	disableMouseScroll: boolean;
	slideAutoPlayTime: number;
	itemCount: number;
	count: number = 0;
	sliderClasses = ['slider__container active'];
	items;
	autoPlay;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
  	this.sliderImg = this.imageService.firstPageSliderImages;
		this.sliderContent = this.imageService.firstPageSliderContent;
		this.disableMouseScroll = this.imageService.disableMouseScroll;
		this.slideAutoPlayTime = this.imageService.slideAutoPlayTime;

		this.itemCount = this.sliderImg.length;

  	for (let i=1; i < this.itemCount; i++) {
  		this.sliderClasses.push('slider__container');
  	}

  	setTimeout(() => { this.showNextItem(); }, this.slideAutoPlayTime);
  }

  ngAfterViewChecked() {
  	this.items = document.querySelectorAll('.slider__container');
  }

	showNextItem() {
		this.items[this.count].classList.remove('active');
	  if(this.count < this.itemCount - 1) {
	    this.count++;
	  }
	  else {
	    this.count = 0;
	  }
	  this.items[this.count].classList.add('active');
	  clearTimeout(this.autoPlay);
	  this.autoPlay = setTimeout(() => { this.showNextItem(); }, this.slideAutoPlayTime);
	}

	showPreviousItem() {
	  this.items[this.count].classList.remove('active');
	  if(this.count > 0) {
	    this.count--;
	  }
	  else {
	    this.count = this.itemCount - 1;
	  }
	  this.items[this.count].classList.add('active');
	  clearTimeout(this.autoPlay);
	  this.autoPlay = setTimeout(() => { this.showNextItem(); }, this.slideAutoPlayTime);
	}

}
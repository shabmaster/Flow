import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }

  /* for home page slider */
  firstPageSliderImages: string[] = ['./assets/slide1.jpg', './assets/slide2.jpg', './assets/slide3.jpg'];
  firstPageSliderContent: string[] = ['Boost your personal and team productivity', 'Visualizing work in a team environment', 'Efficient Project Management. Simplified.'];
  disableMouseScroll = false;
  slideAutoPlayTime = 5000;

  /* for gallery */
  visibleImages = [];

  getImages() {
  	return this.visibleImages = this.galleryImages.slice(0);
  }

  getImage(id: number) {
  	return this.galleryImages.slice(0).find(image => image.id == id);
  }

  galleryImages = [
  	{'id': 1, 'tag':'teams', 'name':'some team photo', 'url':'./assets/team1.jpg'},
    {'id': 3, 'tag':'office', 'name':'good one', 'url':'./assets/office4.jpg'},
  	{'id': 8, 'tag':'teams', 'name':'photo of team', 'url':'./assets/team2.jpg'},
  	{'id': 15, 'tag':'teams', 'name':'one of the best team', 'url':'./assets/team3.jpeg'},
  	{'id': 14, 'tag':'teams', 'name':'one more team', 'url':'./assets/team4.jpg'},
    {'id': 13, 'tag':'office', 'name':'good office', 'url':'./assets/office2.jpg'},
  	{'id': 2, 'tag':'sketch', 'name':'good sketch', 'url':'./assets/sketch1.jpg'},
  	{'id': 9, 'tag':'sketch', 'name':'I like it', 'url':'./assets/sketch2.jpg'},
  	{'id': 7, 'tag':'sketch', 'name':'best sketch', 'url':'./assets/sketch3.jpg'},
  	{'id': 11, 'tag':'sketch', 'name':'one more', 'url':'./assets/sketch4.jpg'},
  	{'id': 12, 'tag':'office', 'name':'photo of office', 'url':'./assets/office1.jpeg'},
  	{'id': 10, 'tag':'teams', 'name':'some interesting team', 'url':'./assets/team7.jpg'},
  	{'id': 4, 'tag':'office', 'name':'I love this one', 'url':'./assets/office3.jpg'},
    {'id': 5, 'tag':'teams', 'name':'team5', 'url':'./assets/team5.jpg'},
    {'id': 6, 'tag':'teams', 'name':'just one more team', 'url':'./assets/team6.jpg'},
  	{'id': 16, 'tag':'office', 'name':'interesting for me', 'url':'./assets/office5.jpg'}
  ];

}

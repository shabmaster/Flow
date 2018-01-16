import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PageService } from '../page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // array of all items to be paged
  private allItems: any[];
  // pages navigation object
  pagesNavigation: any = {};
  // paged items
  pagedItems: any[];

  constructor(private http: Http, private pageService: PageService) { }

  ngOnInit() {
	  this.http.get('assets/about-pages-data.json').map((response: Response) => response.json())
	    .subscribe(data => {
	    	// set items to json response
	      this.allItems = data;
	 		  // initialize to page 1
	      this.setPage(1);
	  });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pagesNavigation.totalPages) {
      return;
    }

    // get pages object from service
    this.pagesNavigation = this.pageService.getPages(this.allItems.length, page);
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pagesNavigation.startIndex, this.pagesNavigation.endIndex + 1);
  }

}

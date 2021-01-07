import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { ViewportScroller } from '@angular/common';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

	images: Array<any> = [
	{
		image: 'https://image.winudf.com/v2/image1/Y29tLnBlcmZhY3RhcHBzLmphbWVzLm5hdHVyZV9zY3JlZW5fMF8xNTQyOTA5OTczXzA5OQ/screen-0.jpg?fakeurl=1&type=.jpg',
		thumbImage: 'https://image.winudf.com/v2/image1/Y29tLnBlcmZhY3RhcHBzLmphbWVzLm5hdHVyZV9zY3JlZW5fMF8xNTQyOTA5OTczXzA5OQ/screen-0.jpg?fakeurl=1&type=.jpg',
		alt: 'slide(1)'
	},
	{
		image: 'https://image.winudf.com/v2/image1/Y29tLnBlcmZhY3RhcHBzLmphbWVzLm5hdHVyZV9zY3JlZW5fNV8xNTQyOTA5OTc5XzA2MQ/screen-5.jpg?h=355&fakeurl=1&type=.jpg',
		thumbImage: 'https://image.winudf.com/v2/image1/Y29tLnBlcmZhY3RhcHBzLmphbWVzLm5hdHVyZV9zY3JlZW5fNV8xNTQyOTA5OTc5XzA2MQ/screen-5.jpg?h=355&fakeurl=1&type=.jpg',
		alt: 'slide(2)'
	},
	{
		image: 'https://www.wallpapers13.com/wp-content/uploads/2016/02/Nature-green-lake-Hd-wallpaper-915x515.jpg',
		thumbImage: 'https://www.wallpapers13.com/wp-content/uploads/2016/02/Nature-green-lake-Hd-wallpaper-915x515.jpg',
		alt: 'slide(3)'
	},
	{
		image: 'https://www.wallpapers13.com/wp-content/uploads/2016/05/Sunrise-on-the-Zell-Am-See-lake-in-Austria-Beautiful-HD-Wallpaper-2880x1800-915x515.jpg',
		thumbImage: 'https://www.wallpapers13.com/wp-content/uploads/2016/05/Sunrise-on-the-Zell-Am-See-lake-in-Austria-Beautiful-HD-Wallpaper-2880x1800-915x515.jpg',
		alt: 'slide(4)'
	}
	];

	constructor(private viewportScroller: ViewportScroller) { }

	public onClick(elementId: string): void { 
		this.viewportScroller.scrollToAnchor(elementId);
	}

	ngOnInit(): void {
	}

}

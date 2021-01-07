import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	imageObject: Array<object> = [
	{
		image: 'assets/slide/slide(1).jpg',
        thumbImage: 'assets/slide/slide(1).jpg',
        title: 'Reuníon de emprendedores en Maturín Venezuela'
	},
	{
		image: 'assets/slide/slide(2).jpg',
        thumbImage: 'assets/slide/slide(2).jpg',
	},
	{
		image: 'assets/slide/slide(3).jpg',
        thumbImage: 'assets/slide/slide(3).jpg',
	},
	{
		image: 'assets/slide/slide(4).jpg',
        thumbImage: 'assets/slide/slide(4).jpg',
	},
	{
		image: 'assets/slide/slide(5).jpg',
        thumbImage: 'assets/slide/slide(5).jpg',
	},
	{
		image: 'assets/slide/slide(6).jpg',
        thumbImage: 'assets/slide/slide(6).jpg',
	},
	{
		image: 'assets/slide/slide(7).jpg',
        thumbImage: 'assets/slide/slide(7).jpg',
	},
	{
		image: 'assets/slide/slide(8).jpg',
        thumbImage: 'assets/slide/slide(8).jpg',
	}
	];

	imageSize: object = {
			width: '800px', 
			height: '600px', 
			space: 4
		};

	constructor(private route: Router) { }

	showNew(a)
	{
		console.log(this.imageObject[a])
		//this.route.navigate(['/auth/login']);
	}

	ngOnInit(): void {
	}

}

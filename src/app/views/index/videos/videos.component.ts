import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
	selector: 'app-videos',
	templateUrl: './videos.component.html',
	styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit{

	videos: Array<object> = [];
	private unsubscribe$: Subject<any> = new Subject();

	constructor(
		private youtube: YoutubeService
		) {}

	ngOnInit() {
		this.youtube
		.getVideosForChannel('UCjoFckSzE1jUM_kmtVHNlKg', 15)
		.pipe(takeUntil(this.unsubscribe$))
		.subscribe(list => {
			for (let element of list["items"]) {
				this.videos.push({video: 'https://www.youtube.com/watch?v='+element.id.videoId});
			} 
		});
	}
}

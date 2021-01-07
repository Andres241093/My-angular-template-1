import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {


  constructor(public http: HttpClient) { }

  	apiKey : string = environment.youtubeApiKey;

    getVideosForChannel(channel, maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet&type=video,id&maxResults=' + maxResults;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
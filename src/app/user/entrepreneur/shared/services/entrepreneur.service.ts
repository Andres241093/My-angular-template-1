import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurService {

  url: string;
  
  constructor(private http: HttpClient) { 
  	this.url = environment.url;
  }

  save(entrepreneur): Observable<any>
  {
  	return this.http.post(this.url+'/auth/signup/entrepreneur',entrepreneur);
  }

}

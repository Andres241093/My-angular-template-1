import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SetTokenService implements HttpInterceptor {

	tokenized: any;

	constructor() { }


	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

		if(!request['url'].includes('googleapis'))
		{
			this.tokenized = request.clone({
				setHeaders: {
					Authorization: 'Bearer '+ localStorage.getItem('auth-token')
				}
			});
		}
		else
		{
			this.tokenized = request.clone({}); 
		}
		
		return next.handle(this.tokenized);
	}

}

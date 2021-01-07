import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BlockUiFlagService {

	public loading: BehaviorSubject<boolean>;

	constructor() { 
		this.loading = new BehaviorSubject<boolean>(false);
	}

	start()
	{
		this.loading.next(true);
	}

	stop()
	{
		this.loading.next(false);
	}

	loadSpinner():Observable<boolean>
	{
		return this.loading.asObservable();
	}
}

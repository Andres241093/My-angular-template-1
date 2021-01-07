import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private router: Router) { }

	redirect(userType = null){
		if (userType === 'admin'){
			this.router.navigate(['/user/admin/session']);
		}
	}
}
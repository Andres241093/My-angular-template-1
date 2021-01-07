import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event, NavigationCancel, NavigationError } from "@angular/router";
import { BlockUiFlagService } from './services/block-ui-flag.service';
import { Observable } from 'rxjs';
import { User } from './shared/models/user.model';
import { AuthService } from './auth/shared/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	loading: Observable<boolean>;
	user: User;
	initPath: string = '/';

	constructor(
		private router: Router,
		private blockUiFlagService: BlockUiFlagService,
		private authService: AuthService
		) {

		this.loading = this.blockUiFlagService.loadSpinner();

		this.authService.getUser().subscribe(res => {
			this.user = res;
			this.checkInitPath(this.user);
		});

		this.router.events.subscribe((routerEvent: Event) => {
			if (routerEvent instanceof NavigationStart) 
			{
				this.blockUiFlagService.start();
			}

			if (routerEvent instanceof NavigationEnd ||
				routerEvent instanceof NavigationCancel ||
				routerEvent instanceof NavigationError) 
			{
				this.blockUiFlagService.stop();
			}
		});
	}

	checkInitPath(user: User)
	{
		if(user != null)
		{
			switch(user.userType)
			{
				case 'admin':
				this.initPath = '/user/admin/session';
				break;
			}
		}
		else
		{
			this.initPath = '/';
		}
	}

}

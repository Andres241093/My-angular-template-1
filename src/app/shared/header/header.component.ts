import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { BlockUiFlagService } from 'src/app/services/block-ui-flag.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	user: User;
	initPath: string = '/';
	

	constructor(
		private authService: AuthService,
		private route: Router,
		private blockUiFlagService: BlockUiFlagService) { 
		this.authService.getUser().subscribe(res => {
			this.user = res;
			this.checkInitPath(this.user);
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

	logout()
	{
		this.blockUiFlagService.start();
		this.authService.logoutAPI().subscribe(res => {
			this.authService.logout();
			this.blockUiFlagService.stop();
		});
		this.route.navigate(['/']);
	}
	ngOnInit() {
	}

}

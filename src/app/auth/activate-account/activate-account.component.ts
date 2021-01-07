import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-activate-account',
	templateUrl: './activate-account.component.html',
	styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {

	token: string; 

	constructor(
		private authService: AuthService,
		private alertService: AlertService,
		private route: Router,
		private activatedRoute: ActivatedRoute) { 

		this.activatedRoute.params.subscribe(res=>{
			this.token = res['token'];
		});
	}

	ngOnInit(): void {
		this.authService.activateAccount(this.token).subscribe(res=>{
			this.alertService.show('Cuenta activada exitosamente','Cerrar',3000);
			this.route.navigate(['/']);
		});
	}

}

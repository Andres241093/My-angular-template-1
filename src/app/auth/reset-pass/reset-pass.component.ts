import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { BlockUiFlagService } from 'src/app/services/block-ui-flag.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';

class NewPassword
{
	email: string;
	password: string;
	password_confirmation: string;
	token: string;
}

@Component({
	selector: 'app-reset-pass',
	templateUrl: './reset-pass.component.html',
	styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {

	token: string;
	hide_password: boolean = true;
	hide_password_confirmation: boolean = true; 

	resetPassForm: FormGroup = new FormGroup({
		email: new FormControl('',[Validators.required,Validators.email]),
		password: new FormControl('',[Validators.required, Validators.minLength(6)]),
		password_confirmation: new FormControl('',[Validators.required, Validators.minLength(6)])
	});

	constructor(		
		private blockUiFlagService: BlockUiFlagService,
		private authService: AuthService,
		private alertService: AlertService,
		private route: Router,
		private activatedRoute: ActivatedRoute) { 
		this.activatedRoute.params.subscribe(res=>{
			this.token = res['token'];
		});
	}

	save()
	{
		let newPassword = new NewPassword();
		newPassword.email = this.resetPassForm.value.email;
		newPassword.password = this.resetPassForm.value.password;
		newPassword.password_confirmation = this.resetPassForm.value.password_confirmation;
		newPassword.token = this.token;

		this.blockUiFlagService.start();
		this.authService.resetPassword(newPassword).subscribe(res => {
			console.log(res)
			this.alertService.show('Cambio de contraseña realizado con éxito','Cerrar',3000);
			this.route.navigate(['/auth/login']);
			this.blockUiFlagService.stop();
		});
	}

	ngOnInit(): void {
		this.authService.recoveryPasswordCheckToken(this.token).subscribe(res=>{
			this.blockUiFlagService.stop();
		}, err =>{
			this.alertService.show('El enlace es inválido o ya expiró','Close',6000);
			this.route.navigate(['/auth/login']);
		});
	}

}

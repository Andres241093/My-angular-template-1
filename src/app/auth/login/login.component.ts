import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { AuthService } from '../shared/services/auth.service';
import { BlockUiFlagService } from 'src/app/services/block-ui-flag.service';
import { AlertService } from 'src/app/services/alert.service';

class Login
{
	email: string;
	password: string;
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	hide = true;

	loginForm: FormGroup = new FormGroup({
		email: new FormControl('',[Validators.required]),
		password: new FormControl('',[Validators.required])
	});

	constructor(
		private blockUiFlagService: BlockUiFlagService,
		private loginService: LoginService,
		private authService: AuthService,
		private alertService: AlertService) { }

	fetchFormData()
	{
		let loginData = new Login();
		loginData.email = this.loginForm.value.email;
		loginData.password = this.loginForm.value.password;

		return loginData;
	}

	login()
	{
		this.blockUiFlagService.start();
		let data = this.fetchFormData();
		this.authService.login(data).subscribe(res => {
			this.loginService.redirect(res.userType);
			this.alertService.show('Bienvenido(a), '+res.name+' '+res.surname,'Cerrar',3000);

		});
	}

	ngOnInit(): void {
	}

}

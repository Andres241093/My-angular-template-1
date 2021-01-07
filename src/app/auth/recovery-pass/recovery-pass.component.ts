import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { BlockUiFlagService } from 'src/app/services/block-ui-flag.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

class Email
{
	email: string;
}

@Component({
  selector: 'app-recovery-pass',
  templateUrl: './recovery-pass.component.html',
  styleUrls: ['./recovery-pass.component.scss']
})
export class RecoveryPassComponent implements OnInit {

	recoveryForm: FormGroup = new FormGroup({
		email: new FormControl('',[Validators.required,Validators.email])
	});

	constructor(
		private blockUiFlagService: BlockUiFlagService,
		private authService: AuthService,
		private alertService: AlertService,
		private route: Router) { }

	recoveryPass()
	{
		let email = new Email();
		email.email = this.recoveryForm.value.email;
		this.blockUiFlagService.start();
		this.authService.recoveryPassword(email).subscribe(res => {
			this.alertService.show(res.message,'Cerrar',3000);
			this.blockUiFlagService.stop();
		});
	}

	ngOnInit(): void {
	}

}

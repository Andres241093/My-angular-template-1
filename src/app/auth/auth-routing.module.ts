import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'sign-up',
		component: SignUpComponent
	},
	{
		path: 'recovery-password',
		component: RecoveryPassComponent
	},
	{
		path: 'reset-password/:token',
		component: ResetPassComponent
	},
	{
		path: 'activate-account/:token',
		component: ActivateAccountComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }

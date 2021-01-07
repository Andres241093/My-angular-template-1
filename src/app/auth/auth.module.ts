import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';


@NgModule({
  declarations: [LoginComponent, SignUpComponent, RecoveryPassComponent, ResetPassComponent, ActivateAccountComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }

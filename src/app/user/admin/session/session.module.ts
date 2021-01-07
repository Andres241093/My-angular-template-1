import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

import { SessionRoutingModule } from './session-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule
  ]
})
export class SessionModule { }

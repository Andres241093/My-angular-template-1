import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { CreateComponent } from './create/create.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    EnterpriseRoutingModule
  ]
})
export class EnterpriseModule { }

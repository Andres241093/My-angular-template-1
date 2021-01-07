import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PymeRoutingModule } from './pyme-routing.module';
import { SharedModule } from './shared/shared.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    PymeRoutingModule,
    SharedModule
  ]
})
export class PymeModule { }

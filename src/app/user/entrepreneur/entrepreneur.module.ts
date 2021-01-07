import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurRoutingModule } from './entrepreneur-routing.module';
import { SharedModule } from './shared/shared.module';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    EntrepreneurRoutingModule,
    SharedModule
  ]
})
export class EntrepreneurModule { }

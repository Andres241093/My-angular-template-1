import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';

import { AdminOptionUsersComponent } from './admin-option-users/admin-option-users.component';
import { AdminOptionProgramsComponent } from './admin-option-programs/admin-option-programs.component';
import { AdminOptionLegalComponent } from './admin-option-legal/admin-option-legal.component';
import { AdminOptionAnotherOptionsComponent } from './admin-option-another-options/admin-option-another-options.component';

const components: Array<any> =[
	AdminOptionUsersComponent, 
	AdminOptionProgramsComponent, 
	AdminOptionLegalComponent, 
	AdminOptionAnotherOptionsComponent
]

const modules: Array<any> =[
	AppSharedModule
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    modules
  ],
  exports: [components,modules]
})
export class SharedModule { }

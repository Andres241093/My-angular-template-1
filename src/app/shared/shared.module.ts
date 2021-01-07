import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlockUiComponent } from './block-ui/block-ui.component';

const modules: Array<any> = [
	MaterialModule,
	FlexLayoutModule,
  RouterModule
];

const components: Array<any> = [
	HeaderComponent,
	FooterComponent,
  BlockUiComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    modules
  ],
  exports: [components,modules]
})
export class SharedModule { }

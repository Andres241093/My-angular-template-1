import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexModule } from './index/index.module';
import { AboutUsModule } from './about-us/about-us.module';

const modules: Array<any> = [
	IndexModule,
	AboutUsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules]
})
export class ViewsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatCarouselModule } from '@ngmodule/material-carousel';

const components: Array<any> = [
	NgImageSliderModule,
	MatCarouselModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
  	AppSharedModule,
  	NgImageSliderModule,
	MatCarouselModule
  ]
})
export class SharedModule { }

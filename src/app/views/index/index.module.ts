import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

import { IndexComponent } from './index/index.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { JoinUsComponent } from './join-us/join-us.component';

const components: Array<any> = [
	IndexComponent
];

@NgModule({
  declarations: [
  	components,
  	CarouselComponent, 
  	NewsComponent, 
  	VideosComponent, 
  	JoinUsComponent
  	],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [components]
})
export class IndexModule { }

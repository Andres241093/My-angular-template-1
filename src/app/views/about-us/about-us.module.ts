import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { NgxOrgChartModule } from 'ngx-org-chart';

import { IndexComponent } from './index/index.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { OrganizationalStructureComponent } from './organizational-structure/organizational-structure.component';

const components: Array<any> = [
	IndexComponent
];

@NgModule({
  declarations: [
  	components, 
  	WhoWeAreComponent, 
  	MissionComponent, 
  	VisionComponent, 
  	OrganizationalStructureComponent
  	],
  imports: [
    CommonModule,
    NgxOrgChartModule,
    SharedModule
  ],
  exports: [components]
})
export class AboutUsModule { }

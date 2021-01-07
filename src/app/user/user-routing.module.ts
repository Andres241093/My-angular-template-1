import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'enterprise',
		loadChildren: () => import('./enterprise/enterprise.module')
		.then(m => m.EnterpriseModule)
	},
	{
		path: 'pyme',
		loadChildren: () => import('./pyme/pyme.module')
		.then(m => m.PymeModule)
	},
	{
		path: 'entrepreneur',
		loadChildren: () => import('./entrepreneur/entrepreneur.module')
		.then(m => m.EntrepreneurModule)
	},
	{
		path: 'admin',
		loadChildren: () => import('./admin/admin.module')
		.then(m => m.AdminModule)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

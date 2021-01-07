import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './views/index/index/index.component';
import { IndexComponent as AboutUsIndex } from './views/about-us/index/index.component';

const routes: Routes = [
	{
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
		path: 'auth'
	},
	{
		loadChildren: () => import('./user/user.module').then(m => m.UserModule),
		path: 'user'
	},
	{
		component: AboutUsIndex,
		path: 'about-us'
	},
	{
		component: IndexComponent,
		path: ''
	},{ path:'**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
  	relativeLinkResolution: 'legacy',
  	anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

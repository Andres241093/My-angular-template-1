import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';
import { BlockUiFlagService } from 'src/app/services/block-ui-flag.service';

@Injectable({
	providedIn: 'root'
})
export class XhrErrorHandlerService implements ErrorHandler
{

	constructor(
		private injector: Injector,
		private readonly zone: NgZone,
		private router: Router,
		private alertService: AlertService,
		private blockUiFlagService: BlockUiFlagService) { }

	handleError(error: Error | HttpErrorResponse)
	{
		console.log('error handler service');

		if (error instanceof HttpErrorResponse) 
		{
			var errors: Array<string> = new Array<string>();

			for (const prop in error.error) 
			{
				
				errors.push(error.error[prop])
				
			}
			errors = errors.reverse();

			console.log(errors)

			for (var i = 0; i < errors.length; i++) 
			{
				this.zone.run(() => {
					this.alertService.show(errors[i],'Cerrar',6000);
				});
			}

			if (error.status == 0) 
			{
				this.zone.run(() => {
					this.alertService.show('No se pudo establecer conexión con el servidor. Por favor, revisa tu conexión a internet','500 OK',6000);
				});
			}

			if (error.status == 500) 
			{
				this.zone.run(() => {
					this.alertService.show('Error interno del servidor','500 OK',6000);
				});
				console.log(error);
			}

			if (error.status == 404) 
			{
				this.zone.run(() => {
					this.alertService.show('Recurso no encontrado','404 OK',6000);
				});
				this.router.navigate(['/users/home']);
			}
			this.blockUiFlagService.stop();
		}
		else 
		{
			this.blockUiFlagService.stop();
			throw error;
		}
	}
}

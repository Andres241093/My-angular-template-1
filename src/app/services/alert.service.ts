import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) { }

  	show(mssg: string, status: string, time: number)
	{
		
		const snackBar = this.snackBar.open(mssg, status, {
			horizontalPosition: 'right',
			verticalPosition: 'top',
			duration: time,
		});
		snackBar.onAction().subscribe(() => {
			snackBar.dismiss();
		});
	}
}

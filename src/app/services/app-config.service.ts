import { Injectable } from '@angular/core';
import { AuthService } from '../auth/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private authService: AuthService) {}

  load(): Promise<any>  
  {
  	return this.authService.authenticate().toPromise().catch( (error) => {});
  }
}
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Firebase connection
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

//Firebase DB service
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './views/views.module';

import { XhrErrorHandlerService } from './services/xhr-error-handler.service';
import { SetTokenService } from './services/set-token.service';
import { AppConfigService } from './services/app-config.service';

export function appInit(appConfigService: AppConfigService) {
  return () => appConfigService.load();
}

@NgModule({
  declarations: [
  AppComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  SharedModule,
  HttpClientModule,
  ViewsModule,
  AngularFirestoreModule,
  AngularFireAnalyticsModule,
  AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SetTokenService,
    multi: true
  },
  AppConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    multi: true,
    deps: [AppConfigService]
  },
  XhrErrorHandlerService,
  { provide: ErrorHandler, useClass: XhrErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

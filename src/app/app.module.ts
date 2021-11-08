import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginModule, XhrInterceptor } from './feature/login/login.module';
import { AppEffects } from './state/app.effects';
import { reducer } from './state/app.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LoginService } from './shared/services/login.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    StoreModule.forRoot({userContext: reducer}),
    StoreDevtoolsModule.instrument({maxAge:25000, logOnly: environment.production}),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    // LoginService,
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

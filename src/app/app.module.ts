import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { IAppState } from './store/state/app-state';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // routing
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    // app modules
    AuthModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>, ngReduxRouter: NgReduxRouter) {
    ngReduxRouter.initialize((x: IAppState) => x.router);
  }

}

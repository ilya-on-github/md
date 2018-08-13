import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecureComponent} from './components/secure/secure.component';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [SecureComponent]
})
export class AdminModule {
}

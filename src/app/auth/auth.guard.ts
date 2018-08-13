import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionActions } from '../store/actions/session.actions';
import { IAppState } from '../store/state/app-state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _redux: NgRedux<IAppState>,
              private _sessionActions: SessionActions) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // TODO: authentication
    // return true;
    // if (this._redux.getState().authentication.isAuthenticated) {
    //   return true;
    // } else {
      this._sessionActions.notAuthenticated();
    return true;
    // }
  }
}

import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../state/app-state';

@Injectable()
export class SessionActions {
  static LOGIN_USER = 'LOGIN_USER';
  static LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
  static LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

  static NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';

  static SESSION_EXPIRED = 'SESSION_EXPIRED';

  static LOGOUT_USER = 'LOGOUT_USER';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  loginUser(credentials) {
    this.ngRedux.dispatch({
      type: SessionActions.LOGIN_USER,
      payload: credentials,
    });
  }

  logoutUser() {
    this.ngRedux.dispatch({type: SessionActions.LOGOUT_USER});
  }

  notAuthenticated() {
    this.ngRedux.dispatch({type: SessionActions.NOT_AUTHENTICATED});
  }
}

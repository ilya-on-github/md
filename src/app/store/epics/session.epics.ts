import { Injectable } from '@angular/core';
import { SessionActions } from '../actions/session.actions';
import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

@Injectable()
export class SessionEpics {

  login = action$ => {
    return action$
      .pipe(
        ofType(SessionActions.LOGIN_USER),
        map(({payload}) => {
          const user = knownUsers
            .find(x => x.credentials.username === payload.username && x.credentials.password === payload.password);
          if (!!user) {
            return {
              type: SessionActions.LOGIN_USER_SUCCESS,
              payload: user
            };
          }

          return {
            type: SessionActions.LOGIN_USER_ERROR
          };
        })
      );
  };
}

const knownUsers = [
  {
    id: '1',
    username: 'user-1',
    credentials: {
      username: 'user1',
      password: 'user1'
    }
  }
];


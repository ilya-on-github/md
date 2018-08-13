import { Reducer } from 'redux';
import { AUTHENTICATION_INITIAL_STATE, IAuthenticationState } from './authentication.state';

export const authenticationReducer: Reducer<IAuthenticationState> = (state = AUTHENTICATION_INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

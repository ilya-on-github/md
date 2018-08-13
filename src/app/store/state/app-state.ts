import { combineReducers } from 'redux';
import { authenticationReducer } from './authentication/authentication.reducer';
import { AUTHENTICATION_INITIAL_STATE, IAuthenticationState } from './authentication/authentication.state';
import { routerReducer } from './router/router.reducer';
import { ROUTER_INITIAL_STATE } from './router/router.state';

export interface IAppState {
  router: string;
  authentication: IAuthenticationState;
}

export const INITIAL_STATE: IAppState = {
  router: ROUTER_INITIAL_STATE,
  authentication: AUTHENTICATION_INITIAL_STATE
};

export const appStateReducer = combineReducers<IAppState>({
  router: routerReducer,
  authentication: authenticationReducer
});

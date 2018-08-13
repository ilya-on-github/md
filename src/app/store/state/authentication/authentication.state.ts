export interface IAuthenticationState {
  isAuthenticated: boolean;
}

export const AUTHENTICATION_INITIAL_STATE: IAuthenticationState = {
  isAuthenticated: false
};

import { NgModule } from '@angular/core';
import { DevToolsExtension, NgRedux } from '@angular-redux/store';
import { SessionActions } from './actions/session.actions';
import { appStateReducer, IAppState, INITIAL_STATE } from './state/app-state';
import { SessionEpics } from './epics/session.epics';
import { createEpicMiddleware } from 'redux-observable';

@NgModule({
  providers: [
    SessionActions,
    SessionEpics
  ]
})
export class StoreModule {

  constructor(ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension,
              sessionEpics: SessionEpics) {

    const epicMiddleware = createEpicMiddleware();
    const reducer = appStateReducer;
    const initialState = INITIAL_STATE;
    const middleware = [
      epicMiddleware
    ];
    const enhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(reducer, initialState, middleware, enhancers);

    epicMiddleware.run(sessionEpics.login);
  }
}

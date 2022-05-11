import { combineReducers } from 'redux';

import userReducer from 'redux/reducers/user/reducer';

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (appState, action) => {
  let state = appState;
  if (action.type === 'RESET_APP_STATE') {
    state = undefined;
  }

  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

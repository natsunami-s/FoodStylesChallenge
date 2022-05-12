import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './rootReducer';
import reduxPersist from './reduxPersist';

const persistConfig = reduxPersist.storeConfig;
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default () => {
  return { store, persistor };
};

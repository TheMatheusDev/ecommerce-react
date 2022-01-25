import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const middlewares = [logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

export { store, persistor };

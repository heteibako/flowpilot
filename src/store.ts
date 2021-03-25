import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
var middleware = [thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export type RootStore = ReturnType<typeof rootReducer>;

export default store; //

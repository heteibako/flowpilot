import { combineReducers } from 'redux';
import StocksReducer from './StocksReducer';

const rootReducer = combineReducers({
  stocks: StocksReducer,
});

export default rootReducer;

import {
  StocksDispatchTypes,
  GET_STOCKS_LOADING,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_FAIL,
  IData,
} from '../actions/StocksActionTypes';

export interface IDefaultState {
  loading: boolean;
  error: {};
  stocks: IData[];
}

const defaultState: IDefaultState = {
  loading: false,
  stocks: [],
  error: '',
};

const StocksReducer = (state: IDefaultState = defaultState, action: StocksDispatchTypes): IDefaultState => {
  switch (action.type) {
    case GET_STOCKS_LOADING:
      return { ...state, loading: true };

    case GET_STOCKS_SUCCESS:
      return { ...state, loading: false, stocks: action.payload };

    case GET_STOCKS_FAIL:
      return { loading: false, error: action.payload, stocks: [] };
    default:
      break;
  }
  return state;
};

export default StocksReducer;

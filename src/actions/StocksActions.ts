import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GET_STOCKS_LOADING,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_FAIL,
  StocksDispatchTypes,
  DataType,
} from './StocksActionTypes';

export const getStocks = (sort: string, dateFrom: string, dateTo: string) => async (
  dispatch: Dispatch<StocksDispatchTypes>
) => {
  try {
    dispatch({
      type: GET_STOCKS_LOADING,
    });

    const res = await axios.get<DataType[]>(
      `${process.env.REACT_APP_BASE_URL}intraday?access_key=${process.env.REACT_APP_API_KEY}&symbols=AAPL&sort=${sort}&date_from=${dateFrom}&date_to=${dateTo}`
    );
    dispatch({
      type: GET_STOCKS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_STOCKS_FAIL,
      payload: error,
    });
  }
};

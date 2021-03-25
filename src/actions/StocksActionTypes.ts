export const GET_STOCKS_SUCCESS = 'GET_STOCKS_SUCCESS';
export const GET_STOCKS_LOADING = 'GET_STOCKS_LOADING';
export const GET_STOCKS_FAIL = 'GET_STOCKS_FAIL';

export type StockType = {
  open: number;
  high: number;
  low: number;
  last: number;
  close: number;
  volume: number;
  date: string;
  symbol: string;
  exchange: string;
};

export interface DataType {
  stocks: StockType[];
  pagination?: { limit: number; offset: number; count: number; total: number };
}

export interface StocksLoading {
  type: typeof GET_STOCKS_LOADING;
}

export interface StocksSuccess {
  type: typeof GET_STOCKS_SUCCESS;
  payload: DataType[];
}

export interface StocksFail {
  type: typeof GET_STOCKS_FAIL;
  payload: any;
}

export type StocksDispatchTypes = StocksLoading | StocksSuccess | StocksFail;

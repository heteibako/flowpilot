import { Table } from 'antd';
import { StockType } from '../actions/StocksActionTypes';
interface Props {
  data: StockType[];
}

export const DataTable = ({ data }: Props) => {
  const columns = [
    {
      title: 'Open',
      dataIndex: 'open',
    },
    {
      title: 'High',
      dataIndex: 'high',
    },
    {
      title: 'Low',
      dataIndex: 'low',
    },
    {
      title: 'Last',
      dataIndex: 'last',
    },
    {
      title: 'Close',
      dataIndex: 'close',
    },
    {
      title: 'Volume',
      dataIndex: 'volume',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
    },
    {
      title: 'Exchange',
      dataIndex: 'exchange',
    },
  ];

  return <Table columns={columns} dataSource={data} key='1' />;
};

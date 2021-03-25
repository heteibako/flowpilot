import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getStocks } from './actions/StocksActions';
import { DatePicker, Space } from 'antd';
import { Select } from 'antd';
import { DataTable } from './components/Table';
import { RootStore } from './store';
import LineChart from './components/LineChart';
import { Typography, Row, Col } from 'antd';
import dayjs from 'dayjs';

import './App.css';

interface Props {
  getStocks: any;
  stocks: any;
}

const App = ({ getStocks, stocks }: Props) => {
  const [query, setQuery] = useState<string>('DESC');
  const [dateFrom, setDateFrom] = useState<string>('');
  const [dateTo, setDateTo] = useState<string>('');

  const querySort = (value: string): void => {
    setQuery(value);
  };

  const { Title } = Typography;
  const { Option } = Select;
  const { loading, error } = stocks;

  const handleFromChange: any = (dateString: string): void => {
    setDateFrom(dayjs(dateString).format('YYYY-MM-DD'));
  };

  const handleToChange: any = (dateString: string): void => {
    setDateTo(dayjs(dateString).format('YYYY-MM-DD'));
  };

  useEffect(() => {
    getStocks(query, dateFrom, dateTo);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, dateFrom, dateTo]);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div className='App'>
      <Row>
        <Col span={12} offset={6}>
          <Title>Stock Market</Title>
        </Col>
      </Row>

      <Space size='small'>
        <Select defaultValue='ASC' style={{ width: 120 }} onChange={querySort}>
          <Option value='DESC'>DESC</Option>
          <Option value='ASC'>ASC</Option>
        </Select>
        <DatePicker onChange={handleFromChange} placeholder='From' />
        <DatePicker onChange={handleToChange} placeholder='To' />
      </Space>

      <div style={{ height: 300 }}>{stocks?.stocks?.data && <LineChart data={stocks.stocks.data} />}</div>

      <DataTable data={stocks?.stocks.data} />
    </div>
  );
};

const mapStateToProps = (state: RootStore) => ({
  stocks: state.stocks,
});

export default connect(mapStateToProps, { getStocks })(App);

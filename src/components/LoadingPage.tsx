import { Row, Spin } from 'antd';
import { ReactElement } from 'react';

export default function LoadingPage(): ReactElement {
  return (
    <Row align='middle' justify='center' style={{ height: '30vh' }}>
      <Spin size='large' />
    </Row>
  );
}

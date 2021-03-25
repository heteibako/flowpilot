import { Row } from 'antd';
import { ReactElement } from 'react';

export default function ErrorPage(): ReactElement {
  return (
    <Row align='middle' justify='center' style={{ height: '100vh' }}>
      <h1>An Error Occured</h1>
    </Row>
  );
}

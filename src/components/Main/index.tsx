import React from 'react';
import { Row, Button, Col } from 'antd';

type Props = {};

const Main = (props: Props) => {
  return (
    <div>
      <Col>
        <Row>듣기 시험</Row>
        <Row>플레이리스트</Row>
        <Row>만들기</Row>
        <Row>
          <Button>로그인</Button>
        </Row>
        <Row>
          <Button>듣플만이란?</Button>
        </Row>
      </Col>
    </div>
  );
};

export default Main;

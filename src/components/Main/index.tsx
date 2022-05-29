import React, { ReactElement, useState } from 'react';
import { Row, Button, Col, Layout, Space, Typography } from 'antd';
import LoginBox from './LoginBox';

type Props = {};

const Main = (props: Props): ReactElement => {
  const { Content, Footer } = Layout;
  const { Title } = Typography;
  const [isLoginBox, setIsLoginBox] = useState<boolean>(false);

  const handleLoginBox = (): void => {
    setIsLoginBox(!isLoginBox);
  };

  return (
    <Layout>
      <Content>
        <Row justify="center" align="middle" style={{ margin: '30px auto' }}>
          <Col>
            <Space
              direction="vertical"
              size={1}
              style={{ margin: '10px auto' }}
            >
              <Row>
                <Title>
                  듣기 시험 <br /> 플레이리스트 <br /> 만들기
                </Title>
              </Row>
            </Space>
            <Row justify="center">
              <Space direction="vertical" size={5} align="center">
                {isLoginBox ? (
                  <LoginBox />
                ) : (
                  <Button size="large" shape="round" onClick={handleLoginBox}>
                    로그인
                  </Button>
                )}
                <Button size="large" shape="round">
                  듣플만이란?
                </Button>
              </Space>
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer style={{ backgroundColor: 'white', textAlign: 'center' }}>
        듣기시험 플레이리스트 만들기
      </Footer>
    </Layout>
  );
};

export default Main;

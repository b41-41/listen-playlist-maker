import React, { ReactElement, useState } from 'react';
import { Row, Button, Col, Layout, Space, Typography } from 'antd';
import LoginBox from './LoginBox';
import JoinBox from './JoinBox';
import About from './About';

type Props = {};

const Main = (props: Props): ReactElement => {
  const { Content, Footer } = Layout;
  const { Title } = Typography;
  const [isLoginBox, setIsLoginBox] = useState<boolean>(false);
  const [isJoinBox, setIsJoinBox] = useState<boolean>(false);
  const [isAbout, setIsAbout] = useState<boolean>(false);

  const onOpenLoginBox = (): void => {
    setIsLoginBox(!isLoginBox);
  };

  const onOpenJoinBox = (): void => {
    setIsJoinBox(!isJoinBox);
  };

  const onOpenAbout = (): void => {
    setIsAbout(!isAbout);
  };

  const handleReset = (): void => {
    setIsJoinBox(false);
    setIsLoginBox(false);
    setIsAbout(false);
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
                {!isLoginBox && !isJoinBox && !isAbout && (
                  <>
                    <Button size="large" shape="round" onClick={onOpenLoginBox}>
                      로그인
                    </Button>
                    <Button size="large" shape="round" onClick={onOpenJoinBox}>
                      회원가입
                    </Button>
                    <Button size="large" shape="round" onClick={onOpenAbout}>
                      듣플만이란?
                    </Button>
                  </>
                )}
                {isLoginBox && (
                  <>
                    <LoginBox />
                    <Button size="middle" shape="round" onClick={handleReset}>
                      돌아가기
                    </Button>
                  </>
                )}
                {isJoinBox && (
                  <>
                    <JoinBox />
                    <Button size="middle" shape="round" onClick={handleReset}>
                      돌아가기
                    </Button>
                  </>
                )}
                {isAbout && (
                  <>
                    <About />
                    <Button size="middle" shape="round" onClick={handleReset}>
                      돌아가기
                    </Button>
                  </>
                )}
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

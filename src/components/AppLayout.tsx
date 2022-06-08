import React, { ReactElement, ReactNode } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../fbase';

import { Layout, Row, Button, Typography } from 'antd';
import Manage from './Manage';

type Props = { children: any };

const { Header, Footer, Content } = Layout;
const { Text } = Typography;

const AppLayout = (props: Props) => {
  const Logout = async () => {
    await signOut(auth)
      .then(() => {
        console.log('로그아웃 성공');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(props);

  return (
    <Layout>
      <Header style={{ color: 'white' }}>
        <Row justify="space-between" align="middle">
          <div>듣플만</div>
          <Button onClick={Logout}>로그아웃</Button>
        </Row>
      </Header>
      <Content style={{ textAlign: 'center' }}>{props.children}</Content>
      <Footer style={{ backgroundColor: 'white' }}>
        <Text>문의: malgolil41@gmail.com</Text>
      </Footer>
    </Layout>
  );
};

export default AppLayout;

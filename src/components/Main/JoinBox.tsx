import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fbase';
import { useTranslation } from 'react-i18next';
import { Form, Input, Button } from 'antd';
import '../../i18n';

type Props = {};

type JoinBoxFormProps = {
  username: string;
  password: string;
};

const JoinBox = (props: Props) => {
  const { t } = useTranslation(['common']);

  const onFinish = async (values: JoinBoxFormProps) => {
    await createUserWithEmailAndPassword(auth, values.username, values.password)
      .then((userCredential) => {
        console.log('가입 성공 :', userCredential.user);
      })
      .catch((err) => console.error(err));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={t('LOGIN.USERNAME')}
        name="username"
        rules={[{ required: true, message: t('LOGIN.PLS_INPUT_USERNAME') }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('LOGIN.PASSWORD')}
        name="password"
        rules={[{ required: true, message: t('LOGIN.PLS_INPUT_PASSWORD') }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" shape="round">
          JOIN
        </Button>
      </Form.Item>
    </Form>
  );
};

export default JoinBox;

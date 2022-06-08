import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fbase';

type Props = {};

type LoginBoxFormProps = {
  username: string;
  password: string;
};

const LoginBox = (props: Props) => {
  const { t } = useTranslation(['common']);
  const [hasError, setHasError] = useState<boolean>(false);

  const onFinish = async (values: LoginBoxFormProps) => {
    await signInWithEmailAndPassword(auth, values.username, values.password)
      .then((userCredential) => {
        console.log('로그인 성공 :', userCredential.user);
      })
      .catch((err) => {
        console.error(err);
        setHasError(true);
      });
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

      {hasError && (
        <div style={{ textAlign: 'center', color: 'red' }}>
          에러가 발생했습니다.
        </div>
      )}

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>{t('LOGIN.REMEMBER_ME')}</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" shape="round">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginBox;

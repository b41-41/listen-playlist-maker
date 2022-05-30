import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../fbase';

type Props = {};

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
  return (
    <div>
      <button onClick={Logout}>로그아웃</button>
      AppLayout
    </div>
  );
};

export default AppLayout;

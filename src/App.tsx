import Main from './components/Main';
import 'antd/dist/antd.min.css';
import 'normalize.css';

import { useEffect, useState } from 'react';
import { auth } from './fbase';
import AppLayout from './components/AppLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isInit, setIsInit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setIsInit(true);
      } else {
        setIsLoggedIn(false);
        setIsInit(true);
      }
    });
  }, []);

  return (
    <div className="App">
      {isInit ? (
        isLoggedIn ? (
          <Routes>
            <Route path="/login" element={<Main />}></Route>
            <Route path="/" element={<AppLayout />}></Route>
          </Routes>
        ) : (
          <Main />
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;

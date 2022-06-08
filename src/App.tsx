import Main from './components/Main';
import 'antd/dist/antd.min.css';
import 'normalize.css';

import { useEffect, useState } from 'react';
import { auth } from './fbase';
import { Route, Routes } from 'react-router-dom';
import Manage from './components/Manage';

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
            <Route path="/" element={<Manage />}></Route>
            <Route path="/Manage" element={<Manage />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Manage" element={<Main />}></Route>
          </Routes>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;

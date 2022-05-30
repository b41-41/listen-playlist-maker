import Main from './components/Main';
import 'antd/dist/antd.min.css';
import 'normalize.css';

import { useEffect, useState } from 'react';
import { auth } from './fbase';
import AppLayout from './components/AppLayout';

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
      {isInit ? isLoggedIn ? <AppLayout /> : <Main /> : <div>Loading...</div>}
    </div>
  );
}

export default App;

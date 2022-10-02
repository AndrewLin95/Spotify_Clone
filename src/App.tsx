import { FC, useState } from 'react';
import RouteSwitch from './RouteSwitch';
import Login from './Components/Login/Login';

const App = () => {
  const [loginState, setLoginState] = useState(false);

  const handleLogin = () => {
    setLoginState(true);
    console.log('Login State: True')
  }

  switch (loginState){
    case false:
      return <Login handleLogin={handleLogin} />;
    case true:
      return <RouteSwitch />
  }
}

export default App;
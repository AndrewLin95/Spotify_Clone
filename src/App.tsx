import { FC, useState } from 'react';
import RouteSwitch from './RouteSwitch';
import Login from './Components/Login/Login';

const App = () => {
  const [loginState, setLoginState] = useState(false);

  

  switch (loginState){
    case false:
      return <Login />;
    case true:
      return <RouteSwitch />
  }
}

export default App;
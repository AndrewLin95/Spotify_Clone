import { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Home from './Components/Home/Home';

// TODO: IF token is unidentified, route user back to login screen

const RouteSwitch: FC = () => {
  const [token, setToken] = useState<string>();

  const sendToken = ( token: string ) => {
    setToken(token);
  }


  return (
    <BrowserRouter>
        {token? <Header /> : null}
        <Routes>
          <Route path="" element={<Login sendToken={sendToken}/>} />
          <Route path="/home" element={<Home />}/>
        </Routes>
        {token? <Footer /> : null}
    </BrowserRouter>
  )
}

export default RouteSwitch;
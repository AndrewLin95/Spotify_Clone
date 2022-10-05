import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import App from "./App";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/home" element={<App />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default RouteSwitch;
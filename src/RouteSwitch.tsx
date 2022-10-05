import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import App from "./App";

// TODO: dynamically render header and footer based on token authentication status
// TODO: IF token is unidentified, route user back to login screen

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
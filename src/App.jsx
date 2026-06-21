import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import Dashboardlayout from "./dashboard/Dashboardlayout";
import Audio from "./dashboard/Audio";
import Camera from "./dashboard/Camera";
import Create from "./dashboard/Create";
import Logout from "./pages/Logout";
import Audioproduct from "./pages/Audioproduct";
import Cellphone from "./dashboard/Cellphone";
import Cameras from "./pages/Cameras";
import Productdetails from "./pages/Productdetails";
import Cart from "./pages/Cart";
import Cellphones from "./pages/Cellphones";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audioproducts" element={<Audioproduct/>}/>
        <Route path="/cameras" element={<Cameras/>}/>
        <Route path="/cellphone" element={<Cellphones/>}/>
         <Route path="/products/:id" element={<Productdetails/>}/>
         <Route path="/cart" element={<Cart/>}/>
        

        <Route path="/dashboard" element={<Dashboardlayout />}>
          <Route path="audio" element={<Audio />} />
           <Route path="cellphone" element={<Cellphone/>}/>
          <Route path="camera" element={<Camera />} />
          <Route path="logout" element={<Logout/>}/>
           <Route path="/dashboard/:category/create" element={<Create />} />
          <Route />
        </Route>
        <Route path="/login" element={<Login />} />
        

        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;

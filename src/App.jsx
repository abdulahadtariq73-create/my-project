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
import Dealproducts from "./dashboard/Dealproducts";
import Deals from "./pages/Deals";
import Featured from "./pages/Featured";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/audio" element={<Audioproduct />} />
      <Route path="/audioproducts" element={<Audioproduct />} />
      <Route path="/camera" element={<Cameras />} />
      <Route path="/cameras" element={<Cameras />} />
      <Route path="/cellphone" element={<Cellphones />} />
      <Route path="/cellphones" element={<Cellphones />} />
      <Route path="/products/:id" element={<Productdetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboardlayout />}>
        <Route path="audio" element={<Audio />} />
        <Route path="camera" element={<Camera />} />
        <Route path="cellphone" element={<Cellphone />} />
        <Route path="dealproduct" element={<Dealproducts />} />
        <Route path="logout" element={<Logout />} />
        <Route path=":category/create" element={<Create />} />
      </Route>

      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;

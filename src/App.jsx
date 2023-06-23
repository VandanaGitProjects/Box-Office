import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Starred from "./Pages/Starred1";
import MainLayout from "./Components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Starred1" element={<Starred />}></Route>
        </Route>
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

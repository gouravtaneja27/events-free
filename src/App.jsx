
import React from "react";
import { Routes, Route } from "react-router-dom";


import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Feed from "./pages/Feed";
import Username from "./pages/Username";

export default function App() {
  return (
    <>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/username" element={<Username />} />
      </Routes>

       
    </>
  );
}

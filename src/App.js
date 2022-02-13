import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// function App() {
//   return <Home />;
//   // return (

//     //   <Routes>
//     //     <Route path="/" element={<Home />} />
//     //     <Route path="/login" element={<Login />} />
//     //     <Route path="/register" element={<Register />} />
//     //     <Route path="/profile/:username" element={<Profile />} />
//     //   </Routes>
//     // );
//     // }
//     export default App;

import React from "react";

export default function App() {
  return (
    // <Home />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  );
}

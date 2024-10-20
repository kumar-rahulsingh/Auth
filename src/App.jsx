import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Component/Nav";
import ContactSignUp from "./Component/ContactSignUp";
import Otp from "./Component/Otp";
import ContactUs from "./Component/ContactUs";
import Profile from "./Component/Profile";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/signup" element={<ContactSignUp />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<ContactSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

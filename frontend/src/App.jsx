import { useState } from "react";
import "./css/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

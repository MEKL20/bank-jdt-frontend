import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Deposito from "./pages/Deposito";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <div className="App m-auto bg-gradient-to-r from-white to-milkyway">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/deposito" element={<Deposito />}/>
        <Route path="/transaction" element={<Transaction />}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

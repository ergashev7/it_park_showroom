import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./util";
import GlobalContext from "./context/GlobalContext";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Login from "./main/login/login";
import Admin from "./main/admin";
function App() {
 

  return (
      <BrowserRouter>
      <Routes>
         <Route path="/" Component={Login}/>
         <Route path="admin" Component={Admin}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;

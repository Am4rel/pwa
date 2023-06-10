import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

import Home from './Components/Home'
import Calculator from './Components/Calculator'
import Header from './Components/Header'

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/home" index element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
)

export default App;
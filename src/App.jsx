import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home'
import Calculator from './Components/Calculator'
import Header from './Components/Header'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/home",
        index: true,
        element: <Home />
      },
      {
        path: "/calculator",
        element: <Calculator />
      }
    ]
  },
]);

const App = () => <div className="container"><RouterProvider router={router} /></div>

export default App;
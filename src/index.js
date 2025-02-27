<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Sorry from './Sorry';
// import NotFound from './NotFound';
// import { HashRouter } from 'react-router-dom'; 
// import { Routes, Route } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import './css/index.css'
import { RouterProvider } from 'react-router-dom';
import Content from './Content';

const router = createHashRouter([
  {
    path: "/*",
    element: <Home />,
    // errorElement: <NotFound />
  },
  {
    path: "/notready",
    element: <Sorry/>
  },
  {
    path: "/content",
    element: <Content/>
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
>>>>>>> main
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

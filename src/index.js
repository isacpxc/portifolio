import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Sorry from './Sorry';
import NotFound from './NotFound';
import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom'; 
import './index.css'

const router = createHashRouter([
  {
    path: "/*",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/notready",
    element: <Sorry/>
  }
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//     errorElement: <NotFound />
//   },
//   {
//     path: "/notready",
//     element: <Sorry/>
//   },
//   {
//     path: "/funny",
//     element: <NotFound/>
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

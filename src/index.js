import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Sorry from './Sorry';
// import NotFound from './NotFound';
// import { HashRouter } from 'react-router-dom'; 
// import { Routes, Route } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import './index.css'
import { RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/*",
    element: <Home />,
    // errorElement: <NotFound />
  },
  {
    path: "/notready",
    element: <Sorry/>
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>

    {/* <HashRouter basename='/'>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/notready' Component={Sorry}/>
      </Routes>
    </HashRouter> */}
  </React.StrictMode>

);

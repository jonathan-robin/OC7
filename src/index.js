import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import NotFound from './scenes/notFound/notFound';
import About from './scenes/About/about';
import Home from './scenes/Home/home';
import FicheLogement from './scenes/fiche-logement/fiche-logement';

  const router = createBrowserRouter([ 
    {
      path: "/", 
      element: <Home />,
      errorElement: <NotFound />,
    }, 
    { 
      path: "/about", 
      element: <About />, 
      errorElement: <NotFound />,
    }, 
    { 
      path: "/fiche-logement/:id", 
      element: <FicheLogement />
    }
  ])

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();


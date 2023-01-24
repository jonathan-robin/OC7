import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import NotFound from '../scenes/notFound/notFound';
import FicheLogement from '../scenes/fiche-logement/fiche-logement';
import About from '../scenes/About/about';
import Home from '../scenes/Home/home';

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
      element: <FicheLogement />,
      errorElement: <NotFound />
    }
  ])

  export default router;


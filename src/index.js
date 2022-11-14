import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from './routes/root';
import NotFound from './scenes/notFound/notFound';
import About from './scenes/About/about';
import Home from './scenes/Home/home';


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

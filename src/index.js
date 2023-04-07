//library imports
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import PrivateRoute from './routes/private-route.js';


//component imports
import './index.css';
import App from './App';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Signup from "./signup";
import Login from "./login";
import Logoff from './logoff.js';
import ValidSignup from './signup-success.js';
import reportWebVitals from './reportWebVitals';

//added a better router which looks cleaner therefore easier to work with
const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logoff" element={<PrivateRoute><Logoff /></PrivateRoute>} />
      <Route path="/signup-success" element={<ValidSignup />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);

reportWebVitals();



//importing dependencies
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

//component and page imports
import App from './pages/App.js';
import ErrorPage from "./components/error-page.js";
import Signup from "./pages/signup.js";
import Login from "./pages/login";
import Logoff from './components/logoff.js';
import ValidSignup from './components/signup-success.js';
import ProjectTab from './components/project-tab.js';
import Project from './pages/project.js';
import ViewOnly from './pages/view-only-project.js';
import reportWebVitals from './reportWebVitals';
import PrivateRoute from './routes/private-route.js';
import CreateQuote from './pages/create-quote';
import UpdateQuote from './pages/update-quote';

//added a better router which looks cleaner therefore easier to work with
const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} errorElement={<ErrorPage />} />
      <Route path="/project-tab" element={<ProjectTab />} />
      <Route path="/project-tab/project" element={<Project />} />
      <Route path="/project-tab/view-only-project" element={<ViewOnly />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logoff" element={<PrivateRoute><Logoff /></PrivateRoute>} />
      <Route path="/signup-success" element={<ValidSignup />} />
      <Route path='/create-quote' element={<CreateQuote/>}/>
      <Route path='/update-quote' element={<UpdateQuote/>}/>
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




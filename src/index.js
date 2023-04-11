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
import SecondProjectTab from './components/second-project-tab';

import Project from './pages/project.js';
import SecondProject from './pages/second-project';

import ViewOnlyPage from './pages/view-only-project.js';
import SecondViewOnlyPage from './pages/second-view-only-project';

import reportWebVitals from './reportWebVitals';
import PrivateRoute from './routes/private-route.js';

import CreateQuote from './pages/create-quote';
import UpdateQuote from './pages/update-quote';
import DeleteQuote from './pages/delete-quote';
import CreateQuote2 from './pages/create-quote2';
import DeleteQuote2 from './pages/delete-quote2';
import UpdateQuote2 from './pages/update-quote2';


//added a better router which looks cleaner therefore easier to work with
const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} errorElement={<ErrorPage />} />
      <Route path="/project-tab" element={<ProjectTab />} />
      <Route path="/second-project-tab" element={<SecondProjectTab />} />

      <Route path="/project-tab/project" element={<Project />} />
      <Route path="/second-project-tab/second-project" element={<SecondProject />} />
      
      <Route path="/project-tab/view-only-project" element={<ViewOnlyPage />} />
      <Route path="/second-project-tab/second-view-only-project" element={<SecondViewOnlyPage />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logoff" element={<PrivateRoute><Logoff /></PrivateRoute>} />
      <Route path="/signup-success" element={<ValidSignup />} />

      <Route path='/project-tab/project/create-quote' element={<CreateQuote/>}/>
      <Route path='/project-tab/project/update-quote' element={<UpdateQuote/>}/>
      <Route path='/project-tab/project/delete-quote' element={<DeleteQuote/>}/>
      <Route path='/second-project-tab/second-project/second-create-quote' element={<CreateQuote2/>}/>
      <Route path='/second-project-tab/second-project/second-update-quote' element={<UpdateQuote2/>}/>
      <Route path='/second-project-tab/second-project/second-delete-quote' element={<DeleteQuote2/>}/>
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




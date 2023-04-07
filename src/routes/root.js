import React from 'react';
import '../css/root.css';
import { Outlet } from "react-router-dom";

export default function Root() {

  const authUser = sessionStorage.getItem('auth')
  let loginDisplay = <a href={'/login'}>Login</a>
  if (authUser) {
    loginDisplay = <a href={'/logoff'}>Logoff</a>
  }

  return (
    <div className="container">
      <header>
        <h1>Quote Calculator</h1>
        <nav>
          {loginDisplay}
          <a href="/signUp">Sign up</a>
        </nav>
      </header>
      <main id="detail"></main>
      <Outlet />
    </div>
    
  );
}


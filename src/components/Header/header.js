import React from 'react';
import Logo from './Logo/LogoImg.png'
import "./header.css"

//nearly everypage will have a header, it will act as the nav-bar from which user can log-in/out or sign-up
function Header() {
  const authUser = sessionStorage.getItem('auth');
  let loginDisplay = <a href={'/login'}>Login</a>;

  if (authUser) {
    loginDisplay = <a href={'/logoff'}>Logoff</a>;
  }

  return (
    <header id='header-bar'>
      <div id='logo-image-container' onClick={() => window.location = '/'}>
        <img src={Logo} id='logo-image' ></img>
      </div>
      <nav id='naviagation'>
        {loginDisplay}
        <a href="/signup">Sign up</a>
      </nav>
    </header>
  );
}

export default Header;


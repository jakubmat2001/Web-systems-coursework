import React from 'react';

//nearly everypage will have a header, it will act as the nav-bar from which user can log-in/out or sign-up
function Header() {
  const authUser = sessionStorage.getItem('auth');
  let loginDisplay = <a href={'/login'}>Login</a>;

  if (authUser) {
    loginDisplay = <a href={'/logoff'}>Logoff</a>;
  }

  return (
    <header>
      <h1>Quote Calculator</h1>
      <nav>
        {loginDisplay}
        <a href="/signup">Sign up</a>
      </nav>
    </header>
  );
}

export default Header;


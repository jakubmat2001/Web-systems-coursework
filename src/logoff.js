import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/logoff.css'

export default function Logoff() {
  const navigate = useNavigate();
//after loging-off the user will be moved back to the root
//2 second delay is appled before loging-off
  useEffect(() => {
    sessionStorage.removeItem('auth');
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="logoff">
        <h1>Logged off now!</h1>
      </div>
    </>
  );
}


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/signed-up.css';

export default function ValidSignup() {
  const navigate = useNavigate();
  //navigate to the App.js after 2 sec have elapsed
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="signup-success">
        <h1>Successfully Signed-Up</h1>
      </div>
    </>
  );
}


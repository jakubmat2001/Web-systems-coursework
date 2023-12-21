import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import "../global-css/signup.css"

export default function Login() {
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    authorised: false,
    error: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const navigate = useNavigate();

  //login the user if credentials match from database
  const login = (e) => {
    e.preventDefault();
    console.log('Loging on');
    let data = { email: values.email, password: values.password };
    var requestURI = 'http://127.0.0.1:8000/auth/signin';
    axios.post(requestURI, data).then((response) => {
      sessionStorage.setItem('auth', JSON.stringify(response.data));
      setValues({ ...values, 'authorised': true })
      navigate('/');
    })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="credential-form-fillin-form-display">
      <div className='credential-form-form-wrapper'>
        <div className='credential-form-form-heading'>
          <h2>Login</h2>
        </div>
        <form className='credential-form'>
          <label className='sign-label'>
            e-mail:
            <input className='sign-input' type="text" name="email" onChange={handleChange('email')} />
          </label>
          <br></br>
          <label className='sign-label'>
            Password:
            <input className='sign-input' type="text" name="password" onChange={handleChange('password')} />
          </label>
          <br></br>
          <input className='sign-input' type="submit" value="Submit" onClick={login} />
        </form>
      </div>
    </div>
  );
}

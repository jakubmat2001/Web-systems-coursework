import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../global-css/signup.css';

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    open: false,
    error: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const navigate = useNavigate();

  //signin up the user with name, email, password fields filled in
  const signup = (e) => {
    e.preventDefault();
    console.log('Signing up');
    let data = { name: values.name, email: values.email, password: values.password };
    var requestURI = 'http://127.0.0.1:8000/api/emps';
    console.log(requestURI);
    axios.post(requestURI, data).then((response) => {
      navigate('/signup-success');
    });
  };

  return (
    <div id="credential-form-fillin-form-display">
      <div className='credential-form-form-wrapper'>
        <div className='credential-form-form-heading'>
          <h2>Register Account</h2>
        </div>
        <form className='credential-form'>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange('name')} />
          </label>
          <br></br>
          <label>
            e-mail:
            <input type="text" name="email" onChange={handleChange('email')} />
          </label>
          <br></br>
          <label>
            Password:
            <input type="text" name="password" onChange={handleChange('password')} />
          </label>
          <br></br>
          <input type="submit" value="Submit" onClick={signup} />
        </form>
      </div>
    </div>
  );
}

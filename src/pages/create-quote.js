import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';

function CreateQuote() {
  const [values, setValues] = useState({
    employeeName: '',
    workHours: '',
    workerType: 'junior',
    humanResources: '',
    authorised: false,
    console: ''
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const navigate = useNavigate();

  const create_q = (e) => {
    e.preventDefault();
    console.log('Creating Quoote');
    let data = { employeeName: values.employeeName, workHours: values.workHours, workerType: values.workerType, humanResources: values.humanResources };
    var requestURI = 'http://127.0.0.1:8000/api/quotes';
    console.log(requestURI);
  
    const token = JSON.parse(sessionStorage.getItem("auth"));
    console.log("Token from sessionStorage:", token);
  
    //sends a user back to login page when they attpmt to create quote from /create-quote page while not being loged-in
    //otherwise prepares to send token for verification in the backend
    if (token === null) {
      navigate('/login');
    } else {
      axios.post(requestURI, data, {
        headers: {
          'Authorization': `Bearer ${token.token}`,
        },
      }).then((response) => {
        sessionStorage.setItem('auth', JSON.stringify(response.data));
        setValues({ ...values, 'authorised': true });
        navigate('/project-tab/project');
      }).catch((err) => {
        console.log(err);
      });
    }
  };
  
  

  return (
    <div className="container">
      <Header />
      <main id="detail">
        <div>
          <h1>Create Project Quote</h1>
          <form>
            <label>
              Employee Name:
              <input
                type="text"
                value={values.employeeName}
                onChange={handleChange('employeeName')}
              />
            </label>
            <br />
            <label>
              Work Hours:
              <input
                type="number"
                value={values.workHours}
                onChange={handleChange("workHours")}
              />
            </label>
            <br />
            <label>
              Worker Type:
              <select value={values.workerType} onChange={handleChange("workerType")}>
                <option value="junior">Junior</option>
                <option value="mid-senior">Mid-Senior</option>
                <option value="senior">Senior</option>
              </select>
            </label>
            <br />
            <label>
              Human Resources:
              <input
                type="number"
                value={values.humanResources}
                onChange={handleChange("humanResources")}
              />
            </label>
            <br />
            <button type="submit" value="Submit" onClick={create_q}>Create Quote</button>
          </form>

        </div>
      </main>
    </div>
  );
}

export default CreateQuote;




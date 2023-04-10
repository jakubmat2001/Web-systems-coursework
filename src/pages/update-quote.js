import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';

function UpdateQuote() {
  const [quoteId, setQuoteId] = useState('');
  const [quote, setQuote] = useState(null);
  const [values, setValues] = useState({
    employeeName: '',
    workHours: '',
    workerType: '',
    humanResources: '',
  });

  const navigate = useNavigate();

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleQuoteIdChange = (event) => {
    setQuoteId(event.target.value);
  };

  //we will first get the quote with a given quoteId 
  const fetchQuote = async () => {
    try {
      const token = JSON.parse(sessionStorage.getItem("auth")).token;
  
      const response = await axios.get(`http://127.0.0.1:8000/api/quotes/${quoteId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setQuote(response.data);
      setValues({
        employeeName: response.data.employeeName,
        workHours: response.data.workHours,
        workerType: response.data.workerType,
        humanResources: response.data.humanResources,
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
  
  const updateQuote = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(sessionStorage.getItem("auth")).token;
  
      await axios.put(`http://127.0.0.1:8000/api/quotes/${quoteId}`, values, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      navigate('/project-tab/project');
    } catch (error) {
      console.error('Error updating quote:', error);
    }
  };

  return (
    <div className="container">
      <Header />
      <main id="detail">
        <div>
          <h1>Update Project Quote</h1>
          <label>
            Quote ID:
            <input type="text" value={quoteId} onChange={handleQuoteIdChange} />
            <button type="button" onClick={fetchQuote}>
              Fetch Quote
            </button>
          </label>
          {quote && (
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
                  onChange={handleChange('workHours')}
                />
              </label>
              <br />
              <label>
                Worker Type:
                <select value={values.workerType} onChange={handleChange('workerType')}>
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
                  onChange={handleChange('humanResources')}
                />
              </label>
              <br />
              <button type="submit" value="Submit" onClick={updateQuote}>
                Update Quote
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}

export default UpdateQuote;


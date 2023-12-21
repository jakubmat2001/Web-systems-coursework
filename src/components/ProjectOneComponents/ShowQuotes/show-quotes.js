import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './show-quotes.css';

function DisplayQuotes() {
  const [quotes, setQuotes] = useState([]);

  //get all the quotes from our database regardless of auth
  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/quotes');
        setQuotes(response.data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    }
    fetchQuotes();
  }, []);

  //display returned fields from a database and map it onto a table
  return (
    <div className="container">
      <p className="description">
        Budget = (Work Hours * Worker Type) + Human Resources
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Work Hours</th>
            <th>Worker Type</th>
            <th>Human Resources</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote._id}>
              <td>{quote.employeeName}</td>
              <td>{quote.workHours}</td>
              <td>{quote.workerType}</td>
              <td>£{quote.humanResources}</td>
              <td>£{quote.fudgeBudget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayQuotes;

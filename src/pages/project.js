import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Project() {
  const [quotes, setQuotes] = useState([]);

  //get all the quotes from our database
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

  return (
    <div>
      <h1>Project Quotes</h1>
      <table>
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
          {quotes.map(quote => (
            <tr key={quote._id}>
              <td>{quote.employeeName}</td>
              <td>{quote.workHours}</td>
              <td>{quote.workerType}</td>
              <td>{quote.humanResources}</td>
              <td>{quote.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Link to="/create-quote">Create Quote</Link>
        <Link to="/update-quote">Update Quote</Link>
        <Link to="/delete-quote">Delete Quote</Link>
      </div>
    </div>
  );
}

export default Project;



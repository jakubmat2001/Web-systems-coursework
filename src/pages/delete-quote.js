import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';

function DeleteQuote() {
  const [quoteId, setQuoteId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuoteId(event.target.value);
  };

  const deleteQuote = (e) => {
    e.preventDefault();
    const token = JSON.parse(sessionStorage.getItem("auth"));

    console.log("Token: ", token); 
    console.log("Quote ID: ", quoteId);

    if (token === null) {
      navigate('/login');
    } else {
      axios.delete(`http://127.0.0.1:8000/api/quotes/${quoteId}`, {
        headers: {
          'Authorization': `Bearer ${token.token}`,
        },
      }).then((response) => {
        setMessage('Quote deleted sucessfully');
      }).catch((err) => {
        console.log(err);
        setMessage('Error deleting quote');
      });
    }
  };

  return (
    <div className="container">
      <Header />
      <main id="delete">
        <div>
          <h1>Delete Project Quote</h1>
          {message && <p>{message}</p>}
          <form>
            <label>
              Quote ID:
              <input
                type="text"
                value={quoteId}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit" onClick={deleteQuote}>Delete Quote</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DeleteQuote;


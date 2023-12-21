import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import '../../global-css/delete-quote.css';

function DeleteQuote2() {
  const [quoteId, setQuoteId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuoteId(event.target.value);
  };

  //send a delete request based on quote ID, if session token doesnt exisit send to login page
  const deleteQuote = (e) => {
    e.preventDefault();
    const token = JSON.parse(sessionStorage.getItem("auth"));

    console.log("Token: ", token); 
    console.log("Quote ID: ", quoteId);

    if (token === null) {
      navigate('/login');
    } else {
      axios.delete(`http://127.0.0.1:8000/api/quotes2/${quoteId}`, {
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
    <div className="delete-quote-container">
      <Header />
      <main className='standard-main'>
        <div className="delete-quote-form-container"> 
          <h1 className='delete-quote-h1'>Delete Project Quote</h1>
          {message && <p>{message}</p>}
          <form>
            <label className='delete-quote-label'>
              Quote ID:
              <input
                className='delete-quote-input'
                type="text"
                value={quoteId}
                onChange={handleChange}
                placeholder='Enter Your Saved Quote reference'
              />
            </label>
            <br />
            <div className='delete-quote-button-container'>
              <button className='delete-quote-btn' type="submit" onClick={deleteQuote}>Delete Quote</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DeleteQuote2;
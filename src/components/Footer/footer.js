import React from "react";
import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
    let forgotQuoteLink = '/login';

    if (sessionStorage.getItem('auth')) {
        forgotQuoteLink = '/request-quote-reference'
    }

    return (
        <footer id="footer-bar-display">
            <div className="footer-bar-content">
                <p className="copyright">&#9426; N-Shine</p>
                <Link className="forgot-quote-anchor" to={forgotQuoteLink} >Forgot Quote Reference?</Link>
            </div>
        </footer>
    )
}

export default Footer
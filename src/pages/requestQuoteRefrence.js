import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import '../global-css/req-quote-ref.css'

const RequestQuoteReference = () => {
    const [inputs, setInputs] = useState({
        email: '',
        projectNr: 'p1'
    })

    const navigate = useNavigate();

    const handleChange = (name) => (event) => {
        setInputs({ ...inputs, [name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email: inputs.email}
        const selectProject = inputs.projectNr === 'p1' ? 'check1' : 'check2' 
        console.log(selectProject)
        const fetchURI = "http://127.0.0.1:8000/"

        const token = JSON.parse(sessionStorage.getItem("auth"));
        if (token === null) {
            navigate('/login')
        } else {
            axios.get(fetchURI, data, {
                'Authorization': `Bearer ${token.token}`,
            })
        }
    }

    return (
        <div className="container">
            <Header />
            <main className="standard-main">
                <h1>Requesting Ref</h1>
                <form className="request-quote-name">
                    <label className='create-quote-label'>
                        Employee Email:
                        <input
                            placeholder='Enter Your Email'
                            onChange={() => handleChange("email")}
                            type="text"
                        />
                    </label>
                    <br />
                    <label className='create-quote-label'>
                        Project-Nr:
                        <select onChange={() => handleChange("projectNr")}>
                            <option value="p1">Project-1</option>
                            <option value="p2">Project-2</option>
                        </select>
                    </label>
                    <br />
                    <div className='request-quote-button-container'>
                        <button className="request-quote-button" type="submit" value="Submit" onClick={handleSubmit}>
                            Retrieve Reference
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    )
}

export default RequestQuoteReference
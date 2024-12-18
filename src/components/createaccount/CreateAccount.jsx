// /src/components/createaccount/CreateAccount.jsx
import React from 'react';
import './CreateAccount.css';
import {Link} from 'react-router-dom';
const CreateAccount = () => {
    return (
        <div className="create-account">
            <h1>Create Account</h1>
            <p>Welcome to the registration page. Please fill out your details below.</p>
            {/* Add your registration form here */}

            <p>Already have an account?</p>
            <Link to='/' className='have-account'>
                <button className='register-button'>Login</button>
            </Link>

        </div>
    );
};

export default CreateAccount;

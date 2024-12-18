
// Home.js
import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
    const [username, setUserName] = useState('Username')
    const [password, setPassword] = useState('Password')

    function processSignin(e){
        e.preventDefault();
        const name = username;
        const pass = password;
        console.log(name, pass);
    }

    return (
        <div className="home">
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of your application.</p>
            <form onSubmit={processSignin} className='sign-in-form'>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' className='user-name'value={username}  required onChange={(e) => setUserName(e.target.value)}/>
                <label htmlFor='password'>Password</label>
                <input type='text' id='password' className='password'  value={password} required onChange={(e) =>setPassword(e.target.value)}/>
                <button type='submit'>Sign In</button>
            </form>
            <p>Don't have an account?</p>
            <Link to="/createaccount" className="register-link">
                <button className="register-button">Register</button>
            </Link>
        </div>               
    );
};

export default Home;

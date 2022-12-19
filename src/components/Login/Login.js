import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='credential-container'>
            <div className='credential-form'>
                <h2>Login</h2>
                <form >
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className='last-input' />
                    <button>Login</button>
                </form>
                <p>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='credential-container'>
            <div className='credential-form'>
                <h2>Sign Up</h2>
                <form >
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' />
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name='confirmPassword' className='last-input' />
                    <button>Sign Up</button>
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;
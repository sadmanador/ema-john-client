import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Signup = () => {
    const [ error, setError ] = useState(null)
    const { setUser, createUser } = useContext(AuthContext);

    const handleSignup = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if(password !== confirmPassword){
            setError("Confirm Password Doesn't Match");
        }
        if(password.length < 6){
            setError('The password must of 6 character long.')
        }
        console.log(email, password, confirmPassword);

        createUser(email, password)
        .then(result => {
            setUser(result.user);
            form.reset();
        })
        .catch(error => setError(error));
    };

    return (
        <div className='credential-container'>
            <div className='credential-form'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' />
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name='confirmPassword' className='last-input' />
                    <button type='submit'>Sign Up</button>
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                {
                 <p>{error}</p>
                }
            </div>
        </div>
    );
};

export default Signup;
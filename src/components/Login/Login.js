import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const [ error, setError ] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { user, setUser, loginUser } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                setUser(result.user);
                navigate(from, {replace: true});
                form.reset();
            })
            .catch(error => setError(error));
    };

    return (
        <div className='credential-container'>
            <div className='credential-form'>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className='last-input' />
                    <button type='submit'>Login</button>
                </form>
                <p>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default Login;
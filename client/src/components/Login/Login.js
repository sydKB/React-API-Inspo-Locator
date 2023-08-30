import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import './Login.css'

import Auth from '../../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <section>
      <div className="login">
        <div className='login-text'>
          
          <form class="form login-form" onSubmit={handleFormSubmit}>
          <h2>Log in</h2>
            <div>
                <label for="email-login">email:</label>
                <input class="form-input" type="text" id="email-login"  name="email"  onChange={handleChange}/>
            </div>
            <div>
                <label for="password-login">password:</label>
                <input class="form-input" type="password" id="password-login" name="password" onChange={handleChange}/>
            </div>
            <div>
                <button type="submit">Log In</button>
                <Link to="/signup"> 
                  <button class="profile-btn" type="submit">Sign Up</button>
                </Link>
                <p class="log-again"> </p>
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </section>
  );   
}


export default Login;
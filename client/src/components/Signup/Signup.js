import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

return (
    <section>
    <div className="signup">
        <h2>Sign Up</h2>
        <form class="form signup-form" onSubmit={handleFormSubmit}>
            <div>
                <label for="name-signup">name:</label>
                <input class="form-input" type="text" id="name-signup"  name="username"  onChange={handleChange} />
            </div>
            <div>
                <label for="email-signup">email:</label>
                <input class="form-input" type="text" id="email-signup" name="email" onChange={handleChange}/>
            </div>
            <div>
                <label for="password-signup">password:</label>
                <input class="form-input" type="password" id="password-signup" name="password" onChange={handleChange}/>
            </div>
            <div>
                <Link to="/"> 
                    <button class="profile-btn" type="submit">Sign Up</button>
                </Link>
            </div>
        </form>
    </div>
    <Outlet />
    </section>
      );
    };

export default Signup;
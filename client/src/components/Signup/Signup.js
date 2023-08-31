import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import './Signup.css'

const Signup = () => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const [validateEl, setValidateEl] = useState(false)
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
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
    if (!isValidEmail.test(formState.email)) {
      setValidateEl(true);
      return;
    }
    if (formState.password.length < 8) {
      setValidateEl(true);
      return;
    }
    setValidateEl(false);
    try {
      console.log(formState);
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section>
      {data ? (
        <p>
          {" "}
          Account was created successfully!
          <Link to="/profile"></Link>
        </p>
      ) : (
        <div className="signup">
          <h2>Sign Up</h2>
          <form class="form signup-form" onSubmit={handleFormSubmit}>
            <div>
              <label for="name-signup">name:</label>
              <input
                class="form-input"
                type="text"
                id="name-signup"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="email-signup">email:</label>
              <input
                class="form-input"
                type="text"
                id="email-signup"
                name="email"
                onChange={handleChange}
              />
           
            </div>
            {validateEl && (
          <div>
            must be a valid email
          </div>
        )} 
            <div>
              <label for="password-signup">password:</label>
              <input
                class="form-input"
                type="password"
                id="password-signup"
                name="password"
                onChange={handleChange}
              />
            </div>
            {validateEl && (
              <div className="error-message">
                {formState.password.length < 8 && "Password must be at least 8 characters"}
              </div>
            )}
            <div>
              <button class="profile-btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      )}
        
    </section>

  );
};
export default Signup;
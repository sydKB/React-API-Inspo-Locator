import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import './Signup.css'

const Signup = () => {
  const isvalidemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
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
    if (formState.email.match(isvalidemail) === false) {
      setValidateEl(true)
      console.log("validate", validateEl)
    }
    event.preventDefault();
    console.log(formState);
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
            <div>
              <button class="profile-btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      )}
         {validateEl && (
          <div>
            must be a valid email
          </div>
        )} 
    </section>

  );
};
export default Signup;
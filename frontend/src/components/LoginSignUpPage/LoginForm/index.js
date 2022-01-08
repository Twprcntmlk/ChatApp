import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate } from "react-router-dom";
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="SignUpLoginFormContainer">
      <div className="signuplogin__header">
        <h1>Log In</h1>
        <div className="signuplogin__header_message">
          <div>
            Welcome back to out Website, Login below!
          </div>
        </div>
      </div>

      <div className="signuplogin__content">
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            Username or Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="signuplogin__footer">
        {errors.length===0
        ?
        <NavLink to="/login-signup" state={{showform:true}}>Not Registered? Sign Up Here!</NavLink>
        :
        <ul>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</ul>
        }
      </div>
    </div>
  );
}

export default LoginForm;

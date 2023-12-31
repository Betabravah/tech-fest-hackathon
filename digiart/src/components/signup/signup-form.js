import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "react-bootstrap";

import "./style.css";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signup } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password, firstName, lastName);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div className="signup-form">
      <div className="signup-header">Create account</div>
      <div className="signup-form-body">
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="username label-input">
          <label className="label" htmlhtmlFor="firstName">
            First Name{" "}
          </label>
          <input
            className="input"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            placeholder="first name"
          />
        </div>
        <div className="lastname label-input">
          <label className="label" htmlhtmlFor="lastName">
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            className="input"
            value={lastName}
            onChange={(e) => handleInputChange(e)}
            placeholder="last name"
          />
        </div>
        <div className="email label-input">
          <label className="label" htmlhtmlFor="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="email"
          />
        </div>
        <div className="password label-input">
          <label className="label" htmlhtmlFor="password">
            Password{" "}
          </label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="password"
          />
        </div>
        <div className="confirm-password label-input">
          <label className="label" htmlhtmlFor="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="confirm password"
          />
        </div>
      </div>
      <div className="signup-button">
        <button type="submit" className="btn" onClick={(e) => handleSubmit(e)}>
          SignUp
        </button>
      </div>
      <div className="already">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
export default SignUpForm;

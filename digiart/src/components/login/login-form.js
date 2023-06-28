import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import "./style.css";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useUserAuth();

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-form">
      <div className="login-header">Login to your account</div>
      <div className="login-form-body">
        <div className="email label-input">
          <label className="label" htmlFor="email">
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
          <label className="label" htmlFor="password">
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
      </div>
      <div className="login-button">
        <button type="submit" className="btn" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
      </div>
      <div className="already">
        <p>Don't have an account?</p>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}
export default LoginForm;

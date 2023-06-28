import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import "./style.css";
function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useUserAuth();

  if (id === "email") {
    setEmail(value);
  }

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

  const handleSubmit = () => {
    console.log(email, password);
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
      <div class="login-button">
        <button type="submit" class="btn" onClick={(e) => handleSubmit(e)}>
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

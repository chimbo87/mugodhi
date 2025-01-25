import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the credentials match the provided ones
    if (email === "chimbo@gmail.com" && password === "123456") {
      message.success("Login successful 👋!");
      navigate("/dashboard");
    } else {
      message.error("Invalid email or password.");
    }
  };

  return (
    <div className="container-fluid" id="login-page">
      <div id="login-page-box">
        <div id="login-page-logo">
          <img src={logo} alt="logo" />
        </div>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <small>Email address</small>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <small>Password</small>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              <small>Remember me</small>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Login
          </button>
        </form>
        <div id="rtys-box">
          <small>&copy; AFC Mugodhi Joburg Branch 2025.</small>
          <small style={{ color: "gray" }}>Crafted By: chimbo</small>
        </div>
      </div>
    </div>
  );
}

export default Login;

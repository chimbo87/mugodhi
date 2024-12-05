import React from "react";
import banner from "../assets/images/coverbanner.jpg";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Login.css";
import { Input, Checkbox, Space, Tooltip } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

function Login() {
  const navigate = useNavigate();
  return (
    <div id="login-page">
      <div id="login-card">
        <img src={banner} alt="coverbanner" />
      </div>
      <div id="login-card">
        <form id="login-card-form">
          <div id="login-card-formlogo">
            <img src={logo} alt="logo" />
          </div>
          <div id="login-card-formwrap">
            <label>Email</label>
            <Input size="large" />
          </div>
          <div id="login-card-formwrap">
            <label>Password</label>

            <Input.Password
              size="large"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <div id="login-card-formwrap">
            <Checkbox onChange={onChange}>Remember me</Checkbox>
          </div>
          <div id="login-card-formbtn">
            <button onClick={() => navigate("/dashboard")}>Login</button>
          </div>
          <div id="login-card-formwrap">
            <p>Forget Password</p>
          </div>
          <div id="login-card-formrights">
            <small>&copy; 2024 AFC Joburg Branch. Crafted by Chimbo</small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

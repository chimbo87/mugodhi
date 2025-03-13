import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import churchlogo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulate login API call
    setTimeout(() => {
      console.log("Login values:", values);
      message.success("Login successful!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo-container">
          <img 
            src={churchlogo} 
            alt="Company Logo" 
            className="login-logo" 
          />
        </div>
        
        <Typography.Title level={3} className="login-title">
          Welcome Back
        </Typography.Title>
        
        <Typography.Paragraph className="login-subtitle">
          Sign in to your account
        </Typography.Paragraph>
        
        <Form
          name="login-form"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" }
            ]}
          >
            <Input 
              prefix={<UserOutlined className="login-icon" />} 
              placeholder="Email address" 
              size="large"
              className="login-input"
            />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="login-icon" />}
              placeholder="Password"
              size="large"
              className="login-input"
            />
          </Form.Item>
          
          <Form.Item className="login-options">
            <div className="login-forgot">
              <Typography.Link>Forgot password?</Typography.Link>
            </div>
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="login-button"
              loading={loading}
              block
            >
              Sign In
            </Button>
          </Form.Item>
          
          <div className="login-register">
            <Typography.Text>
              Don't have an account?{" "}
              <Typography.Link  onClick={() => navigate("/signup")}>Register now</Typography.Link>
            </Typography.Text>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
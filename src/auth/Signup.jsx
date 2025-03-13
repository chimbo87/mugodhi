import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, Steps, message } from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined, HomeOutlined, TeamOutlined } from "@ant-design/icons";


function Signup() {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    try {
      // Validate the fields in the current step
      if (currentStep === 0) {
        await form.validateFields(['name', 'surname', 'email', 'phone']);
        setCurrentStep(1);
      }
    } catch (error) {
      console.log('Validation failed:', error);
    }
  };

  const handleBack = () => {
    setCurrentStep(0);
  };

  const onFinish = (values) => {
    setLoading(true);
    // Simulate signup API call
    setTimeout(() => {
      console.log("Signup values:", values);
      message.success("Account created successfully!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="signup-container">
      <Card className="signup-card">
        <div className="signup-logo-container">
          <img 
            src="/api/placeholder/120/120" 
            alt="Company Logo" 
            className="signup-logo" 
          />
        </div>
        
        <Typography.Title level={3} className="signup-title">
          Create an Account
        </Typography.Title>
        
        <Steps
          current={currentStep}
          className="signup-steps"
          items={[
            { title: 'Personal Info' },
            { title: 'Account Details' },
          ]}
        />
        
        <Form
          form={form}
          name="signup-form"
          className="signup-form"
          onFinish={onFinish}
          layout="vertical"
          scrollToFirstError
        >
          {currentStep === 0 ? (
            // Step 1: Personal Information
            <div className="signup-step-content">
              <div className="signup-form-row">
                <Form.Item
                  name="name"
                  label="First Name"
                  className="signup-form-item"
                  rules={[{ required: true, message: "Please enter your first name" }]}
                >
                  <Input 
                    prefix={<UserOutlined className="signup-icon" />} 
                    placeholder="First Name" 
                    size="large"
                  />
                </Form.Item>
                
                <Form.Item
                  name="surname"
                  label="Last Name"
                  className="signup-form-item"
                  rules={[{ required: true, message: "Please enter your last name" }]}
                >
                  <Input 
                    prefix={<UserOutlined className="signup-icon" />} 
                    placeholder="Last Name" 
                    size="large"
                  />
                </Form.Item>
              </div>
              
              <div className="signup-form-row">
                <Form.Item
                  name="email"
                  label="Email Address"
                  className="signup-form-item"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email address" }
                  ]}
                >
                  <Input 
                    prefix={<UserOutlined className="signup-icon" />} 
                    placeholder="Email Address" 
                    size="large"
                  />
                </Form.Item>
                
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  className="signup-form-item"
                  rules={[{ required: true, message: "Please enter your phone number" }]}
                >
                  <Input 
                    prefix={<PhoneOutlined className="signup-icon" />} 
                    placeholder="Phone Number" 
                    size="large"
                  />
                </Form.Item>
              </div>
              
              <Form.Item className="signup-navigation">
                <Button 
                  type="primary" 
                  onClick={handleNext}
                  className="signup-button"
                  block
                >
                  Next
                </Button>
              </Form.Item>
            </div>
          ) : (
            // Step 2: Account Details
            <div className="signup-step-content">
              <div className="signup-form-row">
                <Form.Item
                  name="password"
                  label="Password"
                  className="signup-form-item"
                  rules={[
                    { required: true, message: "Please enter your password" },
                    { min: 8, message: "Password must be at least 8 characters" }
                  ]}
                >
                  <Input.Password 
                    prefix={<LockOutlined className="signup-icon" />} 
                    placeholder="Password" 
                    size="large"
                  />
                </Form.Item>
                
                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  className="signup-form-item"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: "Please confirm your password" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords do not match'));
                      },
                    }),
                  ]}
                >
                  <Input.Password 
                    prefix={<LockOutlined className="signup-icon" />} 
                    placeholder="Confirm Password" 
                    size="large"
                  />
                </Form.Item>
              </div>
              
              <div className="signup-form-row">
                <Form.Item
                  name="address"
                  label="Address"
                  className="signup-form-item"
                  rules={[{ required: true, message: "Please enter your address" }]}
                >
                  <Input 
                    prefix={<HomeOutlined className="signup-icon" />} 
                    placeholder="Address" 
                    size="large"
                  />
                </Form.Item>
                
                <Form.Item
                  name="churchPosition"
                  label="Church Position"
                  className="signup-form-item"
                  rules={[{ required: true, message: "Please enter your church position" }]}
                >
                  <Input 
                    prefix={<TeamOutlined className="signup-icon" />} 
                    placeholder="Church Position" 
                    size="large"
                  />
                </Form.Item>
              </div>
              
              <div className="signup-navigation">
                <Button 
                  onClick={handleBack}
                  className="signup-back-button"
                >
                  Back
                </Button>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="signup-submit-button"
                  loading={loading}
                >
                  Create Account
                </Button>
              </div>
            </div>
          )}
          
          <div className="signup-login-link">
            <Typography.Text>
              Already have an account?{" "}
              <Typography.Link>Sign in</Typography.Link>
            </Typography.Text>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default Signup;
import React, { useState } from "react";
import churchlogo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Steps,
  Select,
  DatePicker,
  message,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
  HomeOutlined,
  TeamOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { Option } = Select;

function Signup() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    try {
      // Validate the fields in the current step
      if (currentStep === 0) {
        await form.validateFields([
          "name",
          "surname",
          "email",
          "phone",
          "dateOfBirth",
        ]);
        setCurrentStep(1);
      } else if (currentStep === 1) {
        await form.validateFields([
          "streetAddress",
          "town",
          "city",
          "zipCode",
          "state",
          "country",
        ]);
        setCurrentStep(2);
      }
    } catch (error) {
      console.log("Validation failed:", error);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
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
      <div className="signup-card">
        <div className="signup-logo-container">
          <img src={churchlogo} alt="Church Logo" className="signup-logo" />
        </div>

        <Typography.Title level={3} className="signup-title">
          Church Secretary Registration
        </Typography.Title>
        {/* <div className="signup-steps-box">
          <Steps
            current={currentStep}
            className="signup-steps"
            items={[
              { title: "Personal Info" },
              { title: "Address Details" },
              { title: "Church Details" },
            ]}
          />
        </div> */}

        <Form
          form={form}
          name="signup-form"
          className="signup-form"
          onFinish={onFinish}
          layout="vertical"
          scrollToFirstError
        >
          {currentStep === 0 && (
            // Step 1: Personal Information
            <div className="signup-step-content">
              <div className="signup-form-row">
                <Form.Item
                  name="name"
                  label="First Name"
                  className="signup-form-item"
                  rules={[
                    { required: true, message: "Please enter your first name" },
                  ]}
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
                  rules={[
                    { required: true, message: "Please enter your last name" },
                  ]}
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
                    {
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className="signup-icon" />}
                    placeholder="Email Address"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  className="signup-form-item"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined className="signup-icon" />}
                    placeholder="Phone Number"
                    size="large"
                  />
                </Form.Item>
              </div>

              <div className="signup-form-row">
                <Form.Item
                  name="dateOfBirth"
                  label="Date of Birth"
                  className="signup-form-item"
                  rules={[
                    {
                      required: true,
                      message: "Please select your date of birth",
                    },
                  ]}
                >
                  <DatePicker
                    size="large"
                    className="signup-date-picker"
                    placeholder="Select date"
                    prefix={<CalendarOutlined className="signup-icon" />}
                  />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gender"
                  className="signup-form-item"
                >
                  <Select size="large" placeholder="Select gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                   
                  </Select>
                </Form.Item>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            // Step 2: Address Details
            <div className="signup-step-content">
              <div className="signup-form-row">
                <Form.Item
                  name="streetAddress"
                  label="Street Address"
                  className="signup-form-item"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your street address",
                    },
                  ]}
                >
                  <Input
                    prefix={<HomeOutlined className="signup-icon" />}
                    placeholder="Street Address"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="town"
                  label="Town/Suburb"
                  className="signup-form-item"
                  rules={[
                    { required: true, message: "Please enter your town" },
                  ]}
                >
                  <Input
                    prefix={<EnvironmentOutlined className="signup-icon" />}
                    placeholder="Town"
                    size="large"
                  />
                </Form.Item>
              </div>

              <div className="signup-form-row">
                <Form.Item
                  name="city"
                  label="City"
                  className="signup-form-item"
                  rules={[
                    { required: true, message: "Please enter your city" },
                  ]}
                >
                  <Input
                    prefix={<EnvironmentOutlined className="signup-icon" />}
                    placeholder="City"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="zipCode"
                  label="Zip/Postal Code"
                  className="signup-form-item"
                  rules={[
                    { required: true, message: "Please enter your zip code" },
                  ]}
                >
                  <Input placeholder="Zip Code" size="large" />
                </Form.Item>
              </div>

              <div className="signup-form-row">
                <Form.Item
                  name="state"
                  label="State/Province"
                  className="signup-form-item"
                  rules={[
                    { required: true, message: "Please enter your state" },
                  ]}
                >
                  <Input placeholder="State" size="large" />
                </Form.Item>

                <Form.Item
                  name="country"
                  label="Country"
                  className="signup-form-item"
                  rules={[
                    { required: true, message: "Please select your country" },
                  ]}
                >
                  <Select size="large" placeholder="Select country" showSearch>
                    <Option value="us">United States</Option>
                    <Option value="ca">Canada</Option>
                    <Option value="uk">United Kingdom</Option>
                    <Option value="au">Australia</Option>
                    <Option value="za">South Africa</Option>
                    <Option value="ng">Nigeria</Option>
                    <Option value="ke">Kenya</Option>
                    <Option value="gh">Ghana</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            // Step 3: Church Details & Account
            <div className="signup-step-content">
              <div className="signup-form-row">
                <Form.Item
                  name="churchPosition"
                  label="Church Position"
                  className="signup-form-item"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your church position",
                    },
                  ]}
                >
                  <Input
                    prefix={<TeamOutlined className="signup-icon" />}
                    placeholder="Church Position"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="churchName"
                  label="Church Name"
                  className="signup-form-item"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your church name",
                    },
                  ]}
                >
                  <Input placeholder="Church Name" size="large" />
                </Form.Item>
              </div>

              <div className="signup-form-row">
                <Form.Item
                  name="departmentResponsibility"
                  label="Department/Responsibility"
                  className="signup-form-item"
                  rules={[
                    { required: true, message: "Please enter your department" },
                  ]}
                >
                  <Select size="large" placeholder="Select department">
                    <Option value="accounts">Accounts</Option>
                    <Option value="membership">Membership</Option>
                    <Option value="events">Events</Option>
                    <Option value="worship">Worship</Option>
                    <Option value="youth">Youth</Option>
                    <Option value="children">Children</Option>
                    <Option value="media">Media</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="yearsOfService"
                  label="Years of Service"
                  className="signup-form-item"
                >
                  <Input
                    type="number"
                    placeholder="Years of Service"
                    size="large"
                  />
                </Form.Item>
              </div>

              <div className="signup-form-row">
                <Form.Item
                  name="password"
                  label="Password"
                  className="signup-form-item"
                  rules={[
                    { required: true, message: "Please enter your password" },
                    {
                      min: 8,
                      message: "Password must be at least 8 characters",
                    },
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
                  dependencies={["password"]}
                  rules={[
                    { required: true, message: "Please confirm your password" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The two passwords do not match")
                        );
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
            </div>
          )}

          <div className="signup-navigation">
            {currentStep > 0 && (
              <Button onClick={handleBack} className="signup-back-button">
                Back
              </Button>
            )}

            {currentStep < 2 && (
              <Button
                type="primary"
                onClick={handleNext}
                className="signup-next-button"
              >
                Next
              </Button>
            )}

            {currentStep === 2 && (
              <Button
                type="primary"
                htmlType="submit"
                className="signup-submit-button"
                loading={loading}
              >
                Create Account
              </Button>
            )}
          </div>

          <div className="signup-login-link">
            <Typography.Text>
              Already have an account?{" "}
              <Typography.Link  onClick={() => navigate("/")}>Sign in</Typography.Link>
            </Typography.Text>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signup;

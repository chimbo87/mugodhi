import React from "react";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Card, Button } from "antd";
import logo from "../../../assets/images/person.jpeg";

const AdminProfile = () => {
  return (
    <div
      style={{
        padding: "24px",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#ececec",
      }}
    >
      {/* Header Section */}
      <div style={{ marginBottom: "32px", textAlign: "center" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <div
            style={{
              width: "128px",
              height: "128px",
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "#f0f0f0",
              marginBottom: "16px",
            }}
          >
            <img
              src={logo}
              alt="Admin Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <Button
            style={{
              position: "absolute",
              bottom: "16px",
              right: "0",
              padding: "8px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            }}
            icon={<EditOutlined style={{ fontSize: "16px", color: "#666" }} />}
          />
        </div>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "8px",
          }}
        >
          Pastor John Smith
        </h1>
        <p style={{ color: "#666" }}>Lead Pastor & Administrator</p>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {/* Personal Information Card */}
        <Card
          title="Personal Information"
          headStyle={{
            fontSize: "18px",
            fontWeight: "600",
            borderBottom: "1px solid #f0f0f0",
          }}
          bodyStyle={{ padding: "16px" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <UserOutlined
                style={{
                  fontSize: "20px",
                  color: "#1890ff",
                  marginRight: "12px",
                }}
              />
              <div>
                <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                  Full Name
                </p>
                <p style={{ fontSize: "16px", color: "#333", margin: "0" }}>
                  John Robert Smith
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <MailOutlined
                style={{
                  fontSize: "20px",
                  color: "#1890ff",
                  marginRight: "12px",
                }}
              />
              <div>
                <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                  Email
                </p>
                <p style={{ fontSize: "16px", color: "#333", margin: "0" }}>
                  pastor.john@churchdomain.com
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <PhoneOutlined
                style={{
                  fontSize: "20px",
                  color: "#1890ff",
                  marginRight: "12px",
                }}
              />
              <div>
                <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                  Phone
                </p>
                <p style={{ fontSize: "16px", color: "#333", margin: "0" }}>
                  (555) 123-4567
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <EnvironmentOutlined
                style={{
                  fontSize: "20px",
                  color: "#1890ff",
                  marginRight: "12px",
                }}
              />
              <div>
                <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                  Address
                </p>
                <p style={{ fontSize: "16px", color: "#333", margin: "0" }}>
                  123 Church Street, City, State 12345
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Church Details Card */}
        <Card
          title="Ministry Details"
          headStyle={{
            fontSize: "18px",
            fontWeight: "600",
            borderBottom: "1px solid #f0f0f0",
          }}
          bodyStyle={{ padding: "16px" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <CalendarOutlined
                style={{
                  fontSize: "20px",
                  color: "#1890ff",
                  marginRight: "12px",
                }}
              />
              <div>
                <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                  Joined Date
                </p>
                <p style={{ fontSize: "16px", color: "#333", margin: "0" }}>
                  January 15, 2020
                </p>
              </div>
            </div>
            <div>
              <h3
                style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}
              >
                Responsibilities
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    padding: "4px 12px",
                    backgroundColor: "#e6f7ff",
                    color: "#1890ff",
                    borderRadius: "16px",
                    fontSize: "14px",
                  }}
                >
                  Pastoral Care
                </span>
                <span
                  style={{
                    padding: "4px 12px",
                    backgroundColor: "#e6f7ff",
                    color: "#1890ff",
                    borderRadius: "16px",
                    fontSize: "14px",
                  }}
                >
                  Administration
                </span>
                <span
                  style={{
                    padding: "4px 12px",
                    backgroundColor: "#e6f7ff",
                    color: "#1890ff",
                    borderRadius: "16px",
                    fontSize: "14px",
                  }}
                >
                  Teaching
                </span>
              </div>
            </div>
            <div>
              <h3
                style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}
              >
                Office Hours
              </h3>
              <p style={{ fontSize: "16px", color: "#333", margin: "0" }}>
                Monday - Friday: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div
        style={{
          marginTop: "32px",
          display: "flex",
          justifyContent: "flex-end",
          gap: "16px",
        }}
      >
        <Button style={{ color: "#1890ff", borderColor: "#1890ff" }}>
          Edit Profile
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default AdminProfile;

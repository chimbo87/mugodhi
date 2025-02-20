import React from "react";
import logo from "../../../assets/images/logo.png";
import { Card, Avatar, Descriptions, Button, Tag, Typography, Space } from "antd";
import { UserOutlined, EditOutlined, StopOutlined } from "@ant-design/icons";


const { Title, Paragraph } = Typography;

function MemberDetails() {
  // Sample member data - replace with your actual data
  const memberData = {
    name: "John Doe",
    dateJoined: "2024-01-15",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Church Street, City, State 12345",
    ministry: "Worship Team",
    status: "Active",
    familyMembers: "Sarah Doe (Spouse), Emily Doe (Child)",
    notes: "Dedicated worship team member. Plays guitar and leads Sunday morning worship. Has been serving in the church for over 5 years. Actively participates in community outreach programs.",
  };

  return (
    <div className="member-details-container">
      {/* <div className="church-logo">
      <img src={logo} alt="logo"  className="logo-image"/>
     
      </div> */}

      <Card className="member-details-card">
        <div className="member-header">
          <Avatar size={100} icon={<UserOutlined />} className="member-avatar" />
          <div className="member-title">
            <Title level={2}>{memberData.name}</Title>
            <Tag color={memberData.status === "Active" ? "green" : "red"}>
              {memberData.status}
            </Tag>
          </div>
        </div>

        <Descriptions 
          bordered 
          column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
          className="member-descriptions"
        >
          <Descriptions.Item label="Date Joined">
            {memberData.dateJoined}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {memberData.email}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            {memberData.phone}
          </Descriptions.Item>
          <Descriptions.Item label="Ministry">
            {memberData.ministry}
          </Descriptions.Item>
          <Descriptions.Item label="Address" span={2}>
            {memberData.address}
          </Descriptions.Item>
          <Descriptions.Item label="Family Members" span={2}>
            {memberData.familyMembers}
          </Descriptions.Item>
        </Descriptions>

        <div className="notes-section">
          <Title level={4}>Notes</Title>
          <Card className="notes-card">
            <Paragraph>{memberData.notes}</Paragraph>
          </Card>
        </div>

        <div className="action-buttons">
          <Space size="middle">
            <Button 
              type="primary" 
              icon={<EditOutlined />}
              className="edit-button"
            >
              Edit Details
            </Button>
            <Button 
              danger 
              icon={<StopOutlined />}
              className="suspend-button"
            >
              Suspend Member
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
}

export default MemberDetails;
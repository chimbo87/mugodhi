import React from "react";
import logo from "../../../assets/images/logo.png";
import { 
  Card, 
  Avatar, 
  Descriptions, 
  Button, 
  Tag, 
  Typography, 
  Space, 
  Timeline,
  Statistic,
  Row,
  Col,
  List
} from "antd";
import { 
  UserOutlined, 
  EditOutlined, 
  StopOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined
} from "@ant-design/icons";


const { Title, Paragraph } = Typography;

function SecretaryDetails() {
  // Sample secretary data - replace with your actual data
  const secretaryData = {
    name: "Sarah Johnson",
    position: "Head Secretary",
    dateJoined: "2023-03-15",
    email: "sarah.johnson@church.org",
    phone: "+1 (555) 987-6543",
    status: "Active",
    accessLevel: "Administrator",
    department: "Administrative Office",
    workingHours: "Monday-Friday, 9:00 AM - 5:00 PM",
    responsibilities: [
      "Managing church calendar and events",
      "Coordinating with ministry leaders",
      "Handling official correspondence",
      "Maintaining member records",
      "Processing new member applications"
    ],
    recentActivities: [
      {
        date: "2024-02-19",
        activity: "Updated member database",
        status: "completed"
      },
      {
        date: "2024-02-18",
        activity: "Processed 5 new member applications",
        status: "completed"
      },
      {
        date: "2024-02-17",
        activity: "Scheduled Easter service preparations",
        status: "in-progress"
      }
    ],
    statistics: {
      tasksCompleted: 156,
      hoursLogged: 180,
      membersProcessed: 45,
      eventsManaged: 23
    }
  };

  return (
    <div className="secretary-details-container">
      {/* <div className="church-logo">
        <img 
          src="/church-logo.png" 
          alt="Church Logo" 
          className="logo-image"
        />
      </div> */}

      <Card className="secretary-details-card">
        <div className="secretary-header">
        <div className="secretary-header-box">
        <Avatar size={100} icon={<UserOutlined />} className="secretary-avatar" />
          <div className="secretary-title">
            <Title level={2}>{secretaryData.name}</Title>
            <Space size="small">
              <Tag color="blue">{secretaryData.position}</Tag>
              <Tag color={secretaryData.status === "Active" ? "green" : "red"}>
                {secretaryData.status}
              </Tag>
              <Tag color="purple">{secretaryData.accessLevel}</Tag>
            </Space>
          </div>
        </div>
        <div>
        <img src={logo} alt="logo"  className="logo-image"/>
        </div>
        </div>

        <Row gutter={[24, 24]} className="statistics-row">
          <Col xs={12} sm={12} md={6}>
            <Statistic title="Tasks Completed" value={secretaryData.statistics.tasksCompleted} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Statistic title="Hours This Month" value={secretaryData.statistics.hoursLogged} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Statistic title="Members Processed" value={secretaryData.statistics.membersProcessed} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Statistic title="Events Managed" value={secretaryData.statistics.eventsManaged} />
          </Col>
        </Row>

        <Descriptions 
          bordered 
          column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
          className="secretary-descriptions"
        >
          <Descriptions.Item label="Date Joined">
            {secretaryData.dateJoined}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {secretaryData.email}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            {secretaryData.phone}
          </Descriptions.Item>
          <Descriptions.Item label="Department">
            {secretaryData.department}
          </Descriptions.Item>
          <Descriptions.Item label="Working Hours" span={2}>
            {secretaryData.workingHours}
          </Descriptions.Item>
        </Descriptions>

        <div className="responsibilities-section">
          <Title level={4}>Responsibilities</Title>
          <List
            dataSource={secretaryData.responsibilities}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined className="responsibility-icon" /> {item}
              </List.Item>
            )}
          />
        </div>

        <div className="activities-section">
          <Title level={4}>Recent Activities</Title>
          <Timeline>
            {secretaryData.recentActivities.map((activity, index) => (
              <Timeline.Item 
                key={index}
                color={activity.status === "completed" ? "green" : "blue"}
                dot={activity.status === "completed" ? <CheckCircleOutlined /> : <ClockCircleOutlined />}
              >
                <p className="activity-date">{activity.date}</p>
                <p className="activity-description">{activity.activity}</p>
              </Timeline.Item>
            ))}
          </Timeline>
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
              Suspend Secretary
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
}

export default SecretaryDetails;
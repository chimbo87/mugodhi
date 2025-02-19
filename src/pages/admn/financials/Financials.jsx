import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Layout, 
  Tabs, 
  Card, 
  Avatar, 
  Row, 
  Col, 
  Typography, 
  Statistic, 
  Table,
  Progress,
  Button,
  Drawer,
  List,
  Tag,
  Space
} from 'antd';
import { 
  RightOutlined,
  DollarOutlined,
  HomeOutlined,
  HeartOutlined,
  GiftOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import './Financials.css';

const { TabPane } = Tabs;
const { Title, Text } = Typography;

function Financials() {
    const navigate = useNavigate();

  // Sample rent data
  const rentData = [
    {
      month: 'January 2025',
      amount: 5000,
      target: 6000,
      contributors: [
        { name: 'John Doe', amount: 1000, avatar: 'JD' },
        { name: 'Jane Smith', amount: 2000, avatar: 'JS' },
        { name: 'Mike Johnson', amount: 1500, avatar: 'MJ' },
        { name: 'Sarah Williams', amount: 500, avatar: 'SW' }
      ]
    },
    {
      month: 'February 2025',
      amount: 5500,
      target: 6000,
      contributors: [
        { name: 'Alice Brown', amount: 2000, avatar: 'AB' },
        { name: 'Robert Wilson', amount: 1500, avatar: 'RW' },
        { name: 'Emma Davis', amount: 1000, avatar: 'ED' },
        { name: 'James Miller', amount: 1000, avatar: 'JM' }
      ]
    },
    {
        month: 'March 2025',
        amount: 4000,
        target: 6000,
        contributors: [
          { name: 'Alice Brown', amount: 2000, avatar: 'AB' },
          { name: 'Robert Wilson', amount: 1500, avatar: 'RW' },
          { name: 'Emma Davis', amount: 1000, avatar: 'ED' },
          { name: 'James Miller', amount: 1000, avatar: 'JM' }
        ]
      },
    // Add more months as needed
  ];

  // Sample pledges data
  const pledgesColumns = [
    {
      title: 'Member',
      dataIndex: 'member',
      key: 'member',
      render: (text, record) => (
        <Space>
          <Avatar>{record.avatar}</Avatar>
          {text}
        </Space>
      ),
    },
    {
      title: 'Pledge Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: amount => `$${amount.toLocaleString()}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <Tag color={status === 'Fulfilled' ? 'green' : 'orange'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    }
  ];

  const pledgesData = [
    {
      key: '1',
      member: 'John Doe',
      avatar: 'JD',
      amount: 5000,
      status: 'In Progress',
      dueDate: '2025-06-30',
    },
    // Add more pledge data
  ];

  // Sample offerings data
  const offeringsColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: amount => `$${amount.toLocaleString()}`,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: type => (
        <Tag color={type === 'Regular' ? 'blue' : 'purple'}>
          {type}
        </Tag>
      ),
    }
  ];

  const offeringsData = [
    {
      key: '1',
      date: '2025-02-19',
      service: 'Sunday Morning',
      amount: 3500,
      type: 'Regular',
    },
    // Add more offerings data
  ];



  return (
    <Layout className="financial-records">
      <div className="financial-header">
        <Title level={2}>Financial Records</Title>
      </div>

      <Tabs defaultActiveKey="1" className="financial-tabs">
        <TabPane 
          tab={<span><HomeOutlined />Rent</span>} 
          key="1"
        >
             <div id="rent-payment-list">Rent Payments   <Button type="primary">+Add Month</Button></div>
          <Row gutter={[16, 16]} className="rent-cards">
           
            {rentData.map((month, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card 
                  className="rent-card"
                  onClick={() => {
                    navigate("/admnistration/rent-details");
                  }}
                >
                  <div className="rent-card-header">
                    <Space>
                      <CalendarOutlined />
                      <Text strong>{month.month}</Text>
                    </Space>
                    <RightOutlined />
                  </div>
                  
                  <Statistic 
                    title="Amount Raised"
                    value={month.amount}
                    prefix="$"
                    precision={2}
                  />
                  
                  <Progress 
                    percent={Math.round((month.amount / month.target) * 100)}
                    status="active"
                    className="rent-progress"
                  />
                  
                  <div className="rent-card-footer">
                    <Text type="secondary">Contributors</Text>
                    <Avatar.Group maxCount={3}>
                      {month.contributors.map((contributor, idx) => (
                        <Avatar key={idx}>{contributor.avatar}</Avatar>
                      ))}
                    </Avatar.Group>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </TabPane>

        <TabPane 
          tab={<span><HeartOutlined />Pledges</span>} 
          key="2"
        >
          <Card className="pledges-card">
            <Table 
              columns={pledgesColumns} 
              dataSource={pledgesData}
              pagination={{ pageSize: 10 }}
            />
          </Card>
        </TabPane>

        <TabPane 
          tab={<span><GiftOutlined />Offerings</span>} 
          key="3"
        >
          <Card className="offerings-card">
            <Table 
              columns={offeringsColumns} 
              dataSource={offeringsData}
              pagination={{ pageSize: 10 }}
            />
          </Card>
        </TabPane>
      </Tabs>

     
    </Layout>
  );
}

export default Financials;
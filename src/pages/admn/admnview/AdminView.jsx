import React from "react";
import { 
  Layout, 
  Card, 
  Row, 
  Col, 
  Statistic, 
  Table, 
  Badge,
  Typography,
  Progress,
  Space 
} from 'antd';
import { 
  TeamOutlined, 
  CalendarOutlined, 
  HeartOutlined,
  BranchesOutlined
} from '@ant-design/icons';
import { Line, Pie } from '@ant-design/charts';
import './AdminView.css';

const { Header, Content } = Layout;
const { Title } = Typography;

function AdminView() {
  // Sample data for attendance trends
  const attendanceData = [
    { month: 'Jan', attendance: 350 },
    { month: 'Feb', attendance: 420 },
    { month: 'Mar', attendance: 580 },
    { month: 'Apr', attendance: 490 },
    { month: 'May', attendance: 630 },
  ];

  // Sample data for ministry distribution
  const ministryData = [
    { type: 'Youth Ministry', value: 30 },
    { type: 'Worship Team', value: 25 },
    { type: 'Children Ministry', value: 20 },
    { type: 'Outreach', value: 15 },
    { type: 'Prayer Team', value: 10 },
  ];

  const upcomingEvents = [
    {
      key: '1',
      eventId: 'EVT-001',
      name: 'Sunday Service',
      ministry: 'Main Service',
      status: 'Upcoming',
      attendance: 450,
    },
    {
      key: '2',
      eventId: 'EVT-002',
      name: 'Youth Night',
      ministry: 'Youth Ministry',
      status: 'In Planning',
      attendance: 120,
    }
  ];

  const columns = [
    {
      title: 'Event ID',
      dataIndex: 'eventId',
      key: 'eventId',
    },
    {
      title: 'Event Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ministry',
      dataIndex: 'ministry',
      key: 'ministry',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Badge 
          status={status === 'Upcoming' ? 'success' : 'processing'} 
          text={status} 
        />
      ),
    },
    {
      title: 'Expected Attendance',
      dataIndex: 'attendance',
      key: 'attendance',
    },
  ];

  const lineConfig = {
    data: attendanceData,
    xField: 'month',
    yField: 'attendance',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  const pieConfig = {
    data: ministryData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
    },
  };

  return (
    <Layout className="church-dashboard">
      <Header className="dashboard-header">
        <Title level={2}>Church Administration Dashboard</Title>
      </Header>
      
      <Content className="dashboard-content">
        {/* Statistics Cards */}
        <Row gutter={[16, 16]} className="stats-row">
          <Col xs={24} sm={12} lg={6}>
            <Card className="stat-card">
              <Statistic 
                title="Total Members"
                value={1250}
                prefix={<TeamOutlined />}
                suffix="members"
              />
              <Progress percent={70} size="small" />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="stat-card">
              <Statistic 
                title="Weekly Attendance"
                value={850}
                prefix={<CalendarOutlined />}
                suffix="people"
              />
              <Progress percent={85} size="small" />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="stat-card">
              <Statistic 
                title="Monthly Donations"
                value={28500}
                prefix={<HeartOutlined />}
                precision={2}
              />
              <Progress percent={62} size="small" />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="stat-card">
              <Statistic 
                title="Active Ministries"
                value={12}
                prefix={<BranchesOutlined />}
              />
              <Progress percent={90} size="small" />
            </Card>
          </Col>
        </Row>

        {/* Charts Section */}
        <Row gutter={[16, 16]} className="charts-row">
          <Col xs={24} lg={14}>
            <Card title="Attendance Trends" className="chart-card">
              <Line {...lineConfig} />
            </Card>
          </Col>
          <Col xs={24} lg={10}>
            <Card title="Ministry Distribution" className="chart-card">
              <Pie {...pieConfig} />
            </Card>
          </Col>
        </Row>

        {/* Events Table */}
        <Row className="table-row">
          <Col span={24}>
            <Card title="Upcoming Events" className="table-card">
              <Table 
                columns={columns} 
                dataSource={upcomingEvents} 
                pagination={{ pageSize: 5 }}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default AdminView;
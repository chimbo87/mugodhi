import React from "react";
import logo from "../../../assets/images/logo.png";
import { 
  Card, 
  Typography, 
  Divider, 
  Table, 
  Space, 
  Button, 
  Avatar,
  Statistic,
  Progress,
  Row,
  Col
} from 'antd';
import { 
  PrinterOutlined, 
  DownloadOutlined,
  CalendarOutlined,
  UserOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';


const { Title, Text } = Typography;

function RentDetails({ monthData }) {
  // Sample data - replace with actual data passed as props
  const rentDetails = {
    month: 'January 2025',
    totalAmount: 5000,
    targetAmount: 6000,
    dateIssued: '2025-01-31',
    receiptNumber: 'RNT-2025-001',
    churchName: 'AFC Johannesburg Church',
    churchAddress: '123 Faith Avenue, Spiritual City, SC 12345',
    churchPhone: '(123) 456-7890',
    churchEmail: 'info@gracechurch.org',
    contributors: [
      { 
        key: '1',
        name: 'John Doe',
        amount: 1000,
        date: '2025-01-15',
        paymentMethod: 'Bank Transfer',
        status: 'Confirmed',
        avatar: 'JD'
      },
      { 
        key: '2',
        name: 'Jane Smith',
        amount: 2000,
        date: '2025-01-16',
        paymentMethod: 'Cash',
        status: 'Confirmed',
        avatar: 'JS'
      },
      { 
        key: '3',
        name: 'Mike Johnson',
        amount: 1500,
        date: '2025-01-20',
        paymentMethod: 'Check',
        status: 'Confirmed',
        avatar: 'MJ'
      },
      { 
        key: '4',
        name: 'Sarah Williams',
        amount: 500,
        date: '2025-01-25',
        paymentMethod: 'Bank Transfer',
        status: 'Confirmed',
        avatar: 'SW'
      }
    ]
  };

  const columns = [
    {
      title: 'Contributor',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Space>
          <Avatar>{record.avatar}</Avatar>
          {text}
        </Space>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: amount => `$${amount.toLocaleString()}`,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <Space>
          <CheckCircleOutlined style={{ color: '#52c41a' }} />
          {status}
        </Space>
      ),
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="rent-details-page">
      <Card className="rent-details-card">
        {/* Header with Church Logo and Info */}
        <div className="church-header">
          <div className="church-logo">
            <div className="logo-placeholder">
            <img src={logo} alt="logo"/>
            </div>
          </div>
          <div className="church-info">
            <Title level={2}>{rentDetails.churchName}</Title>
            <Text>{rentDetails.churchAddress}</Text>
            <Text>Phone: {rentDetails.churchPhone}</Text>
            <Text>Email: {rentDetails.churchEmail}</Text>
          </div>
        </div>

        <Divider />

        {/* Rent Details Section */}
        <div className="rent-info-section">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Space direction="vertical" size="small">
                <Text strong>
                  <CalendarOutlined /> Month: {rentDetails.month}
                </Text>
                <Text>Receipt Number: {rentDetails.receiptNumber}</Text>
                <Text>Date Issued: {rentDetails.dateIssued}</Text>
              </Space>
            </Col>
            <Col xs={24} md={12}>
              <Statistic 
                title="Total Amount Collected"
                value={rentDetails.totalAmount}
                prefix="$"
              />
              <Progress 
                percent={Math.round((rentDetails.totalAmount / rentDetails.targetAmount) * 100)}
                status="active"
                className="rent-progress"
              />
            </Col>
          </Row>
        </div>

        <Divider />

        {/* Contributors Table */}
        <div className="contributors-section">
      <div id="rent-detail-wraphead">

           <small>  <UserOutlined /> Contributors Details</small>
        
          <Button type="primary">+ Add</Button>
      </div>
          <Table 
            columns={columns}
            dataSource={rentDetails.contributors}
            pagination={false}
            className="contributors-table"
          />
        </div>

        {/* Summary Section */}
        <div className="summary-section">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card className="summary-card">
                <Statistic
                  title="Target Amount"
                  value={rentDetails.targetAmount}
                  prefix="$"
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="summary-card">
                <Statistic
                  title="Remaining Amount"
                  value={rentDetails.targetAmount - rentDetails.totalAmount}
                  prefix="$"
                  valueStyle={{ color: '#cf1322' }}
                />
              </Card>
            </Col>
          </Row>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <Space size="middle">
            <Button 
              type="primary" 
              icon={<PrinterOutlined />}
              onClick={handlePrint}
              className="print-button"
            >
              Print Details
            </Button>
            <Button 
              icon={<DownloadOutlined />}
              className="download-button"
            >
              Download PDF
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
}

export default RentDetails;
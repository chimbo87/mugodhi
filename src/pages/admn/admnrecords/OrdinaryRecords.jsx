import React, { useState } from 'react';
import { 
  Tabs, 
  Input, 
  Select, 
  Button, 
  Tag, 
  Space, 
  Typography,
  Empty,
  Tooltip,
  Modal 
} from 'antd';
import { 
  FileTextOutlined,
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
  UserOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  WarningOutlined
} from '@ant-design/icons';
import './OrdinaryRecords.css';

const { TabPane } = Tabs;
const { Title } = Typography;
const { Option } = Select;

const OrdinaryRecords = () => {
  const [activeTab, setActiveTab] = useState('1');

  // Sample data for different record types
  const ordinaryRecords = [
    {
      id: 1,
      title: 'Sunday Service Attendance',
      date: '2025-02-18',
      recordedBy: 'Pastor John',
      content: 'Total attendance: 250 members. Notable events: 3 new visitors, 2 salvations.',
      type: 'attendance'
    },
    {
      id: 2,
      title: 'Midweek Service Notes',
      date: '2025-02-15',
      recordedBy: 'Elder Sarah',
      content: 'Bible study on Ephesians 4. Discussion on spiritual gifts and unity.',
      type: 'service'
    }
  ];

  const prophecyRecords = [
    {
      id: 1,
      title: 'Church Growth Prophecy',
      date: '2025-01-10',
      prophet: 'Prophet Michael',
      content: 'The church will experience significant growth in the next 6 months.',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Revival Prophecy',
      date: '2025-02-01',
      prophet: 'Prophet Rachel',
      content: 'A great revival will begin in the youth ministry.',
      status: 'pending'
    }
  ];

  const disciplinaryRecords = [
    {
      id: 1,
      title: 'Member Counseling Record',
      date: '2025-02-10',
      handler: 'Pastor James',
      subject: 'John Doe',
      content: 'Counseling session regarding church attendance.',
      status: 'active'
    },
    {
      id: 2,
      title: 'Resolution Meeting',
      date: '2025-02-05',
      handler: 'Elder Mark',
      subject: 'Jane Smith',
      content: 'Conflict resolution between ministry members.',
      status: 'resolved'
    }
  ];

  const handleDelete = (recordId) => {
    Modal.confirm({
      title: 'Delete Record',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete this record?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => {
        console.log('Delete record:', recordId);
      }
    });
  };

  const renderOrdinaryRecords = () => (
    <div>
      <div className="records-search-filter">
        <Input.Search 
          placeholder="Search records" 
          style={{ width: 300 }}
          prefix={<SearchOutlined />}
        />
        <Select defaultValue="all" style={{ width: 150 }}>
          <Option value="all">All Types</Option>
          <Option value="attendance">Attendance</Option>
          <Option value="service">Service</Option>
          <Option value="meeting">Meeting</Option>
        </Select>
      </div>
      {ordinaryRecords.map(record => (
        <div key={record.id} className="record-card">
          <div className="record-header">
            <Title level={5} className="record-title">{record.title}</Title>
            <Tag color="blue">{record.type}</Tag>
          </div>
          <div className="record-meta">
            <span><CalendarOutlined /> {record.date}</span>
            <span><UserOutlined /> {record.recordedBy}</span>
          </div>
          <div className="record-content">{record.content}</div>
          <div className="record-footer">
            <div className="record-actions">
              <Button type="text" icon={<EditOutlined />}>Edit</Button>
              <Button type="text" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProphecyRecords = () => (
    <div>
      <div className="records-search-filter">
        <Input.Search 
          placeholder="Search prophecies" 
          style={{ width: 300 }}
          prefix={<SearchOutlined />}
        />
        <Select defaultValue="all" style={{ width: 150 }}>
          <Option value="all">All Status</Option>
          <Option value="pending">Pending</Option>
          <Option value="in-progress">In Progress</Option>
          <Option value="fulfilled">Fulfilled</Option>
        </Select>
      </div>
      {prophecyRecords.map(record => (
        <div key={record.id} className="record-card">
          <div className="record-header">
            <Title level={5} className="record-title">{record.title}</Title>
            <Tag color={
              record.status === 'fulfilled' ? 'success' :
              record.status === 'in-progress' ? 'processing' :
              'warning'
            }>
              {record.status}
            </Tag>
          </div>
          <div className="record-meta">
            <span><CalendarOutlined /> {record.date}</span>
            <span><UserOutlined /> {record.prophet}</span>
          </div>
          <div className="record-content">{record.content}</div>
          <div className="record-footer">
            <div className="record-actions">
              <Button type="text" icon={<EditOutlined />}>Edit</Button>
              <Button type="text" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDisciplinaryRecords = () => (
    <div>
      <div className="records-search-filter">
        <Input.Search 
          placeholder="Search disciplinary records" 
          style={{ width: 300 }}
          prefix={<SearchOutlined />}
        />
        <Select defaultValue="all" style={{ width: 150 }}>
          <Option value="all">All Status</Option>
          <Option value="active">Active</Option>
          <Option value="resolved">Resolved</Option>
        </Select>
      </div>
      {disciplinaryRecords.map(record => (
        <div key={record.id} className="record-card">
          <div className="record-header">
            <Title level={5} className="record-title">{record.title}</Title>
            <Tag color={record.status === 'resolved' ? 'success' : 'error'}>
              {record.status}
            </Tag>
          </div>
          <div className="record-meta">
            <span><CalendarOutlined /> {record.date}</span>
            <span><UserOutlined /> Handler: {record.handler}</span>
            <span><UserOutlined /> Subject: {record.subject}</span>
          </div>
          <div className="record-content">{record.content}</div>
          <div className="record-footer">
            <div className="record-actions">
              <Button type="text" icon={<EditOutlined />}>Edit</Button>
              <Button type="text" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="records-container">
      <div className="records-header">
        <Title level={4}>
          <FileTextOutlined /> Church Records
        </Title>
        <Button type="primary" icon={<PlusOutlined />}>
          Add New Record
        </Button>
      </div>

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="Ordinary" key="1">
          {renderOrdinaryRecords()}
        </TabPane>
        <TabPane tab="Prophecy" key="2">
          {renderProphecyRecords()}
        </TabPane>
        <TabPane tab="Disciplinary" key="3">
          {renderDisciplinaryRecords()}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default OrdinaryRecords;
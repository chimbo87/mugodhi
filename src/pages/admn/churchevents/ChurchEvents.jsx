import React, { useState } from 'react';
import { Tabs, Card, Button, Tag, Typography, Space } from 'antd';
import { 
  CalendarOutlined, 
  EnvironmentOutlined, 
  ClockCircleOutlined, 
  PlusOutlined 
} from '@ant-design/icons';
import './ChurchEvents.css';

const { TabPane } = Tabs;
const { Title } = Typography;

const ChurchEvents = () => {
  const [activeTab, setActiveTab] = useState('1');

  const localEvents = [
    {
      title: 'Wedding',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur dolor rem accusantium cupiditate dignissimos voluptas!',
      location: 'Jo-burg Branch',
      status: 'In Progress',
      timeLeft: null
    },
    {
      title: 'All Night Prayer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur dolor rem accusantium cupiditate dignissimos voluptas!',
      location: 'Jo-burg Branch',
      status: null,
      timeLeft: '3days 20Hours Left'
    },
    {
      title: 'Big Sunday',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur dolor rem accusantium cupiditate dignissimos voluptas!',
      location: 'Soweto',
      status: 'Completed',
      timeLeft: null
    }
  ];

  const nationalEvents = [
    {
      title: 'Annual Conference',
      description: 'National gathering of all church branches for worship and fellowship.',
      location: 'National Cathedral',
      status: 'Upcoming',
      timeLeft: '15days Left'
    },
    {
      title: 'Youth Convention',
      description: 'National youth conference focusing on spiritual growth and leadership.',
      location: 'Central Branch',
      status: 'Registration Open',
      timeLeft: '30days Left'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'green';
      case 'In Progress':
        return 'blue';
      case 'Upcoming':
        return 'gold';
      case 'Registration Open':
        return 'purple';
      default:
        return 'default';
    }
  };

  const renderEventCards = (events) => (
    <div className="church-events-flex-container">
      {events.map((event, index) => (
        <div key={index}>
          <Card className="church-event-card">
            <h3 className="church-event-title">{event.title}</h3>
            <p className="church-event-description">{event.description}</p>
            <div className="church-event-meta">
              <span className="church-meta-item">
                <EnvironmentOutlined />
                {event.location}
              </span>
              {event.timeLeft && (
                <span className="church-meta-item">
                  <ClockCircleOutlined />
                  {event.timeLeft}
                </span>
              )}
            </div>
            <div className="church-event-status">
              <Space>
                {event.status && (
                  <Tag color={getStatusColor(event.status)}>
                    {event.status}
                  </Tag>
                )}
                <Button type="link">View More</Button>
              </Space>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );

  return (
    <div className="church-events-container">
      <div className="church-events-header">
        <Title level={4}>
          <CalendarOutlined /> Events
        </Title>
        <Button type="primary" icon={<PlusOutlined />}>
          Add Event
        </Button>
      </div>

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="Local Events" key="1">
          {renderEventCards(localEvents)}
        </TabPane>
        <TabPane tab="National Events" key="2">
          {renderEventCards(nationalEvents)}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ChurchEvents;
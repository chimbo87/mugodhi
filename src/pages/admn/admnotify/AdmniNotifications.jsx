import React, { useState } from 'react';
import { 
  Typography, 
  Button, 
  Badge, 
  Select, 
  Tag, 
  Tooltip, 
  Space,
  Empty,
  Modal
} from 'antd';
import { 
  BellOutlined, 
  CheckCircleOutlined, 
  ClockCircleOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';
import './AdmniNotifications.css';

const { Title } = Typography;
const { Option } = Select;

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Member Registration',
      message: 'John Doe has registered as a new church member. Please review and approve their membership.',
      type: 'member',
      priority: 'high',
      timestamp: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Upcoming Event Reminder',
      message: 'Sunday School teachers meeting scheduled for tomorrow at 9:00 AM.',
      type: 'event',
      priority: 'medium',
      timestamp: '5 hours ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Donation Received',
      message: 'A donation of $500 has been received for the building fund.',
      type: 'donation',
      priority: 'low',
      timestamp: '1 day ago',
      unread: false,
    },
    {
      id: 4,
      title: 'Prayer Request',
      message: 'New prayer request submitted by Jane Smith for her upcoming surgery.',
      type: 'prayer',
      priority: 'medium',
      timestamp: '2 days ago',
      unread: false,
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const getTypeIcon = (type) => {
    switch (type) {
      case 'member':
        return <UserOutlined />;
      case 'event':
        return <ClockCircleOutlined />;
      case 'donation':
        return <CheckCircleOutlined />;
      case 'prayer':
        return <MessageOutlined />;
      default:
        return <BellOutlined />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'blue';
    }
  };

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, unread: false } : notif
    ));
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: 'Delete Notification',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete this notification?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => {
        setNotifications(notifications.filter(notif => notif.id !== id));
      }
    });
  };

  const filteredNotifications = notifications
    .filter(notif => {
      if (filter === 'unread') return notif.unread;
      if (filter === 'read') return !notif.unread;
      return true;
    })
    .filter(notif => {
      if (typeFilter === 'all') return true;
      return notif.type === typeFilter;
    });

  return (
    <div className="admin-notifications-container">
      <div className="admin-notifications-header">
        <Space>
          <Title level={4}>
            <BellOutlined /> Notifications
          </Title>
          <Badge count={notifications.filter(n => n.unread).length} />
        </Space>
        <Space>
          <Button icon={<CheckCircleOutlined />} onClick={() => setNotifications(notifications.map(n => ({ ...n, unread: false })))}>
            Mark All as Read
          </Button>
          <Button icon={<SettingOutlined />}>
            Settings
          </Button>
        </Space>
      </div>

      <div className="admin-notifications-filters">
        <Select defaultValue="all" style={{ width: 120 }} onChange={setFilter}>
          <Option value="all">All</Option>
          <Option value="unread">Unread</Option>
          <Option value="read">Read</Option>
        </Select>

        <Select defaultValue="all" style={{ width: 150 }} onChange={setTypeFilter}>
          <Option value="all">All Types</Option>
          <Option value="member">Members</Option>
          <Option value="event">Events</Option>
          <Option value="donation">Donations</Option>
          <Option value="prayer">Prayer Requests</Option>
        </Select>
      </div>

      {filteredNotifications.length > 0 ? (
        filteredNotifications.map(notification => (
          <div 
            key={notification.id}
            className={`notification-item ${notification.unread ? 'unread' : ''}`}
          >
            <div className="notification-header">
              <Space>
                {getTypeIcon(notification.type)}
                <h4 className="notification-title">{notification.title}</h4>
                <Tag color={getPriorityColor(notification.priority)}>
                  {notification.priority}
                </Tag>
              </Space>
            </div>
            <p>{notification.message}</p>
            <div className="notification-meta">
              <span>{notification.timestamp}</span>
              <div className="notification-actions">
                {notification.unread && (
                  <Tooltip title="Mark as read">
                    <Button 
                      type="text" 
                      size="small"
                      icon={<CheckCircleOutlined />}
                      onClick={() => handleMarkAsRead(notification.id)}
                    />
                  </Tooltip>
                )}
                <Tooltip title="Delete">
                  <Button 
                    type="text" 
                    size="small" 
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(notification.id)}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Empty
          className="notification-empty"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No notifications found"
        />
      )}
    </div>
  );
};

export default AdminNotifications;
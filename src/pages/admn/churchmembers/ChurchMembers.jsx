import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Table,
  Tabs,
  Input,
  Button,
  Tag,
  Space,
  Tree,
  Card,
  Avatar,
  Dropdown,
  Menu,
  Typography,
} from "antd";
import {
  SearchOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  MoreOutlined,
  TeamOutlined,
  CalendarOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./ChurchMembers.css";

const { Title } = Typography;
const { TabPane } = Tabs;

function ChurchMembers() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  // Sample member data
  const membersData = [
    {
      key: "1",
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 234-567-8900",
      joinDate: "2020-01-15",
      ministry: ["Worship Team", "Youth"],
      status: "Active",
      address: "123 Church St, City",
      avatar: "JD",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "+1 234-567-8901",
      joinDate: "2021-03-20",
      ministry: ["Children Ministry"],
      status: "Active",
      address: "456 Faith Ave, City",
      avatar: "JS",
    },
    // Add more sample data as needed
  ];

  // Church structure data for the tree
  const treeData = [
    {
      title: "Church Leadership",
      key: "0-0",
      children: [
        {
          title: "Senior Pastor",
          key: "0-0-0",
          children: [
            { title: "Associate Pastors", key: "0-0-0-0" },
            { title: "Ministry Leaders", key: "0-0-0-1" },
          ],
        },
        {
          title: "Administrative Staff",
          key: "0-0-1",
          children: [
            { title: "Secretary", key: "0-0-1-0" },
            { title: "Finance Team", key: "0-0-1-1" },
          ],
        },
      ],
    },
    {
      title: "Ministries",
      key: "0-1",
      children: [
        {
          title: "Worship Ministry",
          key: "0-1-0",
          children: [
            { title: "Worship Team", key: "0-1-0-0" },
            { title: "Audio/Visual Team", key: "0-1-0-1" },
          ],
        },
        {
          title: "Education Ministry",
          key: "0-1-1",
          children: [
            { title: "Sunday School", key: "0-1-1-0" },
            { title: "Bible Study Groups", key: "0-1-1-1" },
          ],
        },
      ],
    },
  ];

  const columns = [
    {
      title: "Member",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <Avatar style={{ backgroundColor: "#1890ff" }}>
            {record.avatar}
          </Avatar>
          {text}
        </Space>
      ),
      filterable: true,
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      render: (_, record) => (
        <Space direction="vertical" size="small">
          <Space>
            <MailOutlined /> {record.email}
          </Space>
          <Space>
            <PhoneOutlined /> {record.phone}
          </Space>
        </Space>
      ),
    },
    {
      title: "Ministries",
      dataIndex: "ministry",
      key: "ministry",
      render: (ministries) => (
        <>
          {ministries.map((ministry) => (
            <Tag color="blue" key={ministry}>
              {ministry}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      key: "joinDate",
      render: (date) => (
        <Space>
          <CalendarOutlined />
          {date}
        </Space>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Dropdown overlay={actionMenu} trigger={["click"]}>
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  const actionMenu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => {
          navigate("/admnistration/member-details");
        }}
      >
        View Details
      </Menu.Item>
      <Menu.Item key="2">Edit Member</Menu.Item>
      <Menu.Item key="3">Update Status</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4" danger>
        Remove Member
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="church-members-component">
      <div className="members-header">
        <Title level={2}>Church Members</Title>
        <Button type="primary" icon={<UserOutlined />}>
          Add New Member
        </Button>
      </div>

      <Tabs defaultActiveKey="1" className="members-tabs">
        <TabPane
          tab={
            <span>
              <TeamOutlined />
              Members List
            </span>
          }
          key="1"
        >
          <Card className="members-card">
            <div className="table-toolbar">
              <Input
                placeholder="Search members..."
                prefix={<SearchOutlined />}
                onChange={(e) => setSearchText(e.target.value)}
                className="search-input"
              />
              <Space>
                <Button>Export</Button>
                <Button>Filter</Button>
              </Space>
            </div>
            <Table
              columns={columns}
              dataSource={membersData}
              className="members-table"
              pagination={{
                pageSize: 10,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} of ${total} members`,
              }}
            />
          </Card>
        </TabPane>

        <TabPane
          tab={
            <span>
              <HomeOutlined />
              Church Structure
            </span>
          }
          key="2"
        >
          <Card className="structure-card">
            <Tree
              showLine={{ showLeafIcon: false }}
              defaultExpandedKeys={["0-0"]}
              treeData={treeData}
              className="church-structure-tree"
            />
          </Card>
        </TabPane>
      </Tabs>
    </Layout>
  );
}

export default ChurchMembers;

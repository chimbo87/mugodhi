import React from "react";
import { Card, Button, Row, Col, Typography, Tag, Dropdown } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Secretary.css";

const { Title, Text } = Typography;

function Secretary() {
  const navigate = useNavigate();

  const secretaries = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@church.org",
      role: "Main Secretary",
      joinedDate: "2023-06-15",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.c@church.org",
      role: "Assistant Secretary",
      joinedDate: "2024-01-10",
    },
  ];

  const actionItems = [
    {
      key: "edit",
      label: "Edit",
      icon: <EditOutlined />,
    },
    {
      key: "delete",
      label: "Delete",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

  return (
    <div className="secretary-container">
      <div className="secretary-header">
        <div>
          <Title level={2}>Church Secretaries</Title>
          <Text type="secondary">
            Manage dashboard access and responsibilities
          </Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />}>
          Add Secretary
        </Button>
      </div>

      <Row gutter={[24, 24]} className="secretary-grid">
        {secretaries.map((secretary) => (
          <Col xs={24} sm={12} lg={8} key={secretary.id}>
            <Card
              className="secretary-card"
              extra={
                <Dropdown
                  menu={{ items: actionItems }}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  <Button type="text" icon={<MoreOutlined />} />
                </Dropdown>
              }
            >
              <div className="secretary-info">
                <Title level={4}>{secretary.name}</Title>
                <Text type="secondary">{secretary.email}</Text>
                <div className="secretary-role">
                  <Tag color="blue">{secretary.role}</Tag>
                </div>
                <div id="join-date-box">
                  <Text type="secondary" className="join-date">
                    Joined:{" "}
                    {new Date(secretary.joinedDate).toLocaleDateString()}
                  </Text>
                  <IoIosArrowRoundForward
                    style={{ fontSize: "22px", cursor: "pointer" }}
                    onClick={() => navigate("/admnistration/secretary-details")}
                  />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Secretary;

import React, { useState } from "react";
import { Button, Table, Input, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Memberbox.css";

function Memberstable() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => confirm()}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => confirm()}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters()}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toLowerCase().includes(value.toLowerCase()),
  });

  const dataSource = [
    {
      key: "1",
      firstName: "Mark",
      lastName: "Otto",
      location: "Hilbrow",
      phoneNumber: "071 234 5678",
    },
    {
      key: "2",
      firstName: "Jacob",
      lastName: "Thornton",
      location: "Turfontain",
      phoneNumber: "082 345 6789",
    },
    {
      key: "3",
      firstName: "Larry",
      lastName: "Doe",
      location: "Midrand",
      phoneNumber: "063 456 7890",
    },
    {
      key: "4",
      firstName: "Sarah",
      lastName: "Smith",
      location: "Sandton",
      phoneNumber: "084 567 8901",
    },
    {
      key: "5",
      firstName: "Michael",
      lastName: "Johnson",
      location: "Rosebank",
      phoneNumber: "072 678 9012",
    },
    {
      key: "6",
      firstName: "Emma",
      lastName: "Brown",
      location: "Braamfontein",
      phoneNumber: "083 789 0123",
    },
    {
      key: "7",
      firstName: "David",
      lastName: "Wilson",
      location: "Fourways",
      phoneNumber: "064 890 1234",
    },
    {
      key: "8",
      firstName: "Lisa",
      lastName: "Taylor",
      location: "Melville",
      phoneNumber: "085 901 2345",
    },
    {
      key: "9",
      firstName: "James",
      lastName: "Anderson",
      location: "Parkhurst",
      phoneNumber: "073 012 3456",
    },
    {
      key: "10",
      firstName: "Emily",
      lastName: "Thomas",
      location: "Observatory",
      phoneNumber: "082 123 4567",
    },
    {
      key: "11",
      firstName: "William",
      lastName: "Jackson",
      location: "Randburg",
      phoneNumber: "065 234 5678",
    },
    {
      key: "12",
      firstName: "Sophia",
      lastName: "White",
      location: "Roodepoort",
      phoneNumber: "084 345 6789",
    },
    {
      key: "13",
      firstName: "Oliver",
      lastName: "Harris",
      location: "Centurion",
      phoneNumber: "071 456 7890",
    },
    {
      key: "14",
      firstName: "Ava",
      lastName: "Martin",
      location: "Boksburg",
      phoneNumber: "082 567 8901",
    },
    {
      key: "15",
      firstName: "Lucas",
      lastName: "Thompson",
      location: "Benoni",
      phoneNumber: "063 678 9012",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      width: "5%",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      ...getColumnSearchProps("firstName"),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      ...getColumnSearchProps("lastName"),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      filters: [...new Set(dataSource.map((item) => item.location))].map(
        (location) => ({
          text: location,
          value: location,
        })
      ),
      onFilter: (value, record) => record.location === value,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button type="primary"  onClick={() => {
        navigate("/dashboard/member-details");
      }}>Details</Button>,
    },
  ];

  return (
    <>
      <div id="membersHeadTable">
        <small style={{ fontSize: "18px", fontWeight: "700" }}>
          Total: 203
        </small>
        <Button type="primary" size="large" onClick={showModal}>
          + Add Member
        </Button>
      </div>
      <div style={{ padding: "20px" }}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            total: dataSource.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `Total ${total} items`,
          }}
          bordered
          scroll={{ x: "max-content" }}
        />
      </div>

      <Modal
        title="Add New Member"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, odio
          perspiciatis veritatis odit temporibus, quidem quaerat, minus suscipit
          natus hic explicabo? Consequuntur architecto nihil laboriosam harum,
          quod sequi cum rerum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, odio
          perspiciatis veritatis odit temporibus, quidem quaerat, minus suscipit
          natus hic explicabo? Consequuntur architecto nihil laboriosam harum,
          quod sequi cum rerum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, odio
          perspiciatis veritatis odit temporibus, quidem quaerat, minus suscipit
          natus hic explicabo? Consequuntur architecto nihil laboriosam harum,
          quod sequi cum rerum?
        </p>
      </Modal>
    </>
  );
}

export default Memberstable;

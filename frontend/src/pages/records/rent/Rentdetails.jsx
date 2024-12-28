import React from "react";
import { Button, Divider, Table } from "antd";
import { RiDeleteBin4Line } from "react-icons/ri";
import { PrinterOutlined } from "@ant-design/icons";
import logo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

function Rentdetails() {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  const dataSource = [
    {
      key: "1",
      firstName: "Michael",
      lastName: "Anderson",
      phoneNumber: "071 234 5678",
      location: "Cape Town",
    },
    {
      key: "2",
      firstName: "Sarah",
      lastName: "Williams",
      phoneNumber: "082 345 6789",
      location: "Johannesburg",
    },
    { 
      key: "3", 
      firstName: "Robert", 
      lastName: "Chen", 
      phoneNumber: "063 456 7890",
      location: "Durban" 
    },
    { 
      key: "4", 
      firstName: "Emma", 
      lastName: "Garcia", 
      phoneNumber: "084 567 8901",
      location: "Pretoria" 
    },
    {
      key: "5",
      firstName: "David",
      lastName: "Kumar",
      phoneNumber: "072 678 9012",
      location: "Port Elizabeth",
    },
    {
      key: "6",
      firstName: "Lisa",
      lastName: "Patel",
      phoneNumber: "083 789 0123",
      location: "Bloemfontein",
    },
    {
      key: "7",
      firstName: "James",
      lastName: "Martinez",
      phoneNumber: "064 890 1234",
      location: "East London",
    },
    {
      key: "8",
      firstName: "Jessica",
      lastName: "Thompson",
      phoneNumber: "085 901 2345",
      location: "Kimberley",
    },
    { 
      key: "9", 
      firstName: "William", 
      lastName: "Lee", 
      phoneNumber: "073 012 3456",
      location: "Polokwane" 
    },
    {
      key: "10",
      firstName: "Emily",
      lastName: "Wilson",
      phoneNumber: "082 123 4567",
      location: "Nelspruit",
    },
    {
      key: "11",
      firstName: "Daniel",
      lastName: "Brown",
      phoneNumber: "065 234 5678",
      location: "Pietermaritzburg",
    },
    {
      key: "12",
      firstName: "Sofia",
      lastName: "Rodriguez",
      phoneNumber: "084 345 6789",
      location: "George",
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
      title: "FirstName",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      filterSearch: true,
      filters: dataSource.map((item) => ({
        text: item.firstName,
        value: item.firstName,
      })),
      onFilter: (value, record) => record.firstName.indexOf(value) === 0,
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      key: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      filterSearch: true,
      filters: dataSource.map((item) => ({
        text: item.lastName,
        value: item.lastName,
      })),
      onFilter: (value, record) => record.lastName.indexOf(value) === 0,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      sorter: (a, b) => a.location.localeCompare(b.location),
      filterSearch: true,
      filters: [...new Set(dataSource.map((item) => item.location))].map(
        (location) => ({
          text: location,
          value: location,
        })
      ),
      onFilter: (value, record) => record.location.indexOf(value) === 0,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <span>
          <Button
            size="small"
            style={{ marginRight: "8px", color: "#00a6ff" }}
            onClick={() => navigate("/dashboard/rent-reciept")}
          >
            Details
          </Button>
          <Button size="small">
            <RiDeleteBin4Line style={{ color: "red" }} />
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: '92vw', overflowX: 'hidden' }}>
      <div className="row">
        <div className="col-lg-12 col-md-4">
          <div id="rent-details-card" style={{ margin: '10px', padding: '15px' }}>
            <div>
              <p>November 2024</p>
              <p>Amount Raised: R4500</p>
              <p>Total Contributors: 17</p>
            </div>
            <div id="rent-details-logo">
              <img src={logo} alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
      <Divider>Contributors</Divider>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            total: dataSource.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `Total ${total} items`,
            responsive: true,
          }}
          bordered
          size="small"
          scroll={{ x: 'max-content' }}
          style={{ minWidth: '700px' }}
        />
      </div>
      <div style={{ textAlign: 'right', margin: '20px' }}>
        <Button 
          type="primary"
          icon={<PrinterOutlined />}
          onClick={handlePrint}
          style={{ backgroundColor: '#00a6ff' }}
        >
          Print
        </Button>
      </div>
    </div>
  );
}

export default Rentdetails;
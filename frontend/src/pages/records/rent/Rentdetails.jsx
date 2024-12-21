import React from "react";
import { Button, Divider, Table } from "antd";
import { RiDeleteBin4Line } from "react-icons/ri";
import logo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

function Rentdetails() {
  const navigate = useNavigate();
  // Define the data source with locations
  const dataSource = [
    {
      key: "1",
      firstName: "Michael",
      lastName: "Anderson",
      location: "Cape Town",
    },
    {
      key: "2",
      firstName: "Sarah",
      lastName: "Williams",
      location: "Johannesburg",
    },
    { key: "3", firstName: "Robert", lastName: "Chen", location: "Durban" },
    { key: "4", firstName: "Emma", lastName: "Garcia", location: "Pretoria" },
    {
      key: "5",
      firstName: "David",
      lastName: "Kumar",
      location: "Port Elizabeth",
    },
    {
      key: "6",
      firstName: "Lisa",
      lastName: "Patel",
      location: "Bloemfontein",
    },
    {
      key: "7",
      firstName: "James",
      lastName: "Martinez",
      location: "East London",
    },
    {
      key: "8",
      firstName: "Jessica",
      lastName: "Thompson",
      location: "Kimberley",
    },
    { key: "9", firstName: "William", lastName: "Lee", location: "Polokwane" },
    {
      key: "10",
      firstName: "Emily",
      lastName: "Wilson",
      location: "Nelspruit",
    },
    {
      key: "11",
      firstName: "Daniel",
      lastName: "Brown",
      location: "Pietermaritzburg",
    },
    {
      key: "12",
      firstName: "Sofia",
      lastName: "Rodriguez",
      location: "George",
    },
  ];

  // Define the columns
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
            onClick={() => navigate("/dashboard/rentreciept")}
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
    <div>
      <div className="row">
        <div className="col-lg-12 col-md-4">
          <div id="rent-details-card">
            <div>
              <p>November 2024</p>
              <p>Amount Raised: R4500</p>
              <p>Total Contributors: 17</p>
            </div>
            <div id="rent-details-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <Divider>Contributors</Divider>
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
        size="small"
      />
    </div>
  );
}

export default Rentdetails;

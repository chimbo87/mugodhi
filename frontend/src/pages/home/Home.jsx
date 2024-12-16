import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import userlogo from "../../assets/images/person.jpeg";
import { MdOutlineEventAvailable } from "react-icons/md";
import { HiOutlineChatAlt } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { Button, Flex, Progress, Badge } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

function Home() {
  const navigate = useNavigate();

  const lineChartData = [
    { name: "Jan 2023", Rent: 6000, Pledges: 4000, Offering: 8000 },
    { name: "Nov 2023", Rent: 4000, Pledges: 6000, Offering: 5000 },
    { name: "Dec 2023", Rent: 3000, Pledges: 8000, Offering: 4000 },
    { name: "Jan 2024", Rent: 6000, Pledges: 4000, Offering: 7000 },
    { name: "Feb 2024", Rent: 4000, Pledges: 7000, Offering: 6000 },
    { name: "Mar 2024", Rent: 5000, Pledges: 6000, Offering: 4000 },
  ];

  const pieChartData = [
    { name: "Men", value: 42 },
    { name: "Woman", value: 35 },
    { name: "Youths", value: 23 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <>
      <div id="home-page">
        <div id="home-page-head">
          <div id="home-page-headtext">
            <h5>Hello, Chimbo !</h5>
          </div>
          <div id="home-page-headuser">
            <div
              id="home-page-headiconbox"
              onClick={() => navigate("/dashboard/messaging")}
            >
              <Badge count={4}>
                <HiOutlineChatAlt  id="home-page-headicon" />
              </Badge>
            </div>
            <img
              src={userlogo}
              alt="user"
              onClick={() => navigate("/dashboard/profile")}
            />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="home-card">
              <div id="home-card-innerbox">
                <p>Members</p>
                <FaUsers id="home-card-innerboxicon" />
              </div>
              <div id="home-card-innerbox">
                <div id="home-innerbox-card">
                  <small>Total Members</small>
                  <p>270</p>
                </div>
                <div id="home-innerbox-card">
                  <small>Date</small>
                  <p>December 2024</p>
                </div>
              </div>
              <Button onClick={() => navigate("/dashboard/members")} type="primary">
                View more
              </Button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="home-card">
              <div id="home-card-innerbox">
                <p>Wedding Pledges</p>
            
                <TbReportMoney id="home-card-innerboxicon"/>
              </div>
              <div id="home-card-innerbox">
                <div id="home-innerbox-card">
                  <small>Total Pledges</small>
                  <p>20</p>
                </div>
                <div id="home-innerbox-card">
                  <small>Progress</small>
                 <p>
                 <Flex
                    vertical
                    gap="small"
                    style={{
                      width: 180,
                    }}
                  >
                    <Progress percent={30} size="large" />
                  </Flex>
                 </p>
                </div>
              </div>
              <Button type="primary">View more</Button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="home-card">
              <div id="home-card-innerbox">
                <p>Events</p>
                <MdOutlineEventAvailable id="home-card-innerboxicon" />
              </div>
              <div id="home-card-innerbox">
                <div id="home-innerbox-card">
                  <small>Total Events</small>
                  <p>108</p>
                </div>
                <div id="home-innerbox-card">
                  <small>Upcoming Event</small>
                  <p>2days 17hrs Left</p>
                </div>
              </div>
              <Button type="primary">View more</Button>
            </div>
          </div>
      
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-4">
          <div id="home-line-chart">
            <h6>Finances Distribution By Bar Chart</h6>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={lineChartData}>
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, 10000]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Rent"
                  fill="#8884d8"
                  strokeWidth={2}
                />
                <Bar
                  dataKey="Pledges"
                  fill="#82ca9d"
                  strokeWidth={2}
                />
                <Bar
                  dataKey="Offering"
                  fill="#FFBB28"
                  strokeWidth={2}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div id="home-pie-chart">
            <h6>Members Distribution By Pie Chart</h6>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  innerRadius={100}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {pieChartData.map((entry, index) => (
                <div
                  key={`legend-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: COLORS[index],
                      marginRight: "5px",
                    }}
                  />
                  <span>{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5>Latest Updates</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi
          eligendi sequi facere, eum perferendis, omnis optio doloribus tempora
          distinctio sint ducimus suscipit quaerat accusantium placeat impedit
          maiores fugit nulla.
        </p>
      </div>
    </>
  );
}

export default Home;
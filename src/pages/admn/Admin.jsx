import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GrBlog } from "react-icons/gr";
import logo from "../../assets/images/person.jpeg";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { GoGift } from "react-icons/go";
import { Badge } from "antd";
import "./Admin.css";
function Admin() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  // Handler to set active button
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Custom style for active button
  const getButtonStyle = (buttonName) => {
    return activeButton === buttonName
      ? { backgroundColor: "#1890ff", color: "white" }
      : {};
  };
  return (
    <div id="theAdmnPage">
      <div id="theAdmnPageSideBar">
        <div id="AdmnPageSideBarLinks">
          <div
            id="admnSideBarLogo"
            onClick={() => {
              navigate("/admnistration/profile");
            }}
          >
            <img src={logo} alt="logo" />
            <div>
              <small style={{ color: "antiquewhite", fontWeight: "700" }}>
                C Mhosira
              </small>
              <br></br>
              <small style={{ color: "white" }}>Managing Director</small>
            </div>
          </div>
          <div id="dashboardSideBarBtns">
            <div id="admnSideBarBtnsDiv">
              <button
                style={getButtonStyle("admnistration")}
                onClick={() => {
                  handleButtonClick("admnistration");
                  navigate("/admnistration");
                }}
              >
                <RiDashboardLine id="dashboardSideBarBtnsIcons" />
                Admnistration
              </button>
            </div>
            <div id="admnSideBarBtnsDiv">
              <button
                style={getButtonStyle("members")}
                onClick={() => {
                  handleButtonClick("members");
                  navigate("/admnistration/members");
                }}
              >
                <PiUsersThree id="dashboardSideBarBtnsIcons" />
               Church Members
              </button>
            </div>
            <div id="admnSideBarBtnsDiv">
              <button
                style={getButtonStyle("orders")}
                onClick={() => {
                  handleButtonClick("orders");
                  navigate("/admnistration/orders");
                }}
              >
                <GoGift id="dashboardSideBarBtnsIcons" />
             Secretaries
              </button>
            </div>

            <div id="admnSideBarBtnsDiv">
              <button
                style={getButtonStyle("financials")}
                onClick={() => {
                  handleButtonClick("financials");
                  navigate("/admnistration/financials");
                }}
              >
                <MdOutlineProductionQuantityLimits id="dashboardSideBarBtnsIcons" />
               Financial Records
              </button>
            </div>

            <div id="admnSideBarBtnsDiv">
              <button
                style={getButtonStyle("blogs")}
                onClick={() => {
                  handleButtonClick("blogs");
                  navigate("/admnistration/blogs");
                }}
              >
                {" "}
                <GrBlog id="dashboardSideBarBtnsIcons" />
           Church Events
              </button>
            </div>
            <div id="admnSideBarBtnsDiv">
              <button
                style={getButtonStyle("support")}
                onClick={() => {
                  handleButtonClick("support");
                  navigate("/admnistration/support");
                }}
              >
                <MdOutlineContactSupport id="dashboardSideBarBtnsIcons" />
               Ordinary Records
              </button>
            </div>
            <div id="admnSideBarBtnsDiv">
              <button
                style={getButtonStyle("notifications")}
                onClick={() => {
                  handleButtonClick("notifications");
                  navigate("/admnistration/notifications");
                }}
              >
                <RiNotification2Line id="dashboardSideBarBtnsIcons" />{" "}
                Notifications{" "}
                <span style={{ marginLeft: "50px" }}>
                  {" "}
                  <Badge count={4}></Badge>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div id="admn-logout-box">
          <button>Logout</button>
        </div>
      </div>
      <div id="dashBoardContent">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;

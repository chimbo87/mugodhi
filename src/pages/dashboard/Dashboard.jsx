import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Collapse } from "antd";
import { RxDashboard } from "react-icons/rx";
import { RiLogoutBoxLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiUsersThree } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Dashboard.css";
import Navbar from "../../components/header/Navbar";

function Dashboard() {
  const navigate = useNavigate();
  const { Panel } = Collapse;
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
    <>
      <div id="theDashboard">
        <div id="dashboardSideBar">
          <div id="dashboardSideBarLinks">
            <div id="dashboardSideBarLogo">
              <img src={logo} alt="logo" />
            </div>
            <div id="dashboardSideBarBtns">
              <div id="dashboardSideBarBtnsDiv">
                <button
                  style={getButtonStyle("overview")}
                  onClick={() => {
                    handleButtonClick("overview");
                    navigate("/dashboard");
                  }}
                >
                  <RxDashboard id="dashboardSideBarBtnsIcons" /> Overview
                </button>
              </div>
              <div id="dashboardSideBarBtnsDiv">
                <button
                  style={getButtonStyle("members")}
                  onClick={() => {
                    handleButtonClick("members");
                    navigate("/dashboard/members");
                  }}
                >
                  <PiUsersThree id="dashboardSideBarBtnsIcons" /> Members
                </button>
              </div>

              <div id="dashboardSideBarBtnsDiv">
                <button
                  style={getButtonStyle("events")}
                  onClick={() => {
                    handleButtonClick("events");
                    navigate("/dashboard/events");
                  }}
                >
                  <LuCalendarClock id="dashboardSideBarBtnsIcons" /> Events
                </button>
              </div>
              <div id="dashboardSideBarBtnsDiv">
                <button
                  style={getButtonStyle("payments")}
                  onClick={() => {
                    handleButtonClick("payments");
                    navigate("/dashboard/payments");
                  }}
                >
                  <LuCalendarClock id="dashboardSideBarBtnsIcons" />Financial Records
                </button>
              </div>

              <div id="dashboardSideBarBtnsDiv">
                <button
                
                  style={getButtonStyle("records")}
                  onClick={() => {
                    handleButtonClick("records");
                    navigate("/dashboard/records");
                  }}
                
                >
                
                  <HiOutlineClipboardDocumentList id="dashboardSideBarBtnsIcons" />
                  Church Records
                </button>
              </div>

              <div id="dashboardSideBarBtnsDiv">
                <button
                 
                  style={getButtonStyle("notifications")}
                  onClick={() => {
                    handleButtonClick("notifications");
                    navigate("/dashboard/notifications");
                  }}
                >
                  <FaRegUser id="dashboardSideBarBtnsIcons"/>Notifications
                </button>
              </div>
            </div>
          </div>
          <div id="logout-box">
            <button
              style={getButtonStyle("logout")}
              onClick={() => {
                handleButtonClick("logout");
                navigate("/");
              }}
            >
              <RiLogoutBoxLine /> Logout
            </button>
          </div>
        </div>
        <div id="dashBoardContent">
          <Outlet />
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default Dashboard;

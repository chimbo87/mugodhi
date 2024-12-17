import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Collapse } from "antd";
import { RxDashboard } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
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
      ? { backgroundColor: "#00a6ff", color: "white" }
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

              <div id="dashboardSideBarBtnsColpse">
                <Collapse ghost>
                  <Panel
                    header={
                      <button id="records-btn-colapse">
                        <span>Financial Records</span>
                      </button>
                    }
                    key="1"
                  >
                    <div className="church-records-buttons">
                      <button
                        className="nested-btn"
                        style={getButtonStyle("rentPayments")}
                        onClick={() => {
                          handleButtonClick("rentPayments");
                          navigate("/dashboard/rent");
                        }}
                      >
                        Rent Payments
                      </button>
                      <button
                        className="nested-btn"
                        style={getButtonStyle("offerings")}
                        onClick={() => {
                          handleButtonClick("offerings");
                          navigate("/dashboard/offerings");
                        }}
                      >
                        Offerings
                      </button>
                      <button
                        className="nested-btn"
                        style={getButtonStyle("pledges")}
                        onClick={() => {
                          handleButtonClick("pledges");
                          navigate("/dashboard/pledges");
                        }}
                      >
                        Pledges
                      </button>
                    </div>
                  </Panel>
                </Collapse>
              </div>
              {/* Similar modifications for other buttons... */}
              <div id="dashboardSideBarBtnsDiv">
                <button
                  style={getButtonStyle("reports")}
                  onClick={() => handleButtonClick("reports")}
                >
                  {/* <IoNotificationsOutline id="dashboardSideBarBtnsIcons" /> */}
                  <HiOutlineClipboardDocumentList id="dashboardSideBarBtnsIcons" />
                  Reports
                </button>
              </div>
              <div id="dashboardSideBarBtnsColpse">
                <Collapse ghost>
                  <Panel
                    header={
                      <button id="records-btn-colapse">
                        <span>Church Records</span>
                      </button>
                    }
                    key="1"
                  >
                    <div className="church-records-buttons">
                      <button
                        className="nested-btn"
                        style={getButtonStyle("prophecy")}
                        onClick={() => handleButtonClick("prophecy")}
                      >
                        Prophecy Records
                      </button>
                      <button
                        className="nested-btn"
                        style={getButtonStyle("displinary")}
                        onClick={() => handleButtonClick("displinary")}
                      >
                        Displinary Records
                      </button>
                      <button
                        className="nested-btn"
                        style={getButtonStyle("babtism")}
                        onClick={() => handleButtonClick("babtism")}
                      >
                        Babtism Records
                      </button>
                      <button
                        className="nested-btn"
                        style={getButtonStyle("meeting")}
                        onClick={() => handleButtonClick("meeting")}
                      >
                        Meeting Records
                      </button>
                    </div>
                  </Panel>
                </Collapse>
              </div>
              <div id="dashboardSideBarBtnsDiv">
                <button
                  style={getButtonStyle("profile")}
                  onClick={() => handleButtonClick("profile")}
                >
                  <FaRegUser id="dashboardSideBarBtnsIcons" /> Profile
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

import React from "react";
import { Outlet } from "react-router-dom";
import { Collapse, Avatar, Badge } from "antd";
import { RxDashboard } from "react-icons/rx";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LiaBibleSolid } from "react-icons/lia";
import { FaUsersLine } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import logo from "../../assets/images/logo.png";
import "./Dashboard.css";

function Dashboard() {
  const { Panel } = Collapse;

  return (
    <div id="theDashboard">
      <div id="dashboardSideBar">
        <div id="dashboardSideBarLinks">
          <div id="dashboardSideBarLogo">
            <img src={logo} alt="logo" />
          </div>
          <div id="dashboardSideBarBtns">
            <div id="dashboardSideBarBtnsDiv">
              <button>
                <RxDashboard id="dashboardSideBarBtnsIcons" /> Overview
              </button>
            </div>
            <div id="dashboardSideBarBtnsDiv">
              <button>
                <PiUsersThree id="dashboardSideBarBtnsIcons" /> Members
              </button>
            </div>

            <div id="dashboardSideBarBtnsDiv">
              <button>
                <LuCalendarClock id="dashboardSideBarBtnsIcons" /> Events
              </button>
            </div>

            <div id="dashboardSideBarBtnsCol">
              <Collapse ghost>
                <Panel
                  header={
                    <button>
                      <span>
                        <b>Financial Records</b>
                      </span>
                    </button>
                  }
                  key="1"
                >
                  <div className="church-records-buttons">
                    <button className="nested-btn">Rent Payments</button>
                    <button className="nested-btn">Offerings</button>
                    <button className="nested-btn">Pledges</button>
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div id="dashboardSideBarBtnsCol">
              <Collapse ghost>
                <Panel
                  header={
                    <button>
                      <span>
                        <b>Church Records</b>
                      </span>
                    </button>
                  }
                  key="1"
                >
                  <div className="church-records-buttons">
                    <button className="nested-btn">
                      {" "}
                      <MdOutlineRemoveRedEye id="dashboardSideBarBtnsIcons" />{" "}
                      Prophecy Records
                    </button>
                    <button className="nested-btn">
                      <GoLaw id="dashboardSideBarBtnsIcons" />
                      Displinary Records
                    </button>
                    <button className="nested-btn">
                      <LiaBibleSolid id="dashboardSideBarBtnsIcons" />
                      Babtism Records
                    </button>
                    <button className="nested-btn">
                      <FaUsersLine id="dashboardSideBarBtnsIcons" /> Meetings
                      Records
                    </button>
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div id="dashboardSideBarBtnsDiv">
              <button>
              <Badge count={15}><IoNotificationsOutline  id="dashboardSideBarBtnsIcons" />{" "}</Badge>
                Notifications
              </button>
            </div>
            <div id="dashboardSideBarBtnsDiv">
              <button>
                <FaRegUser id="dashboardSideBarBtnsIcons" /> Profile
              </button>
            </div>
          </div>
        </div>
        <div>
          <button>Logout</button>
        </div>
      </div>
      <div id="dashBoardContent">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;

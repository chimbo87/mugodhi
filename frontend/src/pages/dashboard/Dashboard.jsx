import React from "react";
import { Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { PiUsersThree } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import logo from "../../assets/images/logo.png";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div id="theDashboard">
      <div id="dashboardSideBar">
        <div id="dashboardSideBarLinks">
          <div id="dashboardSideBarLogo">
          <img src={logo} alt="logo" />
          </div>
          <div id="dashboardSideBarBtns">
            <button><RxDashboard /> Overview</button>
            <button><PiUsersThree /> Members</button>
            <button> <MdOutlinePayments /> Payments</button>
            <button>Events</button>
            <button>Prophecies</button>
            <button>Profile</button>
            <button>Settings</button>
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

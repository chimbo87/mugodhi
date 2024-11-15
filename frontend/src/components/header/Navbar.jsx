import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { TiMessages } from "react-icons/ti";
import { PiBroadcastFill } from "react-icons/pi";
import { IoAnalyticsSharp, IoNotificationsOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { LuTruck } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
// import logo from "../../assets/icons/tracking.png";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { Drawer, Badge, message } from "antd";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Overview");
//   const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  //   const [loading, setLoading] = useState(true);

  // Helper function to handle navigation and drawer closing
  const handleDrawerClick = (path) => {
    setOpen(false); // Close the drawer
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="navbar-container">
      <div className="navbar-container-top">
        <div className="logo">
          {/* <img src={logo} alt="logo" /> */}
          <h6>VehicleTracking</h6>
        </div>

        <div className="navbar-card-links">
          <div
            className={`navbar-links ${
              activeLink === "Overview" ? "active" : ""
            }`}
          >
            <GoHome className="navbar-links-icon" />
            <a href="#">Overview</a>
          </div>
          <div
            className={`navbar-links ${
              activeLink === "Messages" ? "active" : ""
            }`}
          >
            <Badge count={99}>
              <TiMessages className="navbar-links-icon" />
            </Badge>
            <a href="#">Messages</a>
          </div>
          <div
            className={`navbar-links ${
              activeLink === "Schedule" ? "active" : ""
            }`}
          >
            <AiOutlineSchedule className="navbar-links-icon" />
            <a href="#">Schedule</a>
          </div>
          <div
            className={`navbar-links ${
              activeLink === "Notifications" ? "active" : ""
            }`}
          >
            <Badge count={99}>
              <IoNotificationsOutline className="navbar-links-icon" />
            </Badge>
            <a href="#">Notifications</a>
          </div>
        </div>

        <div className="navbar-user-details">
          <div className="navbar-user-img">
            {/* <img src={usericon} alt="user" /> */}
          </div>
          <div className="navbar-user-info">
            <small className="navbar-user-name">
              {/* {profile?.name || "User Name"} */}
            </small>
            <small className="navbar-user-title">Technical Officer</small>
          </div>
          <div className="navbar-user-menu">
            <RiMenu3Fill className="navbar-user-menuicon" />
          </div>
        </div>
      </div>

      <div className="navbar-container-bottom">
        <div className="navbar-card-bottom">
          <div
            className={`navbar-links ${
              activeLink === "Overview" ? "active" : ""
            }`}
            // onClick={() => handleLinkClick("Overview", "/dashboard/overview")}
          >
            <GoHome className="navbar-links-icon" />
            <a href="#">Overview</a>
          </div>
          <div
            className={`navbar-links ${
              activeLink === "Messages" ? "active" : ""
            }`}
          >
            <Badge count={99}>
              <TiMessages className="navbar-links-icon" />
            </Badge>
            <a href="#">Messages</a>
          </div>
          <div
            className={`navbar-links ${
              activeLink === "Schedule" ? "active" : ""
            }`}
          >
            <AiOutlineSchedule className="navbar-links-icon" />
            <a href="#">Schedule</a>
          </div>
          <div
            className={`navbar-links ${
              activeLink === "Notifications" ? "active" : ""
            }`}
          >
            <Badge count={99}>
              <IoNotificationsOutline className="navbar-links-icon" />
            </Badge>
            <a href="#">Notifications</a>
          </div>
        </div>
      </div>

      <Drawer
        closable
        destroyOnClose
        // title={<p>{profile?.name || "User Name"}</p>}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="drawer-wrap">
          <div className="drawer-wrap-top">
            <button onClick={() => handleDrawerClick("/dashboard/profile")}>
              <FaUser className="drawer-wrap-icon" /> Profile
            </button>
            <button onClick={() => handleDrawerClick("/dashboard/vehicles")}>
              <LuTruck className="drawer-wrap-icon" /> Vehicles
            </button>
            <button onClick={() => handleDrawerClick("/dashboard/reports")}>
              <TbReportAnalytics className="drawer-wrap-icon" /> Reports
            </button>
            <button onClick={() => handleDrawerClick("/dashboard/trips")}>
              <PiBroadcastFill className="drawer-wrap-icon" /> Trips
            </button>
            <button onClick={() => handleDrawerClick("/dashboard/analytics")}>
              <IoAnalyticsSharp className="drawer-wrap-icon" /> Analytics
            </button>
            <button onClick={() => handleDrawerClick("/dashboard/settings")}>
              <IoMdSettings className="drawer-wrap-icon" /> Settings
            </button>
          </div>
          <div className="drawer-wrap-top">
            <button >
              <RiLogoutBoxLine className="drawer-wrap-icon" /> Logout
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;

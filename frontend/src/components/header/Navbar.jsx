import React from "react";
import { GoHome } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuCalendarClock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { PiUsersThree } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Avatar, Badge } from "antd";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div id="navbar-page">
      <div id="navbar-page-box">
        <div id="navbar-page-icon">
          <Badge dot>
            <GoHome id="navbaricon" onClick={() => navigate("/dashboard")} />
          </Badge>
        </div>
        <div
          id="navbar-page-icon"
          onClick={() => navigate("/dashboard/payments")}
        >
          <TbMoneybag id="navbaricon" />
        </div>
        <div
          id="navbar-page-icon"
          onClick={() => navigate("/dashboard/events")}
        >
          <LuCalendarClock id="navbaricon" />
        </div>
        <div id="navbar-page-icon">
          <PiUsersThree
            id="navbaricon"
            onClick={() => navigate("/dashboard/members")}
          />
        </div>
        <div id="navbar-page-icon" onClick={() => navigate("/dashboard/records")}>
          <HiOutlineClipboardDocumentList id="navbaricon" />
        </div>
        <div id="navbar-page-icon"   onClick={() => navigate("/dashboard/notifications")}>
          <Badge count={12}>
            {" "}
            <IoNotificationsOutline id="navbaricon" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

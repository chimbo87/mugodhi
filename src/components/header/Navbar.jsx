import React, { useState, useEffect } from "react";
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
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // Hide when scrolling down
    } else {
      setShow(true); // Show when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div id="navbar-page" style={{ 
      transform: show ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.3s ease-in-out'
    }}>
      <div id="navbar-page-box">
        <div id="navbar-page-icon">
          <Badge dot>
            <GoHome id="navbaricon" onClick={() => navigate("/dashboard")} />
          </Badge>
          <small>Home</small>
        </div>
        <div
          id="navbar-page-icon"
          onClick={() => navigate("/dashboard/payments")}
        >
          <TbMoneybag id="navbaricon" />
          <small>Finance</small>
        </div>
        <div
          id="navbar-page-icon"
          onClick={() => navigate("/dashboard/events")}
        >
          <LuCalendarClock id="navbaricon" />
          <small>Events</small>
        </div>
        <div id="navbar-page-icon">
          <PiUsersThree
            id="navbaricon"
            onClick={() => navigate("/dashboard/members")}
          />
          <small>Members</small>
        </div>
        <div id="navbar-page-icon" onClick={() => navigate("/dashboard/records")}>
          <HiOutlineClipboardDocumentList id="navbaricon" />
          <small>Records</small>
        </div>
        <div id="navbar-page-icon" onClick={() => navigate("/dashboard/notifications")}>
          <Badge count={12}>
            {" "}
            <IoNotificationsOutline id="navbaricon" />
          </Badge>
          <small>Notifications</small>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
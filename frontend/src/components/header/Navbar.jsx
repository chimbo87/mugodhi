import React from "react";
import { GoHome } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { PiUsersThree } from "react-icons/pi";
import { GoPlusCircle } from "react-icons/go";
import { Avatar, Badge } from "antd";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div id="navbar-page">
      <div id="navbar-page-box">
        <div id="navbar-page-icon">
        <Badge dot>
            <GoHome id="navbaricon" onClick={() => navigate("/dashboard")}/>
          </Badge>
        </div>
        <div id="navbar-page-icon">
          <TbMoneybag id="navbaricon" />
        </div>
        <div id="navbar-page-icon">
          <GoPlusCircle id="navbariconcenter" />
        </div>
        <div id="navbar-page-icon">
          <PiUsersThree id="navbaricon" onClick={() => navigate("/dashboard/members")}/>
        </div>
        <div id="navbar-page-icon">
          <HiOutlineClipboardDocumentList id="navbaricon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

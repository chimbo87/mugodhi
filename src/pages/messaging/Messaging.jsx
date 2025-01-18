import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Messaging.css";
import Chatbox from "./Chatbox";

function Messaging() {
  const navigate = useNavigate();
  return (
    <>
      <div id="messages-large">
        <div class="row">
          <div class="col-lg-8 col-md-4">
            <div id="message-box">
              <Chatbox />
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <h6>Chats</h6>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="messages-mobile">
        <div class="row">
          <div class="col-lg-12 col-md-4">
            <h6>Chats B</h6>
            <div id="chat-box-card" onClick={() => navigate("/dashboard/chats")}>
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
            <div id="chat-box-card">
              <FaUserCircle id="chat-box-icon" />
              <div id="chat-box-wrap">
                <small>John Doe</small>
                <small>How are you doing</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messaging;

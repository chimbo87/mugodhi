import React from "react";
import userlogo from "../../assets/images/person.jpeg";
import { LuSearch } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import "./Members.css";

function Members() {
  return (
    <div>
      <div id="members-head">
        <small
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GoArrowLeft /> Members
        </small>
        <div id="members-head-search">
          <div>
            {" "}
            <LuSearch />
          </div>
          <div>
            {" "}
            <small>Total: 207</small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div id="member-usercard-box">
            <div id="member-usercard">
              <img
                src={"https://avatar.iran.liara.run/public/girl"}
                alt="Profile"
              />
              <div id="member-usercard-details">
                <small>
                  <b>John Doe</b>
                </small>
                <small>Hilbrow</small>
                <small>+276800000000</small>
              </div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="member-usercard-box">
            <div id="member-usercard">
            <img
                src={"https://avatar.iran.liara.run/public/boy"}
                alt="Profile"
              />
              <div id="member-usercard-details">
                <small>Archy Chimbo</small>
                <small>Sandton</small>
                <small>+276800000000</small>
              </div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="member-usercard-box">
            <div id="member-usercard">
              <img
                src={"https://avatar.iran.liara.run/public/boy"}
                alt="Profile"
              />
              <div id="member-usercard-details">
                <small>James Smith</small>
                <small>Bramfontain</small>
                <small>+276800000000</small>
              </div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="member-usercard-box">
            <div id="member-usercard">
            <img
                src={"https://avatar.iran.liara.run/public/girl"}
                alt="Profile"
              />
              <div id="member-usercard-details">
                <small>Trish Doe</small>
                <small>+276800000000</small>
              </div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="member-usercard-box">
            <div id="member-usercard">
            <img
                src={"https://avatar.iran.liara.run/public/boy"}
                alt="Profile"
              />
              <div id="member-usercard-details">
                <small>Trish Doe</small>
                <small>+276800000000</small>
              </div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="member-usercard-box">
            <div id="member-usercard">
            <img
                src={"https://avatar.iran.liara.run/public/girl"}
                alt="Profile"
              />
              <div id="member-usercard-details">
                <small>Trish Doe</small>
                <small>+276800000000</small>
              </div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="member-usercard-box">
            <div id="member-usercard">
            <img
                src={"https://avatar.iran.liara.run/public/girl"}
                alt="Profile"
              />
              <div id="member-usercard-details">
                <small>Trish Doe</small>
                <small>+276800000000</small>
              </div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="member-usercard-box">
            <div id="member-usercard">
            <img
                src={"https://avatar.iran.liara.run/public/boy"}
                alt="Profile"
              />
              <div id="member-usercard-details">
                <small>Trish Doe</small>
                <small>+276800000000</small>
              </div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="member-usercard-box">
            <div id="member-usercard">
            <img
                src={"https://avatar.iran.liara.run/public/girl"}
                alt="Profile"
              />
              <div id="member-usercard-details">
                <small>Trish Doe</small>
                <small>+276800000000</small>
              </div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;

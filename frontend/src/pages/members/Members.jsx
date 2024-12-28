import React, { useState } from "react";
import Memberstable from "../../components/membersbox/Memberstable";
import { LuSearch } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Members.css";
import { Button, Modal } from "antd";

function Members() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div id="membersTable">
        <Memberstable />
      </div>

      <div id="membersmobile">
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
            <div
              id="member-usercard-box"
              onClick={() => {
                navigate("/dashboard/member-details");
              }}
            >
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
            <div
              id="member-usercard-box"
              onClick={() => {
                navigate("/dashboard/member-details");
              }}
            >
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

              <div
                onClick={() => {
                  navigate("/dashboard/member-details");
                }}
              >
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div
              id="member-usercard-box"
              onClick={() => {
                navigate("/dashboard/member-details");
              }}
            >
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
      <div id="addMemberBtn">
        <div>
          {" "}
          <Button type="primary" onClick={showModal}>
            + Add Member
          </Button>
        </div>
      </div>

      <Modal
        title="Add New Member"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, odio
          perspiciatis veritatis odit temporibus, quidem quaerat, minus suscipit
          natus hic explicabo? Consequuntur architecto nihil laboriosam harum,
          quod sequi cum rerum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, odio
          perspiciatis veritatis odit temporibus, quidem quaerat, minus suscipit
          natus hic explicabo? Consequuntur architecto nihil laboriosam harum,
          quod sequi cum rerum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, odio
          perspiciatis veritatis odit temporibus, quidem quaerat, minus suscipit
          natus hic explicabo? Consequuntur architecto nihil laboriosam harum,
          quod sequi cum rerum?
        </p>
      </Modal>
    </>
  );
}

export default Members;

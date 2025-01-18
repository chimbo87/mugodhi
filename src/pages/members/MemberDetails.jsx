import React from "react";
import { Divider } from "antd";
import { RiUser3Fill } from "react-icons/ri";

function MemberDetails() {
  return (
    <div id="memberDetailsContainer">
      <div id="memberDetailsBox">
        <div className="row">
          <div class="col-lg-12 col-md-4">
            <div id="memberDetailsBox-Head">
              <RiUser3Fill id="memberDetailsBox-Icon" />
              <h6>AFC Jo-burg Branch Membership Details</h6>
            </div>
          </div>
          <div class="col-lg-12 col-md-4">
            <div id="memberDetailsCard">
              <div>
                <p><b>Name</b></p>
              </div>
              <div id="memberDetailsCard-name">
                <p>John</p>
              </div>
            </div>
            <div id="memberDetailsCard">
              <div>
                <p><b>Surname</b></p>
              </div>
              <div id="memberDetailsCard-name">
                <p>Smith</p>
              </div>
            </div>
            <div id="memberDetailsCard">
              <div>
                <p><b>Member Status</b></p>
              </div>
              <div id="memberDetailsCard-name">
                <p>Men</p>
              </div>
            </div>
            <div id="memberDetailsCard">
              <div>
                <p><b>Phone Number</b></p>
              </div>
              <div id="memberDetailsCard-name">
                <p>+27000000000</p>
              </div>
            </div>
            <div id="memberDetailsCard">
              <div>
                <p><b>Member Address</b></p>
              </div>
              <div id="memberDetailsCard-name">
                <p>
                  123 Mars Street, Jupiter
                  <br />
                  Hilbrow Johannesburg
                  <br />
                  South Africa
                </p>
              </div>
            </div>
          </div>
          <Divider>Member Summary</Divider>
          <div class="col-lg-12 col-md-4">
            <div id="memberDetailSummary">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quam fugiat minima tempora? Alias praesentium error
                magnam incidunt ipsum nulla eveniet ad quibusdam? Voluptas
                maiores, incidunt tempora praesentium iusto corrupti. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                quam fugiat minima tempora? Alias praesentium error magnam
                incidunt ipsum nulla eveniet ad quibusdam? Voluptas maiores,
                incidunt tempora praesentium iusto corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default MemberDetails;

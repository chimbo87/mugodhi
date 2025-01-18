import React from "react";
import { MdEventAvailable } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { LuAlarmClock } from "react-icons/lu";
import "./Events.css";
import { Button } from "antd";

function Events() {
  return (
    <div>
      <div id="event-header">
        <small>
          <BsArrowLeft /> Events
        </small>
        <Button>+ Add Event</Button>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-4">
          <div id="event-card">
            <div id="event-card-header">
              <h6>Wedding</h6>
              <MdEventAvailable id="event-card-headericon" />
            </div>
            <div id="event-card-summary">
              <small>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                aspernatur dolor rem accusantium cupiditate dignissimos
                voluptas! Ab sunt officia voluptate, consequuntur similique
                aperiam, beatae earum nemo fugit incidunt magnam cumque?
              </small>
            </div>
            <small>
              <SlLocationPin /> Jo-burg Branch
            </small>
            <div id="event-card-texts">
              <small>
                <LuAlarmClock /> In Progress
              </small>
              <Button>View More</Button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-4">
          <div id="event-card">
            <div id="event-card-header">
              <h6>All Night Prayer</h6>
              <MdEventAvailable id="event-card-headericon" />
            </div>
            <div id="event-card-summary">
              <small>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                aspernatur dolor rem accusantium cupiditate dignissimos
                voluptas! Ab sunt officia voluptate, consequuntur similique
                aperiam, beatae earum nemo fugit incidunt magnam cumque?
              </small>
            </div>
            <small>
              <SlLocationPin /> Jo-burg Branch
            </small>
            <div id="event-card-texts">
              <small>
                <LuAlarmClock /> 3days 20Hours Left
              </small>
              <Button>View More</Button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-4">
          <div id="event-card">
            <div id="event-card-header">
              <h6>Big Sunday</h6>
              <MdEventAvailable id="event-card-headericon" />
            </div>
            <div id="event-card-summary">
              <small>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                aspernatur dolor rem accusantium cupiditate dignissimos
                voluptas! Ab sunt officia voluptate, consequuntur similique
                aperiam, beatae earum nemo fugit incidunt magnam cumque?
              </small>
            </div>
            <small>
              <SlLocationPin /> Soweto
            </small>
            <div id="event-card-texts">
              <small>
                <LuAlarmClock /> Completed
              </small>
              <Button>View More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;

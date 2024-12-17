import React from "react";
import "./Rent.css";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Tooltip } from "antd";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { Button } from "antd";

function Rent() {
  return (
    <div>
      <div class="row">
        <div class="col-lg-6 col-md-4">
          <div id="rent-card-wrap">
            <div id="rent-card-head">
              <h6>November 2024</h6>
              <h6>
                <FaMoneyCheckAlt />
              </h6>
            </div>
            <div id="rent-card-middle">
              <p>R3400</p>
              <p id="rent-card-middle-percent">
                <TiArrowSortedDown /> 20%
              </p>
            </div>
            <div id="rent-card-bottom">
              <div>
                <Avatar.Group>
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  <a href="https://ant.design">
                    <Avatar
                      style={{
                        backgroundColor: "#f56a00",
                      }}
                    >
                      K
                    </Avatar>
                  </a>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{
                        backgroundColor: "#87d068",
                      }}
                      icon={<UserOutlined />}
                    />
                  </Tooltip>
                  <Avatar
                    style={{
                      backgroundColor: "#1677ff",
                    }}
                    icon={<AntDesignOutlined />}
                  />
                </Avatar.Group>
              </div>
              <div>
                <Button>View more</Button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-4">
          <div id="rent-card-wrap">
            <div id="rent-card-head">
              <h6>October 2024</h6>
              <h6>
                <FaMoneyCheckAlt />
              </h6>
            </div>
            <div id="rent-card-middle">
              <p>R8400</p>
              <p id="rent-card-middle-percentup">
                <TiArrowSortedUp /> 6%
              </p>
            </div>
            <div id="rent-card-bottom">
              <div>
                <Avatar.Group>
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  <a href="https://ant.design">
                    <Avatar
                      style={{
                        backgroundColor: "#f56a00",
                      }}
                    >
                      K
                    </Avatar>
                  </a>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{
                        backgroundColor: "#87d068",
                      }}
                      icon={<UserOutlined />}
                    />
                  </Tooltip>
                  <Avatar
                    style={{
                      backgroundColor: "#1677ff",
                    }}
                    icon={<AntDesignOutlined />}
                  />
                </Avatar.Group>
              </div>
              <div>
                <Button>View more</Button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-4">
          <div id="rent-card-wrap">
            <div id="rent-card-head">
              <h6>September 2024</h6>
              <h6>
                <FaMoneyCheckAlt />
              </h6>
            </div>
            <div id="rent-card-middle">
              <p>R1200</p>
              <p id="rent-card-middle-percentup">
                <TiArrowSortedUp /> 12%
              </p>
            </div>
            <div id="rent-card-bottom">
              <div>
                <Avatar.Group>
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  <a href="https://ant.design">
                    <Avatar
                      style={{
                        backgroundColor: "#f56a00",
                      }}
                    >
                      K
                    </Avatar>
                  </a>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{
                        backgroundColor: "#87d068",
                      }}
                      icon={<UserOutlined />}
                    />
                  </Tooltip>
                  <Avatar
                      style={{
                        backgroundColor: "#8b8888",
                      }}
                      icon={<UserOutlined />}
                    />
                </Avatar.Group>
              </div>
              <div>
                <Button>View more</Button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-4">
          <div id="rent-card-wrap">
            <div id="rent-card-head">
              <h6>August 2024</h6>
              <h6>
                <FaMoneyCheckAlt />
              </h6>
            </div>
            <div id="rent-card-middle">
              <p>R5600</p>
              <p id="rent-card-middle-percent">
                <TiArrowSortedDown /> 30%
              </p>
            </div>
            <div id="rent-card-bottom">
              <div>
                <Avatar.Group>
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />

                  <Avatar
                    style={{
                      backgroundColor: "#f56a00",
                    }}
                  >
                    K
                  </Avatar>

                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{
                        backgroundColor: "#8b8888",
                      }}
                      icon={<UserOutlined />}
                    />
                  </Tooltip>
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                </Avatar.Group>
              </div>
              <div>
                <Button>View more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;

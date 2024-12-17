import React from "react";
import { TbReportMoney } from "react-icons/tb";
import { Button, Flex, Progress } from "antd";
import "./Pledges.css";

function Pledges() {
  return (
    <div>
      <div class="row">
        <div class="col-lg-6 col-md-4">
          <div id="pledge-card">
            <div id="pledge-card-innerbox">
              <p>Wedding Pledges</p>

              <TbReportMoney id="pledge-card-innerboxicon" />
            </div>
            <div id="home-card-innerbox">
              <div id="home-innerbox-card">
                <small>Total Pledges</small>
                <p>20</p>
              </div>
              <div id="pledge-innerbox-card">
                <small>Progress</small>
                <p>
                  <Flex
                    vertical
                    gap="small"
                    style={{
                      width: 180,
                    }}
                  >
                    <Progress percent={30} size="large" />
                  </Flex>
                </p>
              </div>
            </div>
            <div id="home-card-innerbox">
              <div id="home-innerbox-card">
                <small>Raised</small>
                <p>R4500</p>
              </div>
              <div id="pledge-innerbox-card">
                <Button>View more</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-4">
          <div id="pledge-card">
            <div id="pledge-card-innerbox">
              <p>All Night Pledges</p>

              <TbReportMoney id="pledge-card-innerboxicon" />
            </div>
            <div id="home-card-innerbox">
              <div id="home-innerbox-card">
                <small>Total Pledges</small>
                <p>70</p>
              </div>
              <div id="pledge-innerbox-card">
                <small>Progress</small>
                <h6 id="pledge-completed">
                  Completed
                </h6>
              </div>
            </div>
            <div id="home-card-innerbox">
              <div id="home-innerbox-card">
                <small>Raised</small>
                <p>R12000</p>
              </div>
              <div id="pledge-innerbox-card">
                <Button>View more</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-4">
          <div id="pledge-card">
            <div id="pledge-card-innerbox">
              <p>All Night Pledges</p>

              <TbReportMoney id="pledge-card-innerboxicon" />
            </div>
            <div id="home-card-innerbox">
              <div id="home-innerbox-card">
                <small>Total Pledges</small>
                <p>70</p>
              </div>
              <div id="pledge-innerbox-card">
                <small>Progress</small>
                <h6 id="pledge-completed">
                  Completed
                </h6>
              </div>
            </div>
            <div id="home-card-innerbox">
              <div id="home-innerbox-card">
                <small>Raised</small>
                <p>R12000</p>
              </div>
              <div id="pledge-innerbox-card">
                <Button>View more</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-4">
          <div id="pledge-card">
            <div id="pledge-card-innerbox">
              <p>All Night Pledges</p>

              <TbReportMoney id="pledge-card-innerboxicon" />
            </div>
            <div id="home-card-innerbox">
              <div id="home-innerbox-card">
                <small>Total Pledges</small>
                <p>70</p>
              </div>
              <div id="pledge-innerbox-card">
                <small>Progress</small>
                <h6 id="pledge-completed">
                  Completed
                </h6>
              </div>
            </div>
            <div id="home-card-innerbox">
              <div id="home-innerbox-card">
                <small>Raised</small>
                <p>R12000</p>
              </div>
              <div id="pledge-innerbox-card">
                <Button>View more</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-4">
          <div id="pledge-card">
            <div id="pledge-card-innerbox">
              <p>All Night Pledges</p>

              <TbReportMoney id="pledge-card-innerboxicon" />
            </div>
            <div id="home-card-innerbox">
              <div id="home-innerbox-card">
                <small>Total Pledges</small>
                <p>70</p>
              </div>
              <div id="pledge-innerbox-card">
                <small>Progress</small>
                <h6 id="pledge-completed">
                  Completed
                </h6>
              </div>
            </div>
            <div id="home-card-innerbox">
              <div id="home-innerbox-card">
                <small>Raised</small>
                <p>R12000</p>
              </div>
              <div id="pledge-innerbox-card">
                <Button>View more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pledges;

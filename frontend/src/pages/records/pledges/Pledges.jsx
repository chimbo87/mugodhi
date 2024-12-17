import React from "react";
import { TbReportMoney } from "react-icons/tb";
import { Button, Flex, Progress} from "antd";

function Pledges() {
  return (
    <div>
   <div class="row">
    <div class="col-lg-6 col-md-4">
    <div id="home-card">
              <div id="home-card-innerbox">
                <p>Wedding Pledges</p>
            
                <TbReportMoney id="home-card-innerboxicon"/>
              </div>
              <div id="home-card-innerbox">
                <div id="home-innerbox-card">
                  <small>Total Pledges</small>
                  <p>20</p>
                </div>
                <div id="home-innerbox-card">
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
              <Button>View more</Button>
            </div>
    </div>
   </div>
    </div>
  );
}

export default Pledges;

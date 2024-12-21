import React from "react";
import { Button, Tabs } from "antd";
import './Records.css';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label:  (<Button>Baptims</Button>),
    children: (
      <div>
        <p>Babtism Records</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          temporibus tempora ducimus perferendis ad recusandae voluptatem!
          Expedita eligendi animi ipsum facilis amet aperiam veniam, fugiat
          facere, at eius veritatis hic?
        </p>
      </div>
    ),
  },
  {
    key: "2",
    label:  (<Button>Prophecy</Button>),
    children: (
      <div>
        <p>Prophecy Records</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          eius, et a accusantium perspiciatis possimus aliquam provident? Alias
          libero, praesentium fuga vitae, possimus sequi labore consectetur
          voluptas impedit perspiciatis optio?
        </p>
      </div>
    ),
  },
  {
    key: "3",
    label: (<Button>Meetings</Button>),
    children: (
      <div>
        <p>Meetings Records</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui
          nulla minima assumenda ab labore voluptatem alias adipisci dolores
          asperiores impedit odit dolorem placeat, officia suscipit aut expedita
          amet nostrum?
        </p>
      </div>
    ),
  },

];
function Records() {
  return (
    <div id="records-btns">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

export default Records;

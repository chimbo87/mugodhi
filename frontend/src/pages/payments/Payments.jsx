import React from "react";
import { Button, Segmented, Tabs } from "antd";
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
import Rent from "../records/rent/Rent";
import Pledges from "../records/pledges/Pledges";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: (
      <div>
        <Button type="primary">Rent</Button>
      </div>
    ),
    children: (
      <div>
    <Rent/>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div>
        <Button>Pledges</Button>
      </div>
    ),
    children: (
      <div>
       <Pledges/>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div>
        <Button>Offerings</Button>
      </div>
    ),
    children: (
      <div>
        <h6>Offerings</h6>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illum
          asperiores, incidunt dolorem natus ipsa ut voluptates delectus quae
          minima, eveniet sit? Error unde recusandae quod, perspiciatis adipisci
          fugiat consequatur? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nulla, illum asperiores, incidunt dolorem natus ipsa
          ut voluptates delectus quae minima, eveniet sit? Error unde recusandae
          quod, perspiciatis adipisci fugiat consequatur?
        </p>
      </div>
    ),
  },
];

function Payments() {
  const [alignValue, setAlignValue] = React.useState("center");
  return (
    <div>
      <small>Finances</small>

      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        indicator={{
          size: (origin) => origin - 20,
          align: alignValue,
        }}
      />
    </div>
  );
}

export default Payments;

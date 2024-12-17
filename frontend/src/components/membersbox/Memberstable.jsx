import React from "react";
import { Button } from "antd";

function Memberstable() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Location</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Hilbrow</td>
            <td>27890000</td>
            <td>
              <Button type="primary">Details</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Turfontain</td>
            <td>27890000</td>
            <td>
              <Button type="primary">Details</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Doe</td>
            <td>Midrad</td>
            <td>27890000</td>
            <td>
              <Button type="primary">Details</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Memberstable;

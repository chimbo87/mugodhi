import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import userlogo from "../../assets/images/person.jpeg";
import { Badge } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div id="home-page">
      <div id="home-page-head">
        <div id="home-page-headtext">
          <h5>Hello, John Doe !</h5>
        </div>
        <div id="home-page-headuser">
          <div id="home-page-headiconbox"  onClick={() => navigate("/dashboard/notifications")}>
            <Badge count={15}>
              <IoNotificationsOutline id="home-page-headicon"/>
            </Badge>
          </div>

          <img src={userlogo} alt="user" onClick={() => navigate("/dashboard/profile")}/>
        </div>
      </div>
      <div id="overview-box">
        <div class="row">
          <div class="col-lg-4 col-md-4">
          <div id="overview-card">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quas sit maxime quo dolore corrupti sint iusto placeat, corporis,
              labore, impedit repellendus? Ullam labore et ipsa qui
              reprehenderit esse voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quas sit maxime quo dolore corrupti sint iusto placeat, corporis,
              labore, impedit repellendus? Ullam labore et ipsa qui
              reprehenderit esse voluptatibus.
            </p>
          </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quas sit maxime quo dolore corrupti sint iusto placeat, corporis,
              labore, impedit repellendus? Ullam labore et ipsa qui
              reprehenderit esse voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quas sit maxime quo dolore corrupti sint iusto placeat, corporis,
              labore, impedit repellendus? Ullam labore et ipsa qui
              reprehenderit esse voluptatibus.
            </p>
          </div>
          <div class="col-lg-4 col-md-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quas sit maxime quo dolore corrupti sint iusto placeat, corporis,
              labore, impedit repellendus? Ullam labore et ipsa qui
              reprehenderit esse voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quas sit maxime quo dolore corrupti sint iusto placeat, corporis,
              labore, impedit repellendus? Ullam labore et ipsa qui
              reprehenderit esse voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

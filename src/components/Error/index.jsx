import React from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";
// import image1 from "http://salehriaz.com/404Page/img/404.svg";
// import image3 from "http://salehriaz.com/404Page/img/rocket.svg";
// import image4 from "http://salehriaz.com/404Page/img/earth.svg";
// import image2 from "http://salehriaz.com/404Page/img/moon.svg";
// import image5 from "http://salehriaz.com/404Page/img/astronaut.svg";

function Error(props) {
  return (
    <>
      <div className="error bg-purple">
        <div className="container">
        <div className="stars bg-purple">
        <div className="central-body">
          <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px"></img>
          <NavLink to="/" className="btn-go-home" target="_blank">
            GO BACK HOME
          </NavLink>
        </div>
        <div className="objects">
          <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"></img>
          <div className="earth-moon">
            <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"></img>
            <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"></img>
          </div>
          <div className="box_astronaut">
            <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"></img>
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}

export default Error;

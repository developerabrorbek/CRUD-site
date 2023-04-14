import React from "react";
import "./index.scss";
// import image1 from "http://salehriaz.com/404Page/img/404.svg";
// import image3 from "http://salehriaz.com/404Page/img/rocket.svg";
// import image4 from "http://salehriaz.com/404Page/img/earth.svg";
// import image2 from "http://salehriaz.com/404Page/img/moon.svg";
// import image5 from "http://salehriaz.com/404Page/img/astronaut.svg";

function Error(props) {
  return (
    <>
      <div className="stars bg-purple">
        <div className="central-body">
          <img className="image-404" src={image1} width="300px"></img>
          <a href="http://salehriaz.com/404Page/404.html" className="btn-go-home" target="_blank">
            GO BACK HOME
          </a>
        </div>
        <div className="objects">
          <img className="object_rocket" src={image3} width="40px"></img>
          <div className="earth-moon">
            <img className="object_earth" src={image4} width="100px"></img>
            <img className="object_moon" src={image2} width="80px"></img>
          </div>
          <div className="box_astronaut">
            <img className="object_astronaut" src={image5} width="140px"></img>
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
    </>
  );
}

export default Error;

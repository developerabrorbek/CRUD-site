import React from "react";
import "./index.scss";
import userImage from "../../assets/aside-image.png";
import homeIcon from "../../assets/icons/home-icon.svg";
import courseIcon from "../../assets/icons/course-icon.svg";
import studentIcon from "../../assets/icons/student-icon.svg";
import paymentIcon from "../../assets/icons/payment-icon.svg";
import reportIcon from "../../assets/icons/report-icon.svg";
import settingsIcon from "../../assets/icons/settings-icon.svg";
import logoutIcon from "../../assets/icons/logout-icon.svg";

function Aside(props) {
  const asideIcons = [
    homeIcon,
    courseIcon,
    studentIcon,
    paymentIcon,
    reportIcon,
    settingsIcon,
  ];
  const asideTexts = [
    "Home",
    "Course",
    "Students",
    "Payment",
    "Report",
    "Settings",
  ];

  return (
    <>
      <div className="aside-title">
        <h1 className="aside-title__text">CRUD OPERATIONS</h1>
      </div>
      <div className="aside-admin">
        <img src={userImage} alt="user-image" className="aside-admin__image"/>
        <h3 className="aside-admin__title">Karthi Madesh</h3>
        <p className="aside-admin__subtitle">Admin</p>
      </div>
      <ul className="aside-pages">
        {asideIcons.map((item,index) => {
          return (
            <li className="aside-page">
              <img src={item} alt="home icon" className="aside-page__icon"/>
              <p className="aside-page__text">{asideTexts[index]}</p>
            </li>
          );
        })}
      </ul>

      <a href="#" className="aside-logout">
        <p className="aside-logout__text">Logout</p>
        <img src={logoutIcon} alt="logout icon"/>
      </a>
    </>
  );
}

export default Aside;

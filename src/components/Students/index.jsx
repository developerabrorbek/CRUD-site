import React from "react";
import image1 from "../../assets/icons/sort-icon.svg";
import image2 from "../../assets/aside-image.png";
import editIcon from "../../assets/icons/edit-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import "./index.scss";

function Students(props) {
  return (
    <>
      <div className="students__inner">
        <div className="students-info">
          <h2 className="students-info__title">Students List</h2>
          <div className="students-extra">
            <img src={image1} alt="image" />
            <button className="btn btn-warning">ADD NEW STUDENT</button>
          </div>
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroll Number</th>
              <th>Date of admission</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center vertical-align-center bg-white" scope="row">
              <td>
                <img
                  src={image2}
                  alt="image"
                  className="table-image rounded-3"
                  width={65}
                  height={55}
                />
              </td>
              <td>Karthi</td>
              <td>karthi@gmmail.com</td>
              <td>7305477760</td>
              <td>1234567305477760</td>
              <td>08-Dec, 2021</td>
              <td>
                <img src={editIcon} alt="edit-icon" />
              </td>
              <td>
                <img src={deleteIcon} alt="delete-icon" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Students;

import React,{useContext} from "react";
import { context } from "../context";
import image1 from "../../assets/icons/sort-icon.svg";
import image2 from "../../assets/aside-image.png";
import editIcon from "../../assets/icons/edit-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import "./index.scss";

function Students(props) {
  const { mode } = useContext(context);
  const theme = mode ? false : true;

  return (
    <>
      <div className={"students " + (theme ? '' : 'bg-[#19376d]')}>
        <div className="container">
        <div className="students__inner">
        <div className="students-info">
          <h2 className={"students-info__title "  + (theme ? '' : 'text-white')}>Students List</h2>
          <div className="students-extra">
            <img src={image1} alt="image" />
            <button className="btn btn-warning">ADD NEW STUDENT</button>
          </div>
        </div>

        <table className={"table "  + (theme ? '' : 'text-white')}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroll Number</th>
              <th>Date of admission</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className={"text-center vertical-align-center " + (theme ? '' : 'text-white hover:text-gray-200')} scope="row">
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
        </div>
      </div>
    </>
  );
}

export default Students;

import React from 'react';
import icon from "../../assets/icons/sort-icon.svg";
import icon2 from "../../assets/icons/eye-icon.svg";
import "./index.scss";

function Payment(props) {
    return (
        <>
      <div className="students__inner">
        <div className="students-info">
          <h2 className="students-info__title">Students List</h2>
          <div className="students-extra">
            <img src={icon} alt="image" />
          </div>
        </div>

        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Payment Schedule</th>
              <th>Bill Number</th>
              <th>Amount Paid</th>
              <th>Balance amount</th>
              <th>Date </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row">
              <td>Karthi</td>
              <td>First</td>
              <td>00012223</td>
              <td>INR 35,000</td>
              <td>INR 55,000</td>
              <td>08-Dec, 2021</td>
              <td>
                <img src={icon2} alt="edit-icon" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Payment;
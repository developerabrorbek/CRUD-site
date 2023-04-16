import React,{useContext} from "react";
import { context } from "../context";
import image1 from "../../assets/icons/sort-icon.svg";
import image2 from "../../assets/aside-image.png";
import editIcon from "../../assets/icons/edit-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import "./index.scss";

function Students(props) {
  const { mode, LANG, language } = useContext(context);
  const theme = mode ? false : true;

  const lang = LANG[language];
  console.log(lang);

  return (
    <>
      <div className={"students " + (theme ? '' : 'bg-[#19376d]')}>
        <div className="container">
        <div className="students__inner">
        <div className="students-info">
          <h2 className={"students-info__title "  + (theme ? '' : 'text-white')}>{lang.studentsPage['title']}</h2>
          <div className="students-extra">
            <img src={image1} alt="image" />
            <button className="btn btn-warning">{lang.studentsPage['button']}</button>
          </div>
        </div>

        <table className={"table "  + (theme ? '' : 'text-white')}>
          <thead>
            <tr>
              <th></th>
              <th>{lang.studentsPage['name']}</th>
              <th>{lang.studentsPage['email']}</th>
              <th>{lang.studentsPage['phone']}</th>
              <th>{lang.studentsPage['enrollNumber']}</th>
              <th>{lang.studentsPage['dateOfAdmission']}</th>
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

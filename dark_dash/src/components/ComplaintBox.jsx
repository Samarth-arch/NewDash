import React, { useState } from "react";

const ComplaintBox = ({ sNo, uid, title, body, phone }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="col-md-12">
      <div className="table-wrap">
        <table className="table myaccordion table-hover" id={`accordion${sNo}`}>
          <tbody>
            <tr onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
              <th scope="row">{sNo}</th>
              <td scope="row">{uid}</td>
              <td>{title}</td>
              <td>{body}</td>
              <td>{phone}</td>
              <td>
                <i className="fa" aria-hidden="true"></i>
              </td>
            </tr>
            <tr className={isCollapsed ? 'collapse' : 'collapse show'} id={`collapse${sNo}`} data-parent={`#accordion${sNo}`}>
              <td colSpan="6" className="acc">
                <p>{body}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplaintBox;

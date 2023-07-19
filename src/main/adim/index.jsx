import React, { useState } from "react";
import "./style.css";
function Admin() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  let date = new Date();
  return (
    <div>
      <div className="navbar">Navbar</div>
      <div className="body">
        <div className="table-body">
          <table className="table">
            <thead>
              <tr>
                <th>{date.getDate() - 3}</th>
                <th>{date.getDate() - 2}</th>
                <th>{date.getDate() - 1}</th>
                <th>{date.getDate()}</th>
                <th>{date.getDate() + 1}</th>
                <th>{date.getDate() + 2}</th>
                <th>{date.getDate() + 3}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elem, index) => {
                return (
                  <tr key={index}>
                    <td
                      onClick={() => alert("21 kun soat: " + (index + 7))}
                    ></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="saidbar"></div>
      </div>
    </div>
  );
}

export default Admin;

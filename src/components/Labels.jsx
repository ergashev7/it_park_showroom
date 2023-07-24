import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  const url = "http://83.69.139.151:3500/items";
  const [data, setData] = useState([]);
  function fetchNotifacationList() {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, "data");
        setData(data);
      });
  }
  useEffect(() => {
    fetchNotifacationList();
  }, []);

  return (
    <div>
      <p className="text-gray-500 font-bold mt-10">Notification</p>
      {/* {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
        </label>
      ))} */}
      <div>
        <p>label</p>
      </div>
    </div>
  );
}

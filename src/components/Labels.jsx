import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { key } from "localforage";

export default function Labels() {
  const { labels, updateLabel, setShowEventModal } = useContext(GlobalContext);
  const url = "http://83.69.139.151:3500/items";
  const [data, setData] = useState([]);
  function fetchNotifacationList() {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  function postDatas(dataForm, id) {
    postData("http://83.69.139.151:3500/items/" + id, dataForm).then(
      (data) => {}
    );
  }
  function lab(el) {
   let e = data.filter((e)=>e.id == el)
    localStorage.setItem("lab", JSON.stringify(e) )
    setShowEventModal(true);
    // changeIsCheck(el);
  }
  function changeIsCheck(id) {
    const data = {
      isCheck: true,
    };
    postDatas(data, id);
    // window.location.reload();
  }

  useEffect(() => {
    fetchNotifacationList();
  }, []);

  return (
    <div className="">
      <p className="text-gray-500 font-bold mt-10">Уведомление</p>
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
      <div className="max-h-[250px] overflow-y-scroll">
        {data.map((el, idx) => {
          {
            if (el.isCheck == false) {
              return (
                <div
                  onClick={() => {
                    lab(el.id);
                  }}
                  key={idx}
                  className="flex justify-between border p-2 rounded-lg mt-2 px-3 cursor-pointer"
                >
                  <p className="font-medium">{el.title}</p>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
}

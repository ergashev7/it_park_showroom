import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import "./Day.css"
export default function Day({ day, rowIdx }) {
  const url = "http://83.69.139.151:3500/items";
  let person = localStorage.getItem("admin");
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  let monts = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let kun = new Date().getDate();
  let oy = new Date().getMonth();
  let selectValue =localStorage.getItem("selectValue")
  let x = data.filter(
    (row) => day.format("dddd, MMMM DD") == row.day && row.isCheck == true
  );
  
  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  function after() {
    if (person !== "admin") {
      if (
        monts[oy] == day.format("MMMM") &&
        (kun < day.format("DD") || kun == day.format("DD"))
      ) {
        setDaySelected(day);
        setShowEventModal(true);
      } else {
        alert("Извините, время истекло");
      }
    } else {
      setDaySelected(day);
      setShowEventModal(true);
    }
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div className="flex-1 cursor-pointer overflow-auto sc" onClick={after}>
        {x.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label == selectValue || "all"== selectValue? evt.label : ""}-200 flex justify-between p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            <p>{evt.label == selectValue || "all"== selectValue? evt.title:""}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

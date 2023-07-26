import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "../components/CalendarHeader";
import Month from "../components/Month";
import Sidebar from "../components/Sidebar";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";
import EventModal from "../components/EventModal";
function Admin() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const [hidden, setHidden] = useState(true);
  const [selectValue ,setSelectValue]=useState("all")
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  function onHidden() {
    setHidden(!hidden);
  }
  // console.log(selectValue);
  // console.log(selectValue);
  localStorage.setItem("selectValue",selectValue)
  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <div className="flex justify-between align-center">
          <CalendarHeader />
          <div className="">
          <select onChange={(e)=>setSelectValue(e.target.value)} className="border border-grey-500 rounded px-2">
                  <option value="all">Все</option>
                  <option value="gray">Митинг рум на 1-этаже</option>
                  <option value="green">Шоурум на 1-этаже</option>
                  <option value="blue">Митинг рум на 2-этаже</option>
                  <option value="red">Учебные кабинеты на 3-этаже </option>
                  <option value="purple">Митинг рум на 17-этаже</option>
                  <option value="orange">Зал переговоров на 17-этаже</option>
                </select>
              <span onClick={onHidden} className="material-icons-outlined cursor-pointer text-black text-3xl px-6">
                menu
              </span>
          </div>
        </div>
        <div className="flex flex-1 ">
          <Month month={currentMonth} />
          <Sidebar showHidden={hidden} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Admin;

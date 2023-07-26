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
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  function onHidden() {
    setHidden(!hidden);
  }
  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <div className="flex justify-between">
          <CalendarHeader />
          <button onClick={onHidden}>
            <span className="material-icons-outlined text-black text-3xl px-6">
              menu
            </span>
          </button>
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

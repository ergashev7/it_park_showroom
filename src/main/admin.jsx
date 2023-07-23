import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "../components/CalendarHeader"
import Month from "../components/Month";
import Sidebar from "../components/Sidebar";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";
import EventModal from "../components/EventModal";
function Admin() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
        {showEventModal && <EventModal />}
        <div className="h-screen flex flex-col">
          <CalendarHeader />
          <div className="flex flex-1">
            <Month month={currentMonth} />
            <Sidebar />
          </div>
        </div>
    </React.Fragment>
  );
}

export default Admin;

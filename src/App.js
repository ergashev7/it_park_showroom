import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./components/CalendarHeader";
// import Login from "./main/login/login";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./util";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Login from "./main/login/login";
function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const [data, setData] = useState();
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    fetch("http://localhost:3500/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <React.Fragment>
      <Login />
      {showEventModal && <EventModal />}
      {/* <Login data={data} /> */}
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

export default App;

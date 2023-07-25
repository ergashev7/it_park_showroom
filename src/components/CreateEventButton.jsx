import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <div className="flex">
      <button
        onClick={() => setShowEventModal(true)}
        className="border p-2 rounded-full flex flex items-center shadow-md hover:shadow-2xl"
      >
        <img src={plusImg} alt="" className="w-7 h-7" />
        <span className="pl-3 pr-4">Создать</span>
      </button>
      <button className="p-2">sidebar</button>
    </div>
  );
}

export default CreateEventButton;

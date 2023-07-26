import React, { useEffect, useState } from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar({ showHidden }) {
  const person = localStorage.getItem("admin");
  return (
    <aside className={!showHidden ? `border p-5 w-64 ` : "hidden"}>
      <CreateEventButton />
      <SmallCalendar />
      {person == "admin" ? <Labels /> : ""}
    </aside>
  );
}

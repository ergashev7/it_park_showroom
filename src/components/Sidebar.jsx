import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  const person = localStorage.getItem("admin");
  return (
    <aside className="border hidden p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      {person == "admin" ? <Labels /> : ""}
    </aside>
  );
}

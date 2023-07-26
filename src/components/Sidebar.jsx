import React, {useEffect, useRef, useState} from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import emailjs from "@emailjs/browser";
export default function Sidebar({ showHidden }) {
  const person = localStorage.getItem("admin");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_ztjnufw', 'template_5f1gxkj', form.current, 'Mn9BlGW7ftorhwka6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
  return (
    <aside className={!showHidden ? `border p-5 w-64 ` : "hidden"}>
        <form ref={form} onSubmit={sendEmail}>
            <textarea name="message" placeholder='Message' className='border mt-1' value='Salom tekshir' />
            <input type="submit" value="Send" className='cursor-pointer block bg-blue-400 w-full rounded-lg text-white py-1'/>
        </form>
      <CreateEventButton />
      <SmallCalendar />
      {person == "admin" ? <Labels /> : ""}
    </aside>
  );
}

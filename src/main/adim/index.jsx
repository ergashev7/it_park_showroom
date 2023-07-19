import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import "./style.css"
function Admin() {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    let date = new Date()
    return (
        <div>
            <div className="navbar">Navbar</div>
            <div className="body">
                <div className="table-body">
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                    />
                </div>
                <div className="saidbar"></div>
            </div>
        </div>
    )
}

export default Admin
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

function postDatas(dataForm) {
  postData("http://localhost:3500/items", dataForm).then((data) => {
    console.log(data);
  });
}
const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
const labelsRoom = [
  "Выберите помещение ",
  "Митинг рум на 1-этаже ",
  "Шоурум на 1-этаже",
  "Митинг рум на 2-этаже ",
  "Учебные кабинеты на 3-этаже ",
  "Митинг рум на 17-этаже",
  "Зал переговоров на 17-этаже",
];
const labelsHour = [];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );
  // useEffect(() => {
  //   fetch("http://localhost:3500/items")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  // const [data ,setData]=useState()
  // console.log(data);
  const [notebooks, setNotebooks] = useState();
  const [microphone, setMicrophone] = useState();
  const [buttonhole, setButtonhole] = useState();
  const [chairs, setChairs] = useState();
  const [desk, setDesk] = useState();
  const [water, setWater] = useState();
  const [tea, setTea] = useState();
  const [coffee, setCoffee] = useState();
  const [pen, setPen] = useState();
  const [paper, setPaper] = useState();
  const [flyers, setFlyers] = useState();
  const [clicker, setClicker] = useState();
  const [TV43, setTV43] = useState();
  const [TV65, setTV65] = useState();
  const [TV76, setTV76] = useState();
  const [touchscreen86, setTouchscreen86] = useState();
  const [videoConferencing ,setVideoConferencing] = useState()
  const [liveStream , setLiveStream] = useState()
  const [eventRecording,setEventRecording] = useState()
  const [photographer,setPhotographer]=useState()
  const[videographer,setVideographer]=useState()
  const [cooler,setCooler]=useState()
  const[markerBoard,setMarkerBoard]=useState()
  const [HDMIAdapter,setHDMIAdapter] = useState()
  const [typeCToHDMIAdapter,setTypeCToHDMIAdapter]= useState()
  function handleSubmit(e) {
    const dataForm = {
      themeEvents: title,
      numberPeople: description,
      hour: "",
      notebooks: notebooks,
      microphone: microphone,
      buttonhole: buttonhole,
      chairs: chairs,
      desk: desk,
      water: water,
      tea: tea,
      coffee: coffee,
      pen: pen,
      paper: paper,
      flyers: flyers,
      clicker: clicker,
      TV43: TV43,
      TV65:TV65,
      TV76:TV76,
      touchscreen86:touchscreen86,
      videoConferencing:videoConferencing,
      liveStream:liveStream,
      eventRecording:eventRecording,
      photographer:photographer,
      videographer:videographer,
      cooler:cooler,
      markerBoard:markerBoard,
      HDMIAdapter:HDMIAdapter,
      typeCToHDMIAdapter:typeCToHDMIAdapter
    };
   
  
    postDatas(dataForm);
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl lg:w-1/1 ">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div className="flex gap-5 lg:ml-1 ml-[25px] sm:ml-[2px] ">
              <div></div>
              <input
                type="text"
                name="title"
                placeholder="Тема Мероприятия"
                value={title}
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold  lg:w-[600px] sm:w-[500px]
                border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex gap-5 sm:ml-[0px]">
              <span className="material-icons-outlined text-gray-400 sm:ml-[40px]">
                schedule
              </span>
              <p>{daySelected.format("dddd, MMMM DD")}</p>
              <select
                className="border border-grey-500 rounded px-2"
                name=""
                id=""
                // value={}
              >
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
              </select>
              <select
                name=""
                className="border border-grey-500 rounded px-2"
                id=""
              >
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
              </select>
            </div>
            <div className="flex gap-5 sm:ml-[40px]">
              <span className="material-icons-outlined text-gray-400">
                people
              </span>
              <input
                type="text"
                name="description"
                placeholder="Количество Людей"
                value={description}
                required
                className="  border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex gap-5">
              <span className="material-icons-outlined text-gray-400">
                place
              </span>
              <div className="flex gap-x-2">
                <select className="border border-grey-500 rounded px-2">
                  {labelsRoom.map((room, i) => (
                    <option value="0" key={i}>
                      {room}
                    </option>
                  ))}
                </select>
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="material-icons-outlined text-white text-sm">
                        check
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xl">Предметы:</p>
            <div className="h-48 overflow-auto touch-auto ">
              <div className="flex gap-7 w-[500px] ">
                <div>
                  <span className="font-bold">Ноутбуки:</span>
                  <input
                    placeholder="0-60"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    onChange={(e) => {
                      setNotebooks(e.target.value);
                    }}
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold">Микрофон:</span>
                  <input
                    placeholder="0-10"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    onChange={(e) => {
                      setMicrophone(e.target.value);
                    }}
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold">Петличка:</span>
                  <input
                    placeholder="0-10"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    onChange={(e) => {
                      setButtonhole(e.target.value);
                    }}
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className=" lg:flex sm:block sm:mt-5 gap-7 w-[500px] mt-5 sm:ml-[30px] lg:ml-1 ml-[40px] sm:ml-[2px] ">
                <div>
                  <span className="font-bold">Стулья:</span>
                  <input
                    onChange={(e) => setChairs(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold ">Письменный стол:</span>
                  <input
                    onChange={(e) => setDesk(e.target.value)}
                    placeholder="0-5"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold">Вода (0,33л.):</span>
                  <input
                    placeholder="0-60"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    name=""
                    id=""
                    onChange={(e) => setWater(e.target.value)}
                  />
                </div>
              </div>
              <div className=" lg:flex sm:block sm:mt-5 gap-7 w-[500px] items-center mt-5 sm:ml-[30px] lg:ml-1 ml-[40px] sm:ml-[2px]">
                <div>
                  <span className="font-bold">Ручка:</span>
                  <input
                    onChange={(e) => setPen(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div className="">
                  <span className="font-bold">Чай:</span>
                  <input
                    onChange={(e) => setTea(e.target.value)}
                    placeholder="0-10"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold">Кофе:</span>
                  <input
                    onChange={(e) => setCoffee(e.target.value)}
                    placeholder="0-10"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="lg:flex sm:block sm:mt-5 justify-between w-[480px] mt-5 lg:ml-1 ml-[40px] sm:ml-[2px]">
                <div>
                  <span className="font-bold">Бумага:</span>
                  <input
                    onChange={(e) => setPaper(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold">Флаера:</span>
                  <input
                    onChange={(e) => setFlyers(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500 px-3"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div></div>
              </div>
              <div className="lg:flex sm:block sm:mt-5 gap-7  mt-5 lg:ml-1 ml-[40px] sm:ml-[2px]">
                <div className="gap-3 flex">
                  <span className="font-bold">Кликер:</span>
                  <input
                    onChange={(e) => setClicker(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold">ТВ'43:</span>
                  <input
                    onChange={(e) => setTV43(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold">ТВ'65:</span>
                  <input
                    onChange={(e) => setTV65(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold">ТВ'76:</span>
                  <input
                    onChange={(e) => setTV76(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold">Тачскрин'86':</span>
                  <input
                    onChange={(e) => setTouchscreen86(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold">Камера для ВКС:</span>
                  <input
                    onChange={(e) => setVideoConferencing(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="lg:flex sm:block sm:mt-5 gap-7  mt-5 lg:ml-1 ml-[40px] sm:ml-[2px]">
                <div className="gap-3 flex">
                  <span className="font-bold">Онлайн-трансляция:</span>
                  <input
                  onChange={(e)=>setLiveStream(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold">Запись ивента:</span>
                  <input
                    onChange={(e)=>setEventRecording(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold">Фотограф:</span>
                  <input
                    onChange={(e)=>setPhotographer(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold">Видеограф:</span>
                  <input
                    onChange={(e)=>setVideographer(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold">Кулер:</span>
                  <input
                    onChange={(e)=>setCooler(e.target.value)}

                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="lg:flex sm:block sm:mt-5 gap-7  mt-5 lg:ml-1 ml-[40px] sm:ml-[2px]">
                <div className="gap-3 flex">
                  <span className="font-bold">Маркерная доска:</span>
                  <input
                    onChange={(e) => setMarkerBoard(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold ">HDMI переходник:</span>
                  <input
                    onChange={(e) => setHDMIAdapter(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div className="gap-3 flex">
                  <span className="font-bold">Адаптер Type-C на HDMI:</span>
                  <input
                    onChange={(e) => setTypeCToHDMIAdapter(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white lg:ml-1 mr-[40px] sm:ml-[2px]"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

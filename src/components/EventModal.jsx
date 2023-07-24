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
    // console.log(data);
  });
}
const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
  const url = "http://localhost:3500/items";
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);
  console.log();
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );
  // console.log(selectedEvent );

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  let x = data.filter((day) => day.day == daySelected.format("dddd, MMMM DD"));

  const [error, setError] = useState(false);
  const [notebooks, setNotebooks] = useState(
    selectedEvent ? selectedEvent.notebooks : ""
  );
  const [microphone, setMicrophone] = useState(
    selectedEvent ? selectedEvent.microphone : ""
  );
  const [buttonhole, setButtonhole] = useState(
    selectedEvent ? selectedEvent.buttonhole : ""
  );
  const [chairs, setChairs] = useState(
    selectedEvent ? selectedEvent.buttonhole : ""
  );
  const [desk, setDesk] = useState(selectedEvent ? selectedEvent.chairs : "");
  const [water, setWater] = useState(selectedEvent ? selectedEvent.water : "");
  const [tea, setTea] = useState(selectedEvent ? selectedEvent.tea : "");
  const [coffee, setCoffee] = useState(
    selectedEvent ? selectedEvent.coffee : ""
  );
  const [pen, setPen] = useState(selectedEvent ? selectedEvent.pen : "");
  const [paper, setPaper] = useState(selectedEvent ? selectedEvent.paper : "");
  const [flyers, setFlyers] = useState(
    selectedEvent ? selectedEvent.flyers : ""
  );
  const [clicker, setClicker] = useState(
    selectedEvent ? selectedEvent.clicker : ""
  );
  const [TV43, setTV43] = useState(selectedEvent ? selectedEvent.TV43 : "");
  const [TV65, setTV65] = useState(selectedEvent ? selectedEvent.TV65 : "");
  const [TV76, setTV76] = useState(selectedEvent ? selectedEvent.TV76 : "");
  const [touchscreen86, setTouchscreen86] = useState(
    selectedEvent ? selectedEvent.touchscreen86 : ""
  );
  const [videoConferencing, setVideoConferencing] = useState(
    selectedEvent ? selectedEvent.videoConferencing : ""
  );
  const [liveStream, setLiveStream] = useState(
    selectedEvent ? selectedEvent.liveStream : ""
  );
  const [eventRecording, setEventRecording] = useState(
    selectedEvent ? selectedEvent.eventRecording : ""
  );
  const [photographer, setPhotographer] = useState(
    selectedEvent ? selectedEvent.photographer : ""
  );
  const [videographer, setVideographer] = useState(
    selectedEvent ? selectedEvent.videographer : ""
  );
  const [cooler, setCooler] = useState(
    selectedEvent ? selectedEvent.cooler : ""
  );
  const [markerBoard, setMarkerBoard] = useState(
    selectedEvent ? selectedEvent.markerBoard : ""
  );
  const [HDMIAdapter, setHDMIAdapter] = useState(
    selectedEvent ? selectedEvent.HDMIAdapter : ""
  );
  const [typeCToHDMIAdapter, setTypeCToHDMIAdapter] = useState(
    selectedEvent ? selectedEvent.typeCToHDMIAdapter : ""
  );
  const [label, setLable] = useState(selectedEvent ? selectedEvent.label : "");
  const [doClock, setDoClock] = useState(
    selectedEvent ? selectedEvent.doClock : "08:00"
  );
  const [poClock, setPoClock] = useState(
    selectedEvent ? selectedEvent.poClock : "09:00"
  );
  let person = localStorage.getItem("admin");
  let per = localStorage.getItem("person");
  function handleSubmit(e) {
    if (selectedEvent !== null) {
      deleteData(selectedEvent.id);
    }
    window.location.reload();
    const dataForm = {
      isCheck: false,
      day: daySelected.format("dddd, MMMM DD"),
      title: title,
      description: description,
      label: label,
      doClock: doClock,
      poClock: poClock,
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
      TV65: TV65,
      TV76: TV76,
      touchscreen86: touchscreen86,
      videoConferencing: videoConferencing,
      liveStream: liveStream,
      eventRecording: eventRecording,
      photographer: photographer,
      videographer: videographer,
      cooler: cooler,
      markerBoard: markerBoard,
      HDMIAdapter: HDMIAdapter,
      typeCToHDMIAdapter: typeCToHDMIAdapter,
      person: per,
    };
    if (person === "admin") {
      dataForm.isCheck = true;
    }

    if (data.some((e) => e.person == per)) {
      postDatas(dataForm);
    } else {
      data.some(
        (e) =>
          e.label == dataForm.label &&
          e.doClock == dataForm.doClock &&
          e.poClock == dataForm.poClock &&
          e.day == dataForm.day
      )
        ? alert("Извините, этот номер уже заблокирован")
        : postDatas(dataForm);
    }

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
  function deleteData(item) {
    window.location.reload();
    return fetch("http://localhost:3500/items" + "/" + item, {
      method: "delete",
    }).then((response) => response.json());
    setShowEventModal(false);
  }
 

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center ">
      <form className="bg-white rounded-lg shadow-2xl lg:w-1/1 ">
        <header className="bg-gray-100 px-4 py-2 grid place-content-end">
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  deleteData(selectedEvent.id);
                }}
                className=" material-icons-outlined text-gray-400 cursor-pointer"
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
            <div className="flex gap-5  ">
              <div></div>
              <input
                type="text"
                name="title"
                placeholder="Тема Мероприятия"
                value={title}
                required
                className="pt-3 lg:w-full border-0 text-gray-600 text-xl font-semibold border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex gap-5  ">
              <span className="material-icons-outlined text-gray-400 sm:ml-[40px]">
                schedule
              </span>
              <p>{daySelected.format("dddd, MMMM DD")}</p>
              <select
                className="border h-8 border-grey-500 rounded px-2"
                value={
                  person == "admin" ? (selectedEvent ? doClock : null) : null
                }
                name=""
                id=""
                onClick={(e) => {
                  setDoClock(e.target.value);
                }}
              >
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
              </select>
              <select
                value={
                  person == "admin" ? (selectedEvent ? poClock : null) : null
                }
                name=""
                className="border h-8 border-grey-500 rounded px-2"
                id=""
                onClick={(e) => {
                  setPoClock(e.target.value);
                }}
              >
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
              </select>
            </div>
            <div className="flex gap-5 ">
              <span className="material-icons-outlined text-gray-400">
                people
              </span>
              <input
                type="text"
                name="description"
                placeholder="Количество Людей"
                value={description}
                required
                className="  border-0 text-gray-600 pb-2 lg:w-full  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex gap-5">
              <span className="material-icons-outlined text-gray-400">
                place
              </span>
              <div className="flex gap-x-2">
                <select
                  value={
                    person == "admin" ? (selectedEvent ? label : null) : null
                  }
                  onClick={(e) => {
                    setLable(e.target.value);
                  }}
                  className="border border-grey-500 rounded px-2"
                >
                  <option value="indigo">Выберите помещение</option>
                  <option value="gray">Митинг рум на 1-этаже</option>
                  <option value="green">Шоурум на 1-этаже</option>
                  <option value="blue">Митинг рум на 2-этаже</option>
                  <option value="red">Учебные кабинеты на 3-этаже </option>
                  <option value="purple">Митинг рум на 17-этаже</option>
                  <option value="orange">Зал переговоров на 17-этаже</option>
                </select>
                {/* {labelsClasses.map((lblClass, i) => (
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
                ))} */}
              </div>
            </div>
            <p className="text-xl">Предметы:</p>
            <div className="h-48 overflow-auto touch-auto ">
              <div className="lg:flex gap-7 lg:w-[600px]  lg:place-content-start grid place-content-center ">
                <div className="lg:text-start  ">
                  <span className="font-bold">Ноутбуки:</span>
                  <input
                    value={person == "admin" ? notebooks : null}
                    placeholder="0-60"
                    className=" border w-40  grid place-content-start  md:place-content-center rounded border-grey-500 px-3"
                    type="text"
                    onChange={(e) => {
                      setNotebooks(e.target.value);
                    }}
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold ">Микрофон:</span>
                  <input
                    value={person == "admin" ? microphone : null}
                    placeholder="0-10"
                    className="border  w-40 grid place-content-start md:place-content-center rounded border-grey-500 px-3"
                    type="text"
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
                    value={person == "admin" ? buttonhole : null}
                    placeholder="0-10"
                    className="border w-40 rounded border-grey-500 grid place-content-start md:place-content-center px-3"
                    type="text"
                    onChange={(e) => {
                      setButtonhole(e.target.value);
                    }}
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className=" lg:flex gap-7 lg:w-[600px]  lg:place-content-start grid place-content-center mt-5 ">
                <div>
                  <span className="font-bold">Стулья:</span>
                  <input
                    value={person == "admin" ? chairs : null}
                    onChange={(e) => setChairs(e.target.value)}
                    placeholder="0-60"
                    className="border grid place-content-start md:place-content-center rounded border-grey-500 px-3 w-40"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold ">Письменный стол:</span>
                  <input
                    value={person == "admin" ? desk : null}
                    onChange={(e) => setDesk(e.target.value)}
                    placeholder="0-5"
                    className="border grid place-content-start md:place-content-center rounded border-grey-500 px-3 w-40"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold">Вода (0,33л.):</span>
                  <input
                    value={person == "admin" ? water : null}
                    placeholder="0-60"
                    className="border grid place-content-start md:place-content-center rounded border-grey-500 px-3  w-40"
                    type="number"
                    name=""
                    id=""
                    onChange={(e) => setWater(e.target.value)}
                  />
                </div>
              </div>
              <div className="lg:flex gap-7 lg:w-[600px]  lg:place-content-start grid place-content-center mt-5 ">
                <div>
                  <span className="font-bold">Ручка:</span>
                  <input
                    value={person == "admin" ? pen : null}
                    onChange={(e) => setPen(e.target.value)}
                    placeholder="0-60"
                    className="border grid place-content-start md:place-content-center rounded border-grey-500 px-3 w-40"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div className="">
                  <span className="font-bold">Чай:</span>
                  <input
                    value={person == "admin" ? tea : null}
                    onChange={(e) => setTea(e.target.value)}
                    placeholder="0-10"
                    className="border grid place-content-start md:place-content-center rounded border-grey-500 px-3 w-40"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold">Кофе:</span>
                  <input
                    value={person == "admin" ? coffee : null}
                    onChange={(e) => setCoffee(e.target.value)}
                    placeholder="0-10"
                    className="border grid place-content-start md:place-content-center rounded border-grey-500 px-3 w-40"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="lg:flex gap-7 lg:w-[380px]  lg:place-content-start grid place-content-center mt-5">
                <div>
                  <span className="font-bold">Бумага:</span>
                  <input
                    value={person == "admin" ? paper : null}
                    onChange={(e) => setPaper(e.target.value)}
                    placeholder="0-60"
                    className="border grid place-content-start md:place-content-center rounded border-grey-500 px-3 w-40"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <span className="font-bold">Флаера:</span>
                  <input
                    value={person == "admin" ? flyers : null}
                    onChange={(e) => setFlyers(e.target.value)}
                    placeholder="0-60"
                    className="border grid place-content-start md:place-content-center rounded border-grey-500 px-3 w-40"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div></div>
              </div>
              <div className="lg:flex sm:block sm:mt-5 gap-7  grid place-content-center">
                <div className="gap-3 flex">
                  <span className="font-bold">Кликер:</span>
                  <input
                    checked={
                      person == "admin"
                        ? clicker == "on"
                          ? true
                          : false
                        : null
                    }
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
                    checked={
                      person == "admin" ? (TV43 == "on" ? true : false) : null
                    }
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
                    checked={
                      person == "admin" ? (TV65 == "on" ? true : false) : null
                    }
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
                    checked={
                      person == "admin" ? (TV76 == "on" ? true : false) : null
                    }
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
                    checked={
                      person == "admin"
                        ? touchscreen86 == "on"
                          ? true
                          : false
                        : null
                    }
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
                    checked={
                      person == "admin"
                        ? videoConferencing == "on"
                          ? true
                          : false
                        : null
                    }
                    onChange={(e) => setVideoConferencing(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="lg:flex sm:block mt-5 gap-7  grid place-content-center">
                <div className="gap-3 flex">
                  <span className="font-bold">Онлайн-трансляция:</span>
                  <input
                    checked={
                      person == "admin"
                        ? liveStream == "on"
                          ? true
                          : false
                        : null
                    }
                    onChange={(e) => setLiveStream(e.target.value)}
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
                    checked={
                      person == "admin"
                        ? eventRecording == "on"
                          ? true
                          : false
                        : null
                    }
                    onChange={(e) => setEventRecording(e.target.value)}
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
                    checked={
                      person == "admin"
                        ? photographer == "on"
                          ? true
                          : false
                        : null
                    }
                    onChange={(e) => setPhotographer(e.target.value)}
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
                    checked={
                      person == "admin"
                        ? videographer == "on"
                          ? true
                          : false
                        : null
                    }
                    onChange={(e) => setVideographer(e.target.value)}
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
                    checked={
                      person == "admin" ? (cooler == "on" ? true : false) : null
                    }
                    onChange={(e) => setCooler(e.target.value)}
                    placeholder="0-60"
                    className="border rounded border-grey-500   "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="lg:flex mt-5 gap-7  grid place-content-center lg:place-content-start">
                <div className="gap-3 flex">
                  <span className="font-bold">Маркерная доска:</span>
                  <input
                    checked={
                      person == "admin"
                        ? markerBoard == "on"
                          ? true
                          : false
                        : null
                    }
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
                    checked={
                      person == "admin"
                        ? HDMIAdapter == "on"
                          ? true
                          : false
                        : null
                    }
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
                    checked={
                      person == "admin"
                        ? typeCToHDMIAdapter == "on"
                          ? true
                          : false
                        : null
                    }
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
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white lg:ml-1 mr-[40px] sm:ml-[2px]">
            подтверждение
          </button>
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

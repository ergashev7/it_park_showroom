import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import emailjs from "@emailjs/browser";


const sendEmail = () => {
  const formParams = {
    from_name: "Valisher Botirov",
    from_email: "valisherbotirov111uzbekcoders@gmail.com",
    message: "Assalom akasi",
  };
  // emailjs.sendForm('Gmail', 'service_ztjnufw', formParams, 'Mn9BlGW7ftorhwka6')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
};

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
export default function EventModal() {
  const url = "http://83.69.139.151:3500/items";
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    setSelectedEvent,
  } = useContext(GlobalContext);
  let lab = localStorage.getItem("lab");

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

  let person = localStorage.getItem("admin");
  let per = JSON.parse(localStorage.getItem("person"));
  let leb = JSON.parse(lab);
  let x = data.filter((day) => day.day == daySelected.format("dddd, MMMM DD"));
  const [title, setTitle] = useState(
    leb ? leb[0].title : selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    leb ? leb[0].description : selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );
  const [error, setError] = useState(false);

  const [notebooks, setNotebooks] = useState(
    leb ? leb[0].notebooks : selectedEvent ? selectedEvent.notebooks : ""
  );
  const [microphone, setMicrophone] = useState(
    leb ? leb[0].microphone : selectedEvent ? selectedEvent.microphone : ""
  );
  const [buttonhole, setButtonhole] = useState(
    leb ? leb[0].buttonhole : selectedEvent ? selectedEvent.buttonhole : ""
  );
  const [chairs, setChairs] = useState(
    leb ? leb[0].chairs : selectedEvent ? selectedEvent.chairs : ""
  );
  const [desk, setDesk] = useState(
    leb ? leb[0].desk : selectedEvent ? selectedEvent.desk : ""
  );
  const [water, setWater] = useState(
    leb ? leb[0].water : selectedEvent ? selectedEvent.water : ""
  );
  const [tea, setTea] = useState(
    leb ? leb[0].tea : selectedEvent ? selectedEvent.tea : ""
  );
  const [coffee, setCoffee] = useState(
    leb ? leb[0].coffee : selectedEvent ? selectedEvent.coffee : ""
  );
  const [pen, setPen] = useState(
    leb ? leb[0].pen : selectedEvent ? selectedEvent.pen : ""
  );
  const [paper, setPaper] = useState(
    leb ? leb[0].paper : selectedEvent ? selectedEvent.paper : ""
  );
  const [flyers, setFlyers] = useState(
    leb ? leb[0].flyers : selectedEvent ? selectedEvent.flyers : ""
  );
  const [clicker, setClicker] = useState(
    leb ? leb[0].clicker : selectedEvent ? selectedEvent.clicker : ""
  );
  const [TV43, setTV43] = useState(
    leb ? leb[0].TV43 : selectedEvent ? selectedEvent.TV43 : ""
  );
  const [TV65, setTV65] = useState(
    leb ? leb[0].TV65 : selectedEvent ? selectedEvent.TV65 : ""
  );
  const [TV76, setTV76] = useState(
    leb ? leb[0].TV76 : selectedEvent ? selectedEvent.TV76 : ""
  );
  const [touchscreen86, setTouchscreen86] = useState(
    leb
      ? leb[0].touchscreen86
      : selectedEvent
      ? selectedEvent.touchscreen86
      : ""
  );
  const [videoConferencing, setVideoConferencing] = useState(
    leb
      ? leb[0].videoConferencing
      : selectedEvent
      ? selectedEvent.videoConferencing
      : ""
  );
  const [liveStream, setLiveStream] = useState(
    leb ? leb[0].title : selectedEvent ? selectedEvent.liveStream : ""
  );
  const [eventRecording, setEventRecording] = useState(
    leb
      ? leb[0].eventRecording
      : selectedEvent
      ? selectedEvent.eventRecording
      : ""
  );
  const [photographer, setPhotographer] = useState(
    leb ? leb[0].photographer : selectedEvent ? selectedEvent.photographer : ""
  );
  const [videographer, setVideographer] = useState(
    leb ? leb[0].videographer : selectedEvent ? selectedEvent.videographer : ""
  );
  const [cooler, setCooler] = useState(
    leb ? leb[0].cooler : selectedEvent ? selectedEvent.cooler : ""
  );
  const [markerBoard, setMarkerBoard] = useState(
    leb ? leb[0].markerBoard : selectedEvent ? selectedEvent.markerBoard : ""
  );
  const [HDMIAdapter, setHDMIAdapter] = useState(
    leb ? leb[0].HDMIAdapter : selectedEvent ? selectedEvent.HDMIAdapter : ""
  );
  const [typeCToHDMIAdapter, setTypeCToHDMIAdapter] = useState(
    leb
      ? leb[0].typeCToHDMIAdapter
      : selectedEvent
      ? selectedEvent.typeCToHDMIAdapter
      : ""
  );
  const [label, setLabel] = useState(
    leb ? leb[0].label : selectedEvent ? selectedEvent.label : ""
  );
  const [doClock, setDoClock] = useState(
    leb ? leb[0].doClock : selectedEvent ? selectedEvent.doClock : "08:00"
  );
  const [poClock, setPoClock] = useState(
    leb ? leb[0].poClock : selectedEvent ? selectedEvent.poClock : "09:00"
  );
  const [responsible, setResponsible] = useState(
    leb ? leb[0].responsible : selectedEvent ? selectedEvent.responsible : ""
  );
  const [errorHandle, setErrorHandle] = useState(false);
  function handleSubmit(e) {
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
      postData("http://83.69.139.151:3500/items", dataForm).then((data) => {
        // console.log(data);
      });
      console.log("email send messages");
      sendEmail();
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
      responsible: responsible,
    };
    if (person === "admin") {
      dataForm.isCheck = true;
    }

    if (data.some((e) => e.person === per)) {
      postDatas(dataForm);
    } else {
      data.some(
        (e) =>
          e.label === dataForm.label &&
          e.doClock === dataForm.doClock &&
          e.poClock === dataForm.poClock &&
          e.day === dataForm.day
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
    setTimeout(() => {
      if (per !== "admin") {
        alert(
          "Ваш запрос успешно отправлен! Пожалуйста, дождитесь ответа админов"
        );
      }
    }, 1000);
    localStorage.setItem("lab", null);
  }

  function deleteData(item) {
    window.location.reload();
    return fetch("http://83.69.139.151:3500/items" + "/" + item, {
      method: "delete",
    }).then((response) => response.json());
    setShowEventModal(false);
  }
  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "PATCH",
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
  function tasdiqlash() {
    const url = `http://83.69.139.151:3500/items/${leb[0].id}`;
    const dataForm = {
      isCheck: true,
    };
    postData(url, dataForm);
    setShowEventModal(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    localStorage.setItem("lab", null);
  }
  function updateEvent() {
    console.log("run is code");
    const url = `http://83.69.139.151:3500/items/${selectedEvent?.id}`;
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
      responsible: responsible,
    };
    if (person === "admin") {
      dataForm.isCheck = true;
    }
    postData(url, dataForm);
    setShowEventModal(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  function ochir() {
    setShowEventModal(false);
    deleteData(leb[0].id);
    localStorage.setItem("lab", null);
  }

  return (
    <div
      className={
        selectedEvent !== null
          ? person == "admin"
            ? `h-screen w-full fixed left-0 p-10 top-0 flex justify-center items-center`
            : selectedEvent?.person?.login == per.login
            ? `h-screen w-full fixed left-0 top-0 flex justify-center items-center`
            : "hidden"
          : `h-screen w-full fixed left-0 top-0 flex justify-center items-center`
      }
    >
      <div className="absolute w-full h-full z-10 bg-[#010101]  opacity-[0.6]"></div>
      <div className="relative z-20 bg-white rounded-lg shadow-2xl lg:w-1/1 ">
        <header className="bg-gray-100 px-4 py-2 grid place-content-end">
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  deleteData(selectedEvent.id);
                }}
                className={
                  person == "admin"
                    ? `material-icons-outlined text-gray-400 cursor-pointer`
                    : `hidden`
                }
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
                className={`pt-3 lg:w-full border-0 text-gray-600 text-xl font-semibold border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500`}
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
                value={leb ? leb[0].doClock : selectedEvent ? doClock : null}
                name=""
                id=""
                onChange={(e) => {
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
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </select>
              <select
                value={leb ? leb[0].poClock : selectedEvent ? poClock : null}
                name=""
                className="border h-8 border-grey-500 rounded px-2"
                id=""
                onChange={(e) => {
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
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
              </select>
            </div>
            <div className="flex flex-row sm:flex-col gap-3 sm:gap-5">
              <div className="flex gap-5 ">
                <span className="flex-shrink-0 material-icons-outlined text-gray-400">
                  people
                </span>
                <input
                  type="number"
                  name="description"
                  placeholder="Количество Людей"
                  value={description}
                  required
                  className="  border-0 text-gray-600 pb-2 lg:w-full  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex gap-5 ">
                <span className="flex-shrink-0 material-icons-outlined text-gray-400">
                  people
                </span>
                <input
                  type="text"
                  name="description"
                  placeholder="Ответственный человек"
                  value={responsible}
                  required
                  className="  border-0 text-gray-600 pb-2 lg:w-full  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                  onChange={(e) => setResponsible(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <span className="material-icons-outlined text-gray-400">
                place
              </span>
              <div className="flex gap-x-2">
                <select
                  value={leb ? leb[0].label : selectedEvent ? label : null}
                  onChange={(e) => {
                    setLabel(e.target.value);
                  }}
                  className="border border-grey-500 rounded px-2"
                >
                  <option value="indigo">Выберите помещение </option>
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
                    value={notebooks}
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
                    value={microphone}
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
                    value={buttonhole}
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
                    value={chairs}
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
                    value={desk}
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
                    value={water}
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
                    value={pen}
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
                    value={tea}
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
                    value={coffee}
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
                    value={paper}
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
                    value={flyers}
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
                    checked={clicker == "on" ? true : false}
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
                      TV43 == "on" ? true : false 
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
                       TV65 == "on" ? true : false 
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
                       TV76 == "on" ? true : false 
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
                    
                         touchscreen86 == "on"
                          ? true
                          : false
                       
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
          <button
            onClick={ochir}
            className={
              leb
                ? `bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-white lg:ml-1 mr-[40px] sm:ml-[2px]`
                : `hidden`
            }
          >
            Удалить
          </button>
          <button
            onClick={tasdiqlash}
            className={
              leb
                ? `bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white lg:ml-1 mr-[40px] sm:ml-[2px]`
                : `hidden`
            }
          >
            Подтвердить
          </button>
          <button
            onClick={handleSubmit}
            className={
              !leb
                ? selectedEvent
                  ? `hidden`
                  : `bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white lg:ml-1 mr-[40px] sm:ml-[2px]`
                : `hidden`
            }
          >
            Сохранить
          </button>
          <button
            onClick={updateEvent}
            className={
              selectedEvent
                ? `bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white lg:ml-1 mr-[40px] sm:ml-[2px]`
                : `hidden`
            }
          >
            Изменить
          </button>
        </footer>
      </div>
    </div>
  );
}

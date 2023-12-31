import React, { useEffect, useState, useRef } from "react";
import imgIT from "../../assets/logo.svg";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
// import database from "../../logindata.js";
function Login() {
  const url = "http://83.69.139.151:3500/person";
  const PasswordRef = useRef();
  const InputRef = useRef();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState();
  const [data, setData] = useState();
  const [admin, setAdmin] = useState("/");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  const navigate = useNavigate();
  function confirmation() {
    localStorage.setItem(
      "person",
      JSON.stringify(data.filter((e) => e.login == login)[0])
    );
    data.filter((e) => e.admin == true && e.login == login)[0] !== undefined
      ? localStorage.setItem("admin", "admin")
      : localStorage.setItem("admin", "user");
    if (data.some((e) => e.login == login && e.password == password)) {
      setAdmin("/admin");
      navigate("/admin");
      localStorage.setItem("token","qwerty")
    } else {
      InputRef.current.style.border = "2px solid red";
      PasswordRef.current.style.border = "2px solid red";
      console.log(InputRef);
    }
  }
  useEffect(()=>{
    window.addEventListener("keydown", (event) => {
      if ( event.key == "Enter") {
        // confirmation() 
      }else{

      }
    })
  },[])

  return (
    <div className="container1 ">
      <div className="bg-container1">
        <div className="form1 sm:mt-5 lg:mt-0 mt-[90px]">
          <div className="form-container1">
            <div className="form-img1">
              <img src={imgIT} width="250px" alt="" />
            </div>
            <div className="form-card1">
              <p className="form-text1">
                Добро пожаловать <br /> в календарь
              </p>
              <div className="card1 flex1 justify-content-center1 mt-51">
                <div className="flex1 flex-column gap-21">
                  <label htmlFor="username">Почта</label> <br />
                  <input
                    ref={InputRef}
                    className="input1"
                    placeholder="введите свой email"
                    onChange={(e) => setLogin(e.target.value)}
                    type="text"
                  />
                </div>
              </div>
              <div className="card1 flex1 justify-content-center mt-51">
                <label className="mt-5" htmlFor="value">
                  Пароль
                </label>{" "}
                <br />
                <input
                  ref={PasswordRef}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="пароль"
                  className="input1 password2"
                />
                <br />
              </div>
              {/*<Link to={admin}>*/}
              <button
                onClick={confirmation}
                className="bg-blue-500 button1 mt-5 w-full  hover:bg-blue-600 px-6 py-2 rounded text-white"
              >
                Войти
              </button>
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

import React, { useState } from "react";
import imgIT from "../../assets/img/it-park 1.png";
import "./login.css";
function Login({data}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  function confirmation( ) {
    data.some((res,i)=>{
      console.log(res.name == login ? console.log(true):console.log(false));
    })
  }
  return (
    <div className="container1">
      <div className="bg-container1">
        <div className="form1">
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
                    className="input1"
                    placeholder=" hannah.green@test.com"
                    onChange={(e)=>{setLogin(e.target.value)}}
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
                  onChange={(e)=>{setPassword(e.target.value)}}
                  type="password"
                  placeholder="Password123@"
                  className="input1 password2"
                />
                <br />
              </div>
              <button onClick={confirmation} className="bg-blue-500 mt-5 w-full hover:bg-blue-600 px-6 py-2 rounded text-white">
                Войти
              </button>
              <p className="parol mt-51">Забыли пароль?</p>
              <div style={{ width: "401px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
 
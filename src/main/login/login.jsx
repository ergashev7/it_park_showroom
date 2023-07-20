import React, { useState } from "react";
import imgIT from "../../assets/img/it-park 1.png";
import Button from "../../components/Button/index";
import "./login.css";
import database from "../../logindata.js";
function Login() {
  const [valueText, setValueText] = useState("");
  const [value, setValue] = useState("");
  const [valueCheck, setValueCheck] = useState("");
  return (
    <div className="container1">
      <div className="bg-container1">
        <div className="form1">
          <div className="form-container1">
            <div className="form-img1">
              <img src={imgIT} width="300px" alt="" />
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
                  type="password"
                  placeholder=" Password123@"
                  className="input1 password2"
                />
                <br />
              </div>
              <div className=" mt-51">
                <label className="empty1">
                  <input className="login-check1" type="checkbox" />
                  <span>Запомнить этот компьютер</span>
                </label>
              </div>
              <Button class="iris lg mt-51" title="Войти" />
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
 
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
    <div className="container">
      <div className="bg-container">
        <div className="form">
          <div className="form-container">
            <div className="form-img">
              <img src={imgIT} width="300px" alt="" />
            </div>
            <div className="form-card">
              <p className="form-text">
                Добро пожаловать <br /> в календарь
              </p>
              <div className="card flex justify-content-center mt-5">
                <div className="flex flex-column gap-2">
                  <label htmlFor="username">Почта</label> <br />
                  <input
                    className="input"
                    placeholder=" hannah.green@test.com"
                    type="text"
                  />
                </div>
              </div>
              <div className="card flex justify-content-center mt-5">
                <label className="mt-5" htmlFor="value">
                  Пароль
                </label>{" "}
                <br />
                <input
                  type="password"
                  placeholder=" Password123@"
                  className="input password2"
                />
                <br />
              </div>
              <div className=" mt-5">
                <label className="empty">
                  <input className="login-check" type="checkbox" />
                  <span>Запомнить этот компьютер</span>
                </label>
              </div>
              <Button class="iris lg mt-5" title="Войти" />
              <p className="parol mt-5">Забыли пароль?</p>
              <div style={{ width: "401px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
// let base = database;
// export class Logins extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       login: base,
//       loginparol: "",
//     };
//   }
//   render() {
//     const { login, loginparol } = this.state;
//     const findLogin = () => {
//       let res = base.filter((s) => {
//         s.parol.includes(loginparol);
//         this.setState({ loginparol: res });
//       });
//     };
//     return (
//       <div>
//         <h1>login</h1>
//         <input
//           type="text"
//           name=""
//           id=""
//           onChange={({ target: { value } }) => {
//             this.state({ loginparol: value });
//             findLogin();
//           }}
//         />
//       </div>
//     );
//   }
// }

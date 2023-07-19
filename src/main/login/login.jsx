import React, { useState } from "react";
import imgIT from "../../assets/img/it-park 1.png"
import Button from "../../components/Button/index"
import "./login.css"
function Login() {
    return (
        <div className='container'>
            <div className="bg-container">
                <div className="form">
                    <div className="form-container">
                        <div className="form-img">
                            <img src={imgIT} width="300px" alt="" />
                        </div>
                        <div className="form-card">
                            <p className='form-text'>Добро пожаловать <br /> в календарь</p>
                            <div className="card flex justify-content-center mt-5">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="username">Username</label> <br />
                                </div>
                            </div>
                            <div className="card flex justify-content-center mt-5">
                                <label className="mt-5" htmlFor="value">Password</label><br />
                            </div>
                            <div className=" mt-5">
                                <label style={{marginLeft:"10px"}}>Запомнить этот компьютер</label>
                            </div>
                            <Button class="iris lg mt-5" title="Войти"/>
                            <div style={{ width: "401px" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
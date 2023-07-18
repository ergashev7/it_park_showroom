import React from 'react'
import imgIT from "../../assets/img/it-park 1.png"
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
                            <div style={{width:"401px"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
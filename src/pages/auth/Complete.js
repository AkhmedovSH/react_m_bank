import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import arrow_left from 'assets/icons/arrow_left.svg'
import arrow_right from 'assets/icons/arrow_right_light.svg'

function RegisterPhone() {
    const navigate = useNavigate()
    const isRegister = localStorage.getItem('isRegister')


    return (
        <>
            <div className={"auth-bg complete " + (isRegister === 'true' ? 'second' : '')}>
                <div className="auth-card bg">
                    <img src={logo} alt="" className="logo" />

                    <div className="auth-content align-items-center">
                        {isRegister === 'true' ?
                            <div className="auth-title text-center">
                                Привет <span className="text-primary">Камрон</span>, <br />
                                начинаем работу?
                            </div>
                            :
                            <div className="auth-title text-center">
                                С возвращением <br />
                                в приложение, <span className="text-primary">Камрон</span>!
                            </div>
                        }

                        <div className="auth-buttons">
                            <button className="auth-btn rounded" onClick={() => navigate(-1)} title="Назад">
                                <img src={arrow_left} alt="" />
                            </button>

                            <Link className="auth-btn dark" to="/auth/welcome">
                                Перейти в кабинет!
                                <img src={arrow_right} alt="" />
                            </Link>
                        </div>
                    </div>

                    <div></div>
                </div>
            </div >
        </>
    )
}

export default RegisterPhone
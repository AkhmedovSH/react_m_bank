import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'

import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Register() {
    const navigate = useNavigate()

    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        middle_name: '',
        birhday: '',
        email: '',
        password: '',
        agreement: false,
    })

    return (
        <>
            <img src={logo} alt="" className="logo" />

            <div className="auth-content">
                <div className="auth-title">
                    Регистрация аккаунта
                </div>

                <div className="auth-group">
                    <div className="form-group">
                        <label htmlFor="first_name">Имя</label>
                        <input type="text" className="auth-input" id='first_name' placeholder='Камрон'
                            value={data.first_name} onChange={(e) => setData({ ...data, first_name: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Фамилия</label>
                        <input type="text" className="auth-input" id='last_name' placeholder='Камрон'
                            value={data.last_name} onChange={(e) => setData({ ...data, last_name: e.target.value })} />
                    </div>
                </div>

                <div className="auth-group">
                    <div className="form-group">
                        <label htmlFor="middle_name">Отчество</label>
                        <input type="text" className="auth-input" id='middle_name' placeholder='Козимович'
                            value={data.middle_name} onChange={(e) => setData({ ...data, middle_name: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="birhday">Дата рождения</label>
                        <MaskedInput
                            type="text"
                            className="auth-input"
                            id='birhday'
                            placeholder='29/11/2006'
                            mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,]}
                            guide={true}
                            value={data.birhday}
                            onChange={(e) => setData({ ...data, birhday: e.target.value })}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Почта</label>
                    <input type="text" className="auth-input" id='email' placeholder='yourmail@gmail.com'
                        value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="auth-input" id='password' placeholder='10+ символов'
                        value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                </div>

                <div className="agreement">
                    <div className="agreement-checkbox"></div>
                    <div>
                        Я согласен с <span className="text-underline">Условиями предоставления услуг MBank</span>, Политикой
                        конфиденциальности и настройками уведомлений по умолчанию.
                    </div>
                </div>
            </div>

            <div className="auth-buttons">
                <button className="auth-btn rounded" onClick={() => navigate(-1)} title="Назад">
                    <ArrowLeft />
                </button>

                <Link className="auth-btn start" to="/auth/phone">
                    Далее
                    <div className="devider" />
                    <ArrowRightIcon />
                </Link>
            </div>
        </>
    )
}

export default Register
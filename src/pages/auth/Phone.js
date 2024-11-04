import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'

import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function RegisterPhone() {
    const navigate = useNavigate()
    const isRegister = localStorage.getItem('isRegister')

    const [data, setData] = useState({
        phone: '+998',
        code: '',
    })

    return (
        <>
                <img src={logo} alt="" className="logo" />

                <div className="auth-content">
                    <div className="auth-title">
                        Номер телефона
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <MaskedInput
                            type="text"
                            className="auth-input"
                            id="phone"
                            placeholder="+998 xx xxx xx xx"
                            mask={[
                                '+', '9', '9', '8', ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/
                            ]}
                            guide={false}
                            value={data.phone}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                if (!inputValue.startsWith('+998')) {
                                    setData({ ...data, phone: '+998' });
                                    setTimeout(() => {
                                        e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                                    }, 0);
                                } else {
                                    setData({ ...data, phone: inputValue });
                                }
                            }}

                        />
                    </div>

                    <div className="auth-group">
                        <div className="form-group">
                            <label htmlFor="email">Получить СМС</label>
                            <button className="auth-btn dark start second">
                                Отправить код
                            </button>
                        </div>

                        <div className="form-group">
                            <label htmlFor="code">Введите код из СМС</label>
                            <MaskedInput
                                type="text"
                                className="auth-input"
                                id="code"
                                placeholder="XXX XXX"
                                mask={[
                                    /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/
                                ]}
                                guide={false}
                                value={data.code}
                                onChange={(e) => setData({ ...data, code: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className="auth-buttons">
                    <button className="auth-btn rounded" onClick={() => navigate(-1)} title="Назад">
                        <ArrowLeft />
                    </button>

                    <Link className="auth-btn start" to="/auth/complete">
                        Далее
                        <div className="devider" />
                        <ArrowRightIcon />
                    </Link>
                </div>
        </>
    )
}

export default RegisterPhone
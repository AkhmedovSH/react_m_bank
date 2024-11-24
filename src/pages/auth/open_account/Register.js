import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'

import { useNavigate, useSearchParams } from 'react-router-dom'

import { httpOk, post } from 'configs/api'
import { formatDateBackend, unMaskPhoneNumber } from 'configs/helper'

import logo from 'assets/icons/logo.svg'
import check from 'assets/icons/check.svg'
import validation from 'assets/icons/validation.svg'

import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Register() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();

    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        currency: searchParams.get('currency_id'),
        phone_number: '+998',
        first_name: '',
        last_name: '',
        middle_name: '',
        birth_date: '',
        email: '',
        adress: '',
        balance: '0',
        agreement: false,
    })

    function validateFields() {
        const newErrors = {};

        if (!data.first_name.trim()) newErrors.first_name = 'Обязательное поле';
        if (!data.last_name.trim()) newErrors.last_name = 'Обязательное поле';
        if (!data.middle_name.trim()) newErrors.middle_name = 'Обязательное поле';
        if (!data.adress.trim()) newErrors.adress = 'Обязательное поле';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.trim() || !emailRegex.test(data.email)) newErrors.email = 'Некорректный email';

        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!data.birth_date.trim() || !dateRegex.test(data.birth_date)) newErrors.birth_date = 'Некорректная дата';

        const phoneRegex = /^\+998 \d{2} \d{3} \d{2} \d{2}$/;
        if (!phoneRegex.test(data.phone_number)) {
            newErrors.phone_number = 'Некорректный номер телефона';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    async function register() {
        if (!validateFields()) return;

        var sendData = { ...data }
        sendData.birth_date = formatDateBackend(data.birth_date)
        sendData.phone_number = unMaskPhoneNumber(data.phone_number).replace('+998', '');

        const response = await post('/api/bank/bill/create/', sendData)
        if (httpOk(response)) {
            navigate(`/auth/open-account/register2`)
        }
    }

    return (
        <>
            <img src={logo} alt="" className="logo" />

            <div className="auth-content">
                <div className="auth-title">
                    Регистрация аккаунта
                </div>

                <div className="auth-group">
                    <div className={`form-group ${errors.first_name && 'error'}`}>
                        <label htmlFor="first_name">Имя</label>
                        <input type="text" className="auth-input" id='first_name' placeholder='Камрон' autoFocus
                            value={data.first_name} onChange={(e) => setData({ ...data, first_name: e.target.value })}
                        />
                        <div className="message">
                            <img src={validation} alt="" width={24} />
                            {errors.first_name}
                        </div>
                    </div>

                    <div className={`form-group ${errors.last_name && 'error'}`}>
                        <label htmlFor="last_name">Фамилия</label>
                        <input type="text" className="auth-input" id='last_name' placeholder='Камрон'
                            value={data.last_name} onChange={(e) => setData({ ...data, last_name: e.target.value })}
                        />
                        <div className="message">
                            <img src={validation} alt="" width={24} />
                            {errors.last_name}
                        </div>
                    </div>
                </div>

                <div className="auth-group">
                    <div className={`form-group ${errors.middle_name && 'error'}`}>
                        <label htmlFor="middle_name">Отчество</label>
                        <input type="text" className="auth-input" id='middle_name' placeholder='Козимович'
                            value={data.middle_name} onChange={(e) => setData({ ...data, middle_name: e.target.value })}
                        />
                        <div className="message">
                            <img src={validation} alt="" width={24} />
                            {errors.middle_name}
                        </div>
                    </div>

                    <div className={`form-group ${errors.birth_date && 'error'}`}>
                        <label htmlFor="birth_date">Дата рождения</label>
                        <MaskedInput
                            type="text"
                            className="auth-input"
                            id='birth_date'
                            placeholder='29/11/2006'
                            mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            guide={true}
                            value={data.birth_date}
                            onChange={(e) => setData({ ...data, birth_date: e.target.value })}
                        />
                        <div className="message">
                            <img src={validation} alt="" width={24} />
                            {errors.birth_date}
                        </div>

                    </div>
                </div>

                <div className="auth-group">
                    <div className={`form-group ${errors.email && 'error'}`}>
                        <label htmlFor="email">Почта</label>
                        <input type="text" className="auth-input" id='email' placeholder='yourmail@gmail.com'
                            value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                        <div className="message">
                            <img src={validation} alt="" width={24} />
                            {errors.email}
                        </div>
                    </div>

                    <div className={`form-group ${errors.phone_number ? 'error' : ''}`}>
                        <label htmlFor="phone_number">Телефон</label>
                        <MaskedInput
                            type="text"
                            className="auth-input"
                            id="phone_number"
                            placeholder="+998 xx xxx xx xx"
                            mask={[
                                '+', '9', '9', '8', ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/
                            ]}
                            guide={false}
                            value={data.phone_number}
                            onClick={(e) => {
                                const inputElement = e.target;
                                if (inputElement.selectionStart < 5) {
                                    setTimeout(() => {
                                        inputElement.setSelectionRange(5, 5);
                                    }, 0);
                                }
                            }}
                            onKeyDown={(e) => {
                                const inputElement = e.target;
                                if (
                                    e.key === 'ArrowLeft' &&
                                    inputElement.selectionStart <= 5
                                ) {
                                    e.preventDefault();
                                    setTimeout(() => {
                                        inputElement.setSelectionRange(5, 5);
                                    }, 0);
                                }
                            }}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                if (!inputValue.startsWith('+998')) {
                                    setData({ ...data, phone_number: '+998 ' });
                                    setTimeout(() => {
                                        e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                                    }, 0);
                                } else {
                                    setData({ ...data, phone_number: inputValue });
                                }
                            }}
                        />

                        <div className="message">
                            <img src={validation} alt="" width={24} />
                            {errors.phone_number}
                        </div>

                    </div>
                </div>

                <div className={`form-group ${errors.adress && 'error'}`}>
                    <label htmlFor="adress">Адрес проживания</label>
                    <input type="text" className="auth-input" id='adress' placeholder='Аламазарский район, дом и квартира'
                        value={data.adress} onChange={(e) => setData({ ...data, adress: e.target.value })}
                    />
                    <div className="message">
                        <img src={validation} alt="" width={24} />
                        {errors.adress}
                    </div>
                </div>

                <div className="agreement">
                    <div className={"agreement-checkbox " + (data.agreement ? 'active' : '')} onClick={() => setData({ ...data, agreement: !data.agreement })} >
                        <img src={check} alt="" />
                    </div>
                    <div>
                        Я согласен с
                        <span className="text-underline cursor"> Условиями предоставления услуг MBank</span>
                        , Политикой
                        конфиденциальности и настройками уведомлений по умолчанию.
                    </div>
                </div>
            </div>

            <div className="auth-buttons">
                <button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
                    <ArrowLeft />
                </button>

                <button className="auth-btn start" onClick={() => register()} disabled={!data.agreement}>
                    Далее
                    <div className="devider" />
                    <ArrowRightIcon />
                </button>
            </div>
        </>
    );

}

export default Register
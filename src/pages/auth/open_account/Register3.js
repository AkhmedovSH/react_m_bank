import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'

import { useNavigate } from 'react-router-dom'

import { httpOk, post } from 'configs/api'
import { formatDateBackend } from 'configs/helper'

import logo from 'assets/icons/logo.svg'
import file from 'assets/icons/file.svg'
import validation from 'assets/icons/validation.svg'

import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Register() {
    const navigate = useNavigate()

    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        company_name: '',
        tin: '',
        address: '',
    })

    function validateFields() {
        const newErrors = {};

        const passportRegex = /.{10,}/;
        if (!data.passport.trim() || !passportRegex.test(data.passport)) newErrors.passport = 'Пароль должен содержать 10+ символов';

        const pinflRegex = /.{10,}/;
        if (!data.pinfl.trim() || !pinflRegex.test(data.pinfl)) newErrors.pinfl = 'Пароль должен содержать 10+ символов';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    async function register() {
        navigate(`/auth/open-account/register4`)

        // if (!validateFields()) return;

        // var sendData = { ...data }
        // sendData.birth_date = formatDateBackend(data.birth_date)
        // console.log(sendData);

        // const response = await post('/api/auth/register/', sendData, { guest: true })
        // if (httpOk(response)) {
        //     navigate(`/auth/`)
        // }
    }

    return (
        <>
            <img src={logo} alt="" className="logo" />

            <div className="auth-content">
                <div className="auth-title">
                    Регистрация аккаунта
                </div>

                <div className={`form-group ${errors.company_name && 'error'}`}>
                    <label htmlFor="company_name">Наименование компании</label>
                    <input type="text" className="auth-input" id='company_name' placeholder='“ООО, AbexLab”'
                        value={data.company_name} onChange={(e) => setData({ ...data, company_name: e.target.value })}
                    />
                    <div className="message">
                        <img src={validation} alt="" width={24} />
                        {errors.company_name}
                    </div>
                </div>

                <div className={`form-group ${errors.first_name && 'error'}`}>
                    <label htmlFor="tin">ИНН</label>
                    <input type="text" className="auth-input" id='tin' placeholder='123456789'
                        value={data.tin} onChange={(e) => setData({ ...data, tin: e.target.value })}
                    />
                    <div className="message">
                        <img src={validation} alt="" width={24} />
                        {errors.tin}
                    </div>
                </div>

                <div className={`form-group ${errors.address && 'error'}`}>
                    <label htmlFor="address">Юридический адрес</label>
                    <input type="text" className="auth-input" id='address' placeholder='Аламазарский район, дом и квартира'
                        value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })}
                    />
                    <div className="message">
                        <img src={validation} alt="" width={24} />
                        {errors.address}
                    </div>
                </div>
            </div>

            <div className="auth-buttons">
                <button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
                    <ArrowLeft />
                </button>

                <button className="auth-btn start" onClick={() => register()}>
                    Далее
                    <div className="devider" />
                    <ArrowRightIcon />
                </button>
            </div>
        </>
    );

}

export default Register
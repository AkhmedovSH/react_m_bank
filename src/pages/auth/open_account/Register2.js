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
        passport: '',
        pinfl: '',
        passport_photo: '',
        passport_photo_face: '',
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
        navigate(`/auth/open-account/register3`)

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
                    Подтвердите личность
                </div>

                <div className={`form-group ${errors.first_name && 'error'}`}>
                    <label htmlFor="first_name">Серия и номер паспорта</label>
                    <MaskedInput
                        type="text"
                        className="auth-input"
                        id="birth_date"
                        placeholder="AD 1234567"
                        mask={[
                            /[A-Za-z]/, /[A-Za-z]/, ' ', // Первые 2 символа (буквы) и пробел
                            /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/ // Остальные 7 символов (цифры)
                        ]}
                        guide={false} // Включите или выключите руководство, если нужно
                        value={data.birth_date}
                        onChange={(e) => setData({ ...data, birth_date: e.target.value })}
                    />

                    <div className="message">
                        <img src={validation} alt="" width={24} />
                        {errors.first_name}
                    </div>
                </div>

                <div className={`form-group ${errors.last_name && 'error'}`}>
                    <label htmlFor="last_name">ПИНФЛ </label>
                    <MaskedInput
                        type="text"
                        className="auth-input"
                        id="input_14_digits"
                        placeholder="12345678901234"
                        mask={Array(14).fill(/\d/)} // Маска для 14 цифр
                        guide={false}
                        value={data.input_14_digits}
                        onChange={(e) => setData({ ...data, input_14_digits: e.target.value })}
                    />

                    <div className="message">
                        <img src={validation} alt="" width={24} />
                        {errors.last_name}
                    </div>
                </div>

                <div className={`form-group ${errors.last_name && 'error'}`}>
                    <label htmlFor="last_name">Фото паспорта</label>
                    <div className="upload-block">
                        <div className="upload-div">
                            <img src={file} alt="" />
                            <div>
                                Прикрепите файл
                            </div>
                        </div>

                        <input type="file" className="file" />
                    </div>

                    <div className="message">
                        <img src={validation} alt="" width={24} />
                        {errors.last_name}
                    </div>
                </div>

                <div className={`form-group ${errors.last_name && 'error'}`}>
                    <label htmlFor="last_name">Фото с паспортом в руках</label>
                    <div className="upload-block">
                        <div className="upload-div">
                            <img src={file} alt="" />
                            <div>
                                Прикрепите файл
                            </div>
                        </div>

                        <input type="file" className="file" />
                    </div>

                    <div className="message">
                        <img src={validation} alt="" width={24} />
                        {errors.last_name}
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
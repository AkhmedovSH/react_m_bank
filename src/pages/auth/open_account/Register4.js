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
        navigate(`/auth/open-account/success`)

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
                    Подтвердите действие
                </div>

                <div className={`form-group ${errors.last_name && 'error'}`}>
                    <label htmlFor="last_name">Загрузите ваш ЭЦП файл</label>
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
                    <label htmlFor="last_name">Загрузите ваши файлы</label>
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
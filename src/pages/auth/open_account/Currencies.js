import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

import currency_1 from 'assets/images/currencies/uz.png'
import currency_2 from 'assets/images/currencies/us.png'
import currency_3 from 'assets/images/currencies/eu.png'
import currency_4 from 'assets/images/currencies/ru.png'
import currency_5 from 'assets/images/currencies/cn.png'
import currency_6 from 'assets/images/currencies/kz.png'

import { get, httpOk } from 'configs/api';

function Currencies() {
    const [currencies, setCurrencies] = useState([])

    async function getData() {
        const response = await get('/api/bank/currencies/')
        if (httpOk(response)) {
            setCurrencies(response.data)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <img src={logo} alt="" className="logo" />

            <div className="auth-content align-items-center">
                <div className="auth-title">
                    Выберите валюту
                </div>

                <div className="row row-gap-10">
                    {currencies.map((item, index) => (
                        <Link className="col-md-4" to={`/auth/open-account/register?currency_id=${item.id}`} key={index}>
                            <div className="activity-card second">
                                <img src={item.icon} alt="" className="position-relative" />
                                <div className="position-relative" >
                                    {item.currency}
                                </div>

                                <div className="currency-bg">
                                    <img src={item.background} alt="" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* <div className="auth-buttons">
                    <Link className="auth-btn start" to="/auth/activity/success">
                        Продолжить
                        <div className="devider" />
                        <ArrowRightIcon />
                    </Link>
                </div> */}
            </div>

            <div></div>
        </>
    )
}

export default Currencies
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { get, httpOk } from 'configs/api';

import plus_circle from 'assets/icons/plus_circle.svg'
import accounts from 'assets/icons/accounts.svg'
import { Link } from 'react-router-dom';

function Accounts() {
    const reduxAccount = useSelector(state => state.account)

    const [currencies, setCurrencies] = useState([])

    async function getCurrencies() {
        const response = await get('/api/bank/currencies')
        if (httpOk(response)) {
            setCurrencies(response.data)
        }
    }

    useEffect(() => {
        getCurrencies()
    }, []);
    return (
        <>
            <div className="dashboard-title-02 wave-animation">
                Мои счета
            </div>

            <div className="d-flex overflow-auto gap-10 wave-animation" style={{ minHeight: '100px' }}>
                <div className="currency-card">
                    <img src={accounts} alt="" />

                    Все
                </div>

                {currencies.map((item, index) => (
                    <div className={"currency-card"} key={index}>
                        <img src={item.icon} alt="" />

                        {item.currency}
                    </div>
                ))}
            </div>

            <Link className="transation-btn wave-animation" to="/auth/open-account">
                <img src={plus_circle} alt="" />
                Открыть счет
            </Link>

            <div className="dashboard-title-02 wave-animation">
                Сум
            </div>

            <div className="d-flex flex-column gap-10 wave-animation">
                {reduxAccount.bills.map((item, index) => (
                    <div className="currency-card second" key={index}>
                        <div>
                            “OOO, ABEXLAB”
                        </div>

                        <div className="currency-card-price">
                            16.343.445,45
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Accounts
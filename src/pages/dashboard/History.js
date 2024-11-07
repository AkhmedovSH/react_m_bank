import React, { useState } from 'react'

import search from 'assets/icons/search.svg';

import history_1 from 'assets/images/history_1.png';
import history_2 from 'assets/images/history_2.png';

function History() {
    const historyTabs = [
        {
            id: 1,
            name: 'Все операции'
        },
        {
            id: 2,
            name: 'Исходящие '
        },
        {
            id: 3,
            name: 'Входящие'
        },
        {
            id: 4,
            name: 'На подпись'
        },
    ]

    const [activeHistoryTab, setActiveHistoryTab] = useState(1)


    return (
        <>
            <div className="dashboard-title-02 wave-animation">
                История
            </div>

            <div className="dashboard-history-tabs wave-animation">
                {historyTabs.map((item, index) => (
                    <div className={"dashboard-history-tab " + (activeHistoryTab === item.id ? 'active' : '')}
                        key={index} onClick={() => setActiveHistoryTab(item.id)}>
                        {item.name}
                    </div>
                ))}
            </div>

            <div className="dashboard-history wave-animation">
                <div className="dashboard-history-filter">
                    <div className="dashboard-history-search">
                        <input type="text" placeholder="Поиск..." />
                        <img src={search} alt="" className="icon" />
                    </div>
                </div>

                <div className="dashboard-history-date">
                    Сегодня, 23 октября
                </div>
                <div className="dashboard-history-card">
                    <img src={history_1} alt="Xeond" />
                    <div className="dashboard-history-card-content">
                        <div className="dashboard-history-card-title">
                            OOO, XEOND
                        </div>
                        <div className="dashboard-history-card-description">
                            Транзакция для оплаты дизайна от компании OOO Xeond была проведена 23 октября 2024 года в 14:30 по Ташкентскому времени. НДС входит в стоимость.
                        </div>
                        <div className="dashboard-history-card-subtitle">
                            Транзакция №133
                        </div>
                    </div>

                    <div className="dashboard-history-card-right">
                        <div className="dashboard-history-card-balance">
                            -11.450.000 сум
                        </div>
                        <div className="dashboard-history-card-status">
                            Успешная операция
                        </div>
                        <div className="dashboard-history-card-card_number">
                            Карта **** 9934
                        </div>
                    </div>
                </div>
                <div className="dashboard-history-card">
                    <img src={history_2} alt="Xeond" />
                    <div className="dashboard-history-card-content">
                        <div className="dashboard-history-card-title">
                            OOO, FORMOFVISUAL
                        </div>
                        <div className="dashboard-history-card-description">
                            Оплата моушен видео от компании OOO formofvisual была проведена 23 октября 2024 года в 11:10 по Ташкентскому времени. НДС входит в стоимость.                                </div>
                        <div className="dashboard-history-card-subtitle">
                            Транзакция №132
                        </div>
                    </div>

                    <div className="dashboard-history-card-right">
                        <div className="dashboard-history-card-balance">
                            -3.000.000 сум
                        </div>
                        <div className="dashboard-history-card-status">
                            Успешная операция
                        </div>
                        <div className="dashboard-history-card-card_number">
                            Карта **** 9934
                        </div>
                    </div>
                </div>

                <div className="dashboard-history-date">
                    Три дня назад, 20 октября
                </div>

                <div className="dashboard-history-card">
                    <img src={history_2} alt="Xeond" />
                    <div className="dashboard-history-card-content">
                        <div className="dashboard-history-card-title">
                            OOO, FORMOFVISUAL
                        </div>
                        <div className="dashboard-history-card-description">
                            Оплата моушен видео от компании OOO formofvisual была проведена 23 октября 2024 года в 11:10 по Ташкентскому времени. НДС входит в стоимость.                                </div>
                        <div className="dashboard-history-card-subtitle">
                            Транзакция №132
                        </div>
                    </div>

                    <div className="dashboard-history-card-right">
                        <div className="dashboard-history-card-balance">
                            -3.000.000 сум
                        </div>
                        <div className="dashboard-history-card-status">
                            Успешная операция
                        </div>
                        <div className="dashboard-history-card-card_number">
                            Карта **** 9934
                        </div>
                    </div>
                </div>

                <div className="dashboard-history-card">
                    <img src={history_1} alt="Xeond" />
                    <div className="dashboard-history-card-content">
                        <div className="dashboard-history-card-title">
                            OOO, XEOND
                        </div>
                        <div className="dashboard-history-card-description">
                            Транзакция для оплаты дизайна от компании OOO Xeond была проведена 23 октября 2024 года в 14:30 по Ташкентскому времени. НДС входит в стоимость.
                        </div>
                        <div className="dashboard-history-card-subtitle">
                            Транзакция №133
                        </div>
                    </div>

                    <div className="dashboard-history-card-right">
                        <div className="dashboard-history-card-balance">
                            -11.450.000 сум
                        </div>
                        <div className="dashboard-history-card-status">
                            Успешная операция
                        </div>
                        <div className="dashboard-history-card-card_number">
                            Карта **** 9934
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default History
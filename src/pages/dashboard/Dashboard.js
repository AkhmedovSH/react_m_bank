import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

import search from 'assets/icons/search.svg';

import accounting_1 from 'assets/icons/accounting_1.svg';
import accounting_2 from 'assets/icons/accounting_2.svg';
import accounting_3 from 'assets/icons/accounting_3.svg';
import accounting_4 from 'assets/icons/accounting_4.svg';
import accounting_5 from 'assets/icons/accounting_5.svg';
import accounting_6 from 'assets/icons/accounting_6.svg';

import { ReactComponent as Eye } from 'assets/icons/eye.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow_right.svg';
import { ReactComponent as DashboardButton1 } from 'assets/icons/dashboard_button_1.svg';
import { ReactComponent as DashboardButton2 } from 'assets/icons/dashboard_button_2.svg';

import history_1 from 'assets/images/history_1.png';
import history_2 from 'assets/images/history_2.png';

const data = [5000000, 4000000, 4000000, 5000000, 8000000, 8200000, 6000000, 7200000, 6500000, 7200000, 8000000, 5000000];
const labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function Dashboard({ setActiveTab }) {
    const [activeHistoryTab, setActiveHistoryTab] = useState(1)

    const [areaChart] = useState({
        series: [{
            name: "Траты по карте",
            data: data
        }],
        options: {
            colors: ['#B7ADFF'],
            chart: {
                type: 'area',
                height: 200,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 1,
                    opacityFrom: 0.8,
                    opacityTo: 0.2,
                    stops: [0, 100],
                    colorStops: [
                        {
                            offset: 0,
                            color: "#B7ADFF",
                            opacity: 1
                        },
                        {
                            offset: 150,
                            color: "#FFFFFF",
                            opacity: 0.4
                        }
                    ]
                }
            },
            grid: {
                show: true,
                borderColor: '#ccc',
                strokeDashArray: 5,
                yaxis: {
                    lines: {
                        show: true
                    }
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 1,
                colors: ["#6A5ACD"]
            },
            xaxis: {
                categories: labels,
                labels: {
                    style: {
                        fontSize: '12px',
                        colors: 'rgba(25, 23, 22, 0.10)',
                    }
                },
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    style: {
                        fontSize: '10px',
                        colors: ['rgba(25, 23, 22, 0.10)'],
                    }
                },
            },
        },
    })

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

    return (
        <>
            <div className="row wave-animation">
                <div className="col-md-6">
                    <div className="dashboard-card-02">
                        <div className="d-flex justify-content-between">
                            <span className="dashboard-card-02-title">
                                Ваш общий счет
                            </span>
                        </div>
                        <div>
                            <div className="d-flex align-items-center">
                                Номер счета:
                                <span className="dashboard-card-02-subtitle mx-1"> XXXX XXXX XXXX</span>
                                <Eye className="dashboard-eye" />
                            </div>
                            <div className="dashboard-card-02-balance">
                                16.343.445,45
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="dashboard-buttons">
                        <button className="dashboard-button">
                            <DashboardButton1 />
                            Отправить деньги
                        </button>
                        <button className="dashboard-button">
                            <DashboardButton2 />
                            Заплатить по документу
                        </button>
                    </div>
                </div>
            </div>

            <div className="dashboard-title-02 wave-animation">
                Траты по карте

                <div className="dashboard-title-02-icon">
                    <ArrowRight />
                </div>
            </div>

            <div className={"dashboard-chart wave-animation"}>
                <ReactApexChart
                    options={areaChart.options}
                    series={areaChart.series}
                    type="area"
                    height={200}
                />
            </div>

            <div className="dashboard-title-02 wave-animation">
                История

                <div className="dashboard-title-02-icon">
                    <ArrowRight />
                </div>
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
            </div>

            <div className="dashboard-title-02">
                Бухгалтерия
            </div>

            <div className="d-flex flex-wrap gap-10">
                <div className="dashboard-accounting-card" onClick={() => setActiveTab(6)}>
                    <img src={accounting_1} alt="" width={32} height={32} />

                    <div>
                        Онлайн бухгалтерия <br />
                        для ИП
                    </div>
                </div>

                <div className="dashboard-accounting-card">
                    <img src={accounting_2} alt="" width={32} height={32} />

                    <div>
                        Кадровый <br />
                        и бухгалтерский учет
                    </div>
                </div>

                <div className="dashboard-accounting-card">
                    <img src={accounting_3} alt="" width={32} height={32} />

                    <div>
                        Зарплатный проект
                    </div>
                </div>

                <div className="dashboard-accounting-card">
                    <img src={accounting_4} alt="" width={32} height={32} />

                    <div>
                        Кабинет бухгалтера
                    </div>
                </div>

                <div className="dashboard-accounting-card">
                    <img src={accounting_5} alt="" width={32} height={32} />

                    <div>
                        Работа с самозанятыми
                    </div>
                </div>

                <div className="dashboard-accounting-card">
                    <img src={accounting_6} alt="" width={32} height={32} />

                    <div>
                        Электронный документ
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
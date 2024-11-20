import React from 'react'

import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';


function OnlineAccounting() {
    return (
        <>
            <div>
                Для доступа к онлайн бухгалтерии приобретите подписку на наш сервис
            </div>

            <div className="online-accounting-title">
                Для ИП
            </div>

            <div className="row row-gap-10">
                <div className="col-md-6">
                    <div className="online-accounting-card">
                        <div>
                            До 1 млрд. сум
                        </div>

                        <button className="online-accounting-card-btn">
                            50 000 сум в месяц
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="online-accounting-card">
                        <div>
                            Выше 1 млрд. сум
                        </div>

                        <button className="online-accounting-card-btn">
                            100 000 сум в месяц
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </div>

            <div className="online-accounting-title">
                Для Юр. лиц
            </div>

            <div className="row row-gap-10">
                <div className="col-md-6">
                    <div className="online-accounting-card">
                        <div>
                            До 1 млрд. сум
                        </div>

                        <button className="online-accounting-card-btn">
                            100 000 сум в месяц
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="online-accounting-card">
                        <div>
                            До 10 млрд. сум
                        </div>

                        <button className="online-accounting-card-btn">
                            200 000 сум в месяц
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="online-accounting-card">
                        <div>
                            Выше 10 млрд. сум
                        </div>

                        <button className="online-accounting-card-btn">
                            200 000 сум в месяц
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OnlineAccounting
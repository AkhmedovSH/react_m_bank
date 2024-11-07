import React from 'react'

import logout from 'assets/icons/logout.svg';
import { ReactComponent as Checkbox } from 'assets/icons/checkbox.svg';
import { ReactComponent as CheckboxActive } from 'assets/icons/checkbox_active.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow_right.svg';

function Profile() {
    return (
        <>
            <div className="profile-card wave-animation">
                <div>
                    Телефон
                </div>
                <div>
                    +998 97 737 0131
                </div>
            </div>

            <div className="profile-card wave-animation">
                <div>
                    Почта
                </div>
                <div>
                    kamronislamov.c@gmail.com
                </div>
            </div>

            <div className="profile-card wave-animation">
                <div>
                    Форма организации
                </div>
                <div>
                    ИП
                </div>
            </div>

            <div className="profile-card second wave-animation">
                <div>
                    Полная информация
                </div>
                <div className="d-flex gap-10">
                    MyGov
                    <ArrowRight />
                </div>
            </div>

            <div className="dashboard-title-03 wave-animation">
                Настройки сайта
            </div>

            <div className="row wave-animation">
                <div className="col-md-6">
                    <div className="language-block">
                        <CheckboxActive />

                        Русский
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="language-block">
                        <Checkbox />

                        O’zbekcha
                    </div>
                </div>
            </div>

            <div className="profile-card wave-animation">
                <div>
                    Звук уведомлений
                </div>
                <div>
                    <label className="switch">
                        <input id="iosToggle" type="checkbox" />
                        <div className="switch-btn"></div>
                    </label>

                </div>
            </div>

            <div className="profile-card wave-animation">
                <div className="text-danger">
                    Выйти из аккаунта
                </div>
                <div>
                    <img src={logout} alt="" width={24} />
                </div>
            </div>
        </>
    )
}

export default Profile
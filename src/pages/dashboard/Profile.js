import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoutIcon from 'assets/icons/logout.svg';
import { ReactComponent as Checkbox } from 'assets/icons/checkbox.svg';
import { ReactComponent as CheckboxActive } from 'assets/icons/checkbox_active.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow_right.svg';
import { formatPhone } from 'configs/helper';

function Profile() {
    const navigate = useNavigate()
    const { i18n, t } = useTranslation()

    const reduxAccount = useSelector(state => state.account)

    async function logout() {
        navigate('/auth/welcome')
    }

    function changeLanguage(language = 'uz') {
        i18n.changeLanguage(language);

        if (language === 'ru') {
            localStorage.setItem('lang', 'ru');
        }
        if (language === 'uz') {
            localStorage.setItem('lang', 'uz');
        }
    };


    return (
        <>
            <div className="profile-card wave-animation">
                <div>
                    {t('phone')}
                </div>
                <div>
                    {formatPhone(reduxAccount.phone_number)}
                </div>
            </div>

            <div className="profile-card wave-animation">
                <div>
                    {t('email')}
                </div>
                <div>
                    {reduxAccount.email}
                </div>
            </div>

            <div className="profile-card wave-animation">
                <div>
                    {t('organization_form')}
                </div>
                <div>
                    {t('ip')}
                </div>
            </div>

            <Link className="profile-card second wave-animation" to="https://my.gov.uz/ru" target='_blank'>
                <div>
                    {t('full_info')}
                </div>
                <div className="d-flex gap-10">
                    MyGov
                    <ArrowRight />
                </div>
            </Link>

            <div className="dashboard-title-03 wave-animation">
                {t('site_settings')}
            </div>

            <div className="row wave-animation">
                <div className="col-md-6">
                    <div className="language-block" onClick={() => changeLanguage('ru')}>
                        {i18n.language === 'ru' ?
                            <CheckboxActive />
                            :
                            <Checkbox />
                        }

                        {t('russian')}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="language-block" onClick={() => changeLanguage('uz')}>
                        {i18n.language === 'uz' ?
                            <CheckboxActive />
                            :
                            <Checkbox />
                        }

                        {t('uzbek')}
                    </div>
                </div>
            </div>

            <div className="profile-card wave-animation">
                <div>
                    {t('notification_sound')}
                </div>
                <div>
                    <label className="switch">
                        <input id="iosToggle" type="checkbox" />
                        <div className="switch-btn"></div>
                    </label>

                </div>
            </div>

            <div className="profile-card wave-animation cursor" onClick={() => logout()}>
                <div className="text-danger">
                    {t('logout')}
                </div>
                <div>
                    <img src={logoutIcon} alt="" width={24} />
                </div>
            </div>
        </>
    )
}

export default Profile

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

import logo from 'assets/icons/logo.svg';
import notification from 'assets/icons/notification.svg';

import { ReactComponent as Dashboard1 } from 'assets/icons/dashboard_1.svg';
import { ReactComponent as Dashboard2 } from 'assets/icons/dashboard_2.svg';
import { ReactComponent as Dashboard3 } from 'assets/icons/dashboard_3.svg';
import { ReactComponent as Dashboard4 } from 'assets/icons/dashboard_4.svg';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import dashboard_avatar from 'assets/images/dashboard_avatar.png';

import Dashboard from './Dashboard';
import Profile from './Profile';
import Transations from './Transations';
import History from './History';
import Notifications from './Notifications';
import OnlineAccounting from './OnlineAccounting';
import Accounts from './Accounts';

import { get, httpOk } from 'configs/api';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from 'configs/helper';

function Index() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const reduxAccount = useSelector(state => state.account);

    const [activeTab, setActiveTab] = useState(1);
    const [prevActiveTab, setPrevActiveTab] = useState(1);

    function changeActiveTab(tab) {
        setPrevActiveTab(activeTab);
        setActiveTab(tab);
    }

    async function getUser() {
        const response = await get('/api/auth/user/');
        if (httpOk(response)) {
            dispatch({ type: 'SET_ACCOUNT', payload: response.data });
        }
    }

    async function getBanks() {
        const response = await get('/api/bank/bills/');
        if (httpOk(response)) {
            var total = 0;
            for (let i = 0; i < response.data.length; i++) {
                total = response.data[i].balance;
            }
            dispatch({ type: 'SET_ACCOUNT', payload: { total_bills: total } });
            dispatch({ type: 'SET_BILLS', payload: response.data });
        }
    }

    useEffect(() => {
        getUser();
        getBanks();
    }, []);

    return (
        <>
            <div className="dashboard">
                <div className={`dashboard-card tab-${activeTab}`}>
                    <div className="mobile-show d-flex justify-content-between align-items-center">
                        <img src={logo} alt="" />
                        <img src={notification} alt="" />
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        {activeTab !== 5 ? (
                            <div className="dashboard-title">
                                {t('good_morning')} <span className="text-primary">{reduxAccount.first_name}</span>!
                                <div className="dashboard-subtitle">
                                    {t('summary_today')}
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex align-items-center gap-20">
                                <div>
                                    <img src={dashboard_avatar} alt="" width={60} />
                                </div>
                                <div className="dashboard-title">
                                    {reduxAccount.last_name} {reduxAccount.first_name}
                                    <div className="dashboard-subtitle">
                                        {formatDate(reduxAccount.birth_date)}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="d-flex align-items-center gap-10 mobile-hide">
                            <div className="dashboard-tabs">
                                <div
                                    className={`dashboard-tab ${activeTab === 1 ? 'active' : ''}`}
                                    onClick={() => changeActiveTab(1)}
                                >
                                    <Dashboard1 />
                                </div>
                                <div
                                    className={`dashboard-tab ${activeTab === 2 ? 'active' : ''}`}
                                    onClick={() => changeActiveTab(2)}
                                >
                                    <Dashboard2 />
                                </div>
                                <div
                                    className={`dashboard-tab ${activeTab === 3 ? 'active' : ''}`}
                                    onClick={() => changeActiveTab(3)}
                                >
                                    <Dashboard3 />
                                </div>
                                <div
                                    className={`dashboard-tab ${activeTab === 4 ? 'active' : ''}`}
                                    onClick={() => changeActiveTab(4)}
                                >
                                    <Dashboard4 />
                                </div>
                            </div>
                            {activeTab !== 5 ? (
                                <div className="dashboard-avatar" onClick={() => changeActiveTab(5)}>
                                    <img src={dashboard_avatar} alt="" />
                                </div>
                            ) : (
                                <div className="dashboard-back" onClick={() => changeActiveTab(prevActiveTab)}>
                                    <ArrowLeft />
                                </div>
                            )}
                        </div>
                    </div>

                    {activeTab === 1 && <Dashboard setActiveTab={setActiveTab} />}
                    {activeTab === 2 && <Transations />}
                    {activeTab === 3 && <History />}
                    {activeTab === 4 && <Notifications />}
                    {activeTab === 5 && <Profile />}
                    {activeTab === 6 && <OnlineAccounting />}
                    {activeTab === 7 && <Accounts />}
                </div>

                {/* Mobile bottom bar */}
                <div className="mobile-show-flex bottom-bar">
                    <div className="bottom-bar-tabs">
                        <div
                            className={`bottom-bar-tab ${activeTab === 1 || activeTab === 6 ? 'active' : ''}`}
                            onClick={() => changeActiveTab(1)}
                        >
                            <Dashboard1 />
                        </div>
                        <div
                            className={`bottom-bar-tab ${activeTab === 2 ? 'active' : ''}`}
                            onClick={() => changeActiveTab(2)}
                        >
                            <Dashboard2 />
                        </div>
                        <div
                            className={`bottom-bar-tab ${activeTab === 3 ? 'active' : ''}`}
                            onClick={() => changeActiveTab(3)}
                        >
                            <Dashboard3 />
                        </div>
                        <div
                            className={`bottom-bar-tab ${activeTab === 4 ? 'active' : ''}`}
                            onClick={() => changeActiveTab(4)}
                        >
                            <Dashboard4 />
                        </div>
                        <div className="dashboard-avatar" onClick={() => changeActiveTab(5)}>
                            <img src={dashboard_avatar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

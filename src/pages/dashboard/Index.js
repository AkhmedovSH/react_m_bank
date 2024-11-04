import React, { useState } from 'react'

import logo from 'assets/icons/logo.svg';
import notification from 'assets/icons/notification.svg';


import { ReactComponent as Dashboard1 } from 'assets/icons/dashboard_1.svg';
import { ReactComponent as Dashboard2 } from 'assets/icons/dashboard_2.svg';
import { ReactComponent as Dashboard3 } from 'assets/icons/dashboard_3.svg';
import { ReactComponent as Dashboard4 } from 'assets/icons/dashboard_4.svg';

import dashboard_avatar from 'assets/images/dashboard_avatar.png';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Transations from './Transations';
import History from './History';
import Notifications from './Notifications';

function Index() {
    const [activeTab, setActiveTab] = useState(1)


    return (
        <>
            <div className="dashboard">
                <div className="dashboard-card">
                    <div className="mobile-show d-flex justify-content-between align-items-center">
                        <img src={logo} alt="" />

                        <img src={notification} alt="" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="dashboard-title">
                            Доброе утро, Камрон!
                            <div className="dashboard-subtitle">
                                Сводка на сегодня
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-10 mobile-hide">
                            <div className="dashboard-tabs">
                                <div className={"dashboard-tab " + (activeTab === 1 ? 'active' : '')} onClick={() => setActiveTab(1)}>
                                    <Dashboard1 />
                                </div>
                                <div className={"dashboard-tab " + (activeTab === 2 ? 'active' : '')} onClick={() => setActiveTab(2)}>
                                    <Dashboard2 />
                                </div>
                                <div className={"dashboard-tab " + (activeTab === 3 ? 'active' : '')} onClick={() => setActiveTab(3)}>
                                    <Dashboard3 />
                                </div>
                                <div className={"dashboard-tab " + (activeTab === 4 ? 'active' : '')} onClick={() => setActiveTab(4)}>
                                    <Dashboard4 />
                                </div>
                            </div>
                            <div className="dashboard-avatar" onClick={() => setActiveTab(5)}>
                                <img src={dashboard_avatar} alt="" />
                            </div>
                        </div>
                    </div>

                    {activeTab === 1 &&
                        <Dashboard />
                    }
                    {activeTab === 2 &&
                        <Transations />
                    }
                    {activeTab === 3 &&
                        <History />
                    }
                    {activeTab === 4 &&
                        <Notifications />
                    }
                    {activeTab === 5 &&
                        <Profile />
                    }
                </div>

                <div className="mobile-show-flex bottom-bar">
                    <div className="bottom-bar-tabs">
                        <div className={"bottom-bar-tab " + (activeTab === 1 ? 'active' : '')} onClick={() => setActiveTab(1)}>
                            <Dashboard1 />
                        </div>
                        <div className={"bottom-bar-tab " + (activeTab === 2 ? 'active' : '')} onClick={() => setActiveTab(2)}>
                            <Dashboard2 />
                        </div>
                        <div className={"bottom-bar-tab " + (activeTab === 3 ? 'active' : '')} onClick={() => setActiveTab(3)}>
                            <Dashboard3 />
                        </div>
                        <div className={"bottom-bar-tab " + (activeTab === 4 ? 'active' : '')} onClick={() => setActiveTab(4)}>
                            <Dashboard4 />
                        </div>
                        <div className="dashboard-avatar">
                            <img src={dashboard_avatar} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
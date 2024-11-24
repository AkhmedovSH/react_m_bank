import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import search from 'assets/icons/search.svg';

import history_1 from 'assets/images/history_1.png';
import history_2 from 'assets/images/history_2.png';

function History() {
    const { t } = useTranslation();

    const historyTabs = [
        {
            id: 1,
            name: t('all_transactions')
        },
        {
            id: 2,
            name: t('outgoing')
        },
        {
            id: 3,
            name: t('incoming')
        },
        {
            id: 4,
            name: t('pending_signature')
        },
    ];

    const [activeHistoryTab, setActiveHistoryTab] = useState(1);

    return (
        <>
            <div className="dashboard-title-02 wave-animation">
                {t('history')}
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
                        <input type="text" placeholder={t('search')} />
                        <img src={search} alt="" className="icon" />
                    </div>
                </div>

                <div className="dashboard-history-date">
                    {t('today')}, 23 октября
                </div>
                <div className="dashboard-history-card">
                    <img src={history_1} alt="Xeond" />
                    <div className="dashboard-history-card-content">
                        <div className="dashboard-history-card-title">
                            {t('ooo,_xeond')}
                        </div>
                        <div className="dashboard-history-card-description">
                            {t('transaction_for_design_payment_from_company_ooo_xeond_was_processed_on_october_23,_2024,_at_14:30_tashkent_time._vat_included_in_price')}
                        </div>
                        <div className="dashboard-history-card-subtitle">
                            {t('transaction')} №133
                        </div>
                    </div>

                    <div className="dashboard-history-card-right">
                        <div className="dashboard-history-card-balance">
                            -11.450.000 {t('sum')}
                        </div>
                        <div className="dashboard-history-card-status">
                            {t('successful_transaction')}
                        </div>
                        <div className="dashboard-history-card-card_number">
                            {t('card')} **** 9934
                        </div>
                    </div>
                </div>

                <div className="dashboard-history-card">
                    <img src={history_2} alt="Xeond" />
                    <div className="dashboard-history-card-content">
                        <div className="dashboard-history-card-title">
                            {t('ooo,_formofvisual')}
                        </div>
                        <div className="dashboard-history-card-description">
                            {t('payment_for_motion_video_from_company_ooo_formofvisual_was_processed_on_october_23,_2024,_at_11:10_tashkent_time._vat_included_in_price')}
                        </div>
                        <div className="dashboard-history-card-subtitle">
                            {t('transaction')} №132
                        </div>
                    </div>

                    <div className="dashboard-history-card-right">
                        <div className="dashboard-history-card-balance">
                            -3.000.000 {t('sum')}
                        </div>
                        <div className="dashboard-history-card-status">
                            {t('successful_transaction')}
                        </div>
                        <div className="dashboard-history-card-card_number">
                            {t('card')} **** 9934
                        </div>
                    </div>
                </div>

                <div className="dashboard-history-date">
                    {t('three_days_ago')}, 20 октября
                </div>

                <div className="dashboard-history-card">
                    <img src={history_2} alt="Xeond" />
                    <div className="dashboard-history-card-content">
                        <div className="dashboard-history-card-title">
                            {t('ooo,_formofvisual')}
                        </div>
                        <div className="dashboard-history-card-description">
                            {t('payment_for_motion_video_from_company_ooo_formofvisual_was_processed_on_october_23,_2024,_at_11:10_tashkent_time._vat_included_in_price')}
                        </div>
                        <div className="dashboard-history-card-subtitle">
                            {t('transaction')} №132
                        </div>
                    </div>

                    <div className="dashboard-history-card-right">
                        <div className="dashboard-history-card-balance">
                            -3.000.000 {t('sum')}
                        </div>
                        <div className="dashboard-history-card-status">
                            {t('successful_transaction')}
                        </div>
                        <div className="dashboard-history-card-card_number">
                            {t('card')} **** 9934
                        </div>
                    </div>
                </div>

                <div className="dashboard-history-card">
                    <img src={history_1} alt="Xeond" />
                    <div className="dashboard-history-card-content">
                        <div className="dashboard-history-card-title">
                            {t('ooo,_xeond')}
                        </div>
                        <div className="dashboard-history-card-description">
                            {t('transaction_for_design_payment_from_company_ooo_xeond_was_processed_on_october_23,_2024,_at_14:30_tashkent_time._vat_included_in_price')}
                        </div>
                        <div className="dashboard-history-card-subtitle">
                            {t('transaction')} №133
                        </div>
                    </div>

                    <div className="dashboard-history-card-right">
                        <div className="dashboard-history-card-balance">
                            -11.450.000 {t('sum')}
                        </div>
                        <div className="dashboard-history-card-status">
                            {t('successful_transaction')}
                        </div>
                        <div className="dashboard-history-card-card_number">
                            {t('card')} **** 9934
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default History;

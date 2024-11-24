import React from 'react'
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function OnlineAccounting() {
    const { t } = useTranslation();

    return (
        <>
            <div>
                {t('online_accounting_access_message')}
            </div>

            <div className="online-accounting-title">
                {t('for_individual_entrepreneurs')}
            </div>

            <div className="row row-gap-10">
                <div className="col-md-6">
                    <div className="online-accounting-card">
                        <div>
                            {t('up_to_1_billion_sum')}
                        </div>

                        <button className="online-accounting-card-btn">
                            {t('price_50000_sum_per_month')}
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="online-accounting-card">
                        <div>
                            {t('above_1_billion_sum')}
                        </div>

                        <button className="online-accounting-card-btn">
                            {t('price_100000_sum_per_month')}
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </div>

            <div className="online-accounting-title">
                {t('for_legal_entities')}
            </div>

            <div className="row row-gap-10">
                <div className="col-md-6">
                    <div className="online-accounting-card">
                        <div>
                            {t('up_to_1_billion_sum')}
                        </div>

                        <button className="online-accounting-card-btn">
                            {t('price_100000_sum_per_month')}
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="online-accounting-card">
                        <div>
                            {t('up_to_10_billion_sum')}
                        </div>

                        <button className="online-accounting-card-btn">
                            {t('price_200000_sum_per_month')}
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="online-accounting-card">
                        <div>
                            {t('above_10_billion_sum')}
                        </div>

                        <button className="online-accounting-card-btn">
                            {t('price_200000_sum_per_month')}
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OnlineAccounting

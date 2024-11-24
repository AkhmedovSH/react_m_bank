import React from 'react'
import { useTranslation } from 'react-i18next';

function Notifications() {
  const { t } = useTranslation();

  return (
    <>
      <div className="dashboard-title-03 wave-animation">
        {t('notifications')}
      </div>

      <div className="notification wave-animation">
        <div className="notification-title">
          {t('end_of_month_and_tax_payment')}
        </div>
        <div className="notification-description">
          {t('tax_payment_description')}
        </div>
      </div>

      <div className="notification wave-animation">
        <div className="notification-title">
          {t('salary_payment')}
        </div>
        <div className="notification-description">
          {t('salary_payment_description')}
        </div>
      </div>
    </>
  )
}

export default Notifications

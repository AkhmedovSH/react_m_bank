import React from 'react'

function Notifications() {
  return (
    <>
      <div className="dashboard-title-03 wave-animation">
        Уведомления
      </div>

      <div className="notification wave-animation">
        <div className="notification-title">
          Скоро конец месяца и время уплаты налогов
        </div>
        <div className="notification-description">
          Скоро конец месяца, и это значит, что пора платить налоги. Каждый год граждане и предприятия должны выполнять свои налоговые обязательства. Это важный процесс, который финансирует общественные услуги, такие как образование и здравоохранение. Не забудьте подготовить документы и проверить расчеты, чтобы избежать проблем.
        </div>
      </div>

      <div className="notification wave-animation">
        <div className="notification-title">
          Выплата зарплат
        </div>
        <div className="notification-description">
          Конец месяца уже на подходе, и это значит, что пора радовать своих сотрудников зарплатой! Не забывайте, что своевременные выплаты — это не только закон, но и способ поддержать командный дух. Убедитесь, что все расчеты верны, чтобы ваши коллеги могли с радостью встретить новый месяц!        </div>
      </div>
    </>
  )
}

export default Notifications
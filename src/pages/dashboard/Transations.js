import React, { useState } from 'react'

import { ReactComponent as Dashboard1 } from 'assets/icons/dashboard_1.svg';
import { ReactComponent as Transaction } from 'assets/icons/transaction.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow_right.svg';
import { ReactComponent as Download } from 'assets/icons/download.svg';

function Transations() {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      <div className="transaction-tabs wave-animation">
        <div className={"transaction-tab " + (activeTab === 1 ? 'active' : '')} onClick={() => setActiveTab(1)}>
          Транзакции
          <div className="bottom-border" />
        </div>
        <div className={"transaction-tab " + (activeTab === 2 ? 'active' : '')} onClick={() => setActiveTab(2)}>
          Валюта
          <div className="bottom-border" />
        </div>
      </div>

      <div className="row wave-animation">
        <div className="col-md-6">
          <div className="transaction-card">
            <div className="transaction-card-title">
              Получатель
            </div>

            <div>
              <div className="transaction-card-name">
                ISLAMOV KOMRONKHON
              </div>
              <div className="transaction-card-number">
                9860 2704 0822 5265
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="transaction-card">
            <div className="transaction-card-title">
              Сумма транзакции
            </div>


            <div className="transaction-card-number">
              10 000 000 сум
            </div>
          </div>
        </div>
      </div>

      <div className="fz12 wave-animation">
        Комиссия 0%
      </div>

      <div className="row wave-animation">
        <div className="col-md-6">
          <div className="transaction-card">
            <div className="transaction-card-title second">
              Ваш общий счет
            </div>

            <div>
              <div className="transaction-card-name">
                Ваш остаток после транзакции: <b>6.343.445,45</b>
              </div>
              <div className="transaction-card-number">
                16.343.445,45
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="dashboard-buttons">
            <button className="dashboard-button second">
              <Transaction />
              По документу
            </button>
            <button className="transaction-button">
              Оплатить
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="transaction-status wave-animation">
        <div>
          Транзакция на счёт <br />
          <span className="text-primary">*5165</span> прошла успешно!
        </div>

        <div className="d-flex gap-10">
          <div className="transaction-status-ronded-btn">
            <Dashboard1 />
          </div>
          <div className="transaction-status-btn">
            Скачать чек
            <Download />
          </div>
        </div>
      </div>
    </>
  )
}

export default Transations
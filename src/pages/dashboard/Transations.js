import React, { useState } from 'react'
import { handleFocus } from 'configs/helper'

import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';
import { ReactComponent as MenuArrow } from 'assets/icons/menu_arrow.svg';

import { ReactComponent as TransationBtn1 } from 'assets/icons/dashboard_button_2.svg';
import { ReactComponent as TransationBtn2 } from 'assets/icons/transaction.svg';


function Transations() {
	const [showMenu, setShowMenu] = useState(false)
	const [showMenu2, setShowMenu2] = useState(false)

	// const [data, setData] = useState({

	// })

	return (
		<>
			<div className="d-flex gap-10 wave-animation">
				<button className="transation-btn">
					<TransationBtn1 />
					Заплатить по фото
				</button>
				<button className="transation-btn">
					<TransationBtn2 />
					По документу
				</button>
			</div>

			<div className="dashboard-title-02 wave-animation">
				Отправитель
			</div>

			<div className="transaction-gradient-card wave-animation">
				<div>
					OOO “ABEXLAB”
				</div>

				<div className="transaction-gradient-card-price">
					16.343.445,45
				</div>
			</div>

			<div className="row wave-animation">
				<div className="col-md-6">
					<div className="transation-input">
						<input type="date" />
					</div>
					<div className="transaction-description">
						Выберите дату исполнения платежа в списке <br />
						или укажите свою.
					</div>
				</div>

				<div className="col-md-6">
					<div className="transation-input second">
						<div className="transation-input-left">
							Номер платежа
						</div>
						<input type="number" onFocus={(e) => handleFocus(e)} />
					</div>
					<div className="transaction-description">
						Номер платежа сгенерирован автоматически. Вы можете <br />
						изменить его, нажав на поле ввода.
					</div>
				</div>
			</div>

			<div className="dashboard-title-02 wave-animation">
				Получатель
			</div>

			<div className="wave-animation">
				<div className="transation-input">
					<input type="text" placeholder="МФО Банка" />
					<MenuArrow className="right-icon" onClick={() => setShowMenu(!showMenu)} />

					<div className={`transaction-menu ${showMenu ? 'active' : ''}`}>
						<div className="transaction-menu-item">
							<div>Центральный банк</div>
							<div>1000001</div>
						</div>
						<div className="transaction-menu-item">
							<div>Orient Finans Bank</div>
							<div>1000002</div>
						</div>
						<div className="transaction-menu-item">
							<div>Sanoat Qurilish Bank</div>
							<div>1000004</div>
						</div>
						<div className="transaction-menu-item">
							<div>Kapital Bank</div>
							<div>1000005</div>
						</div>
						<div className="transaction-menu-item">
							<div>Turon Bank</div>
							<div>1000006</div>
						</div>
					</div>
				</div>
				<div className="transation-input">
					<input type="text" placeholder="Счет получателя" />
				</div>
				<div className="transation-input">
					<input type="text" placeholder="ИНН" />
				</div>
				<div className="transation-input">
					<input type="text" placeholder="Наименоавние организации" />
				</div>
			</div>

			<div className="dashboard-title-02 wave-animation">
				Описание платежа
			</div>

			<div className="wave-animation">
				<div className="transation-input">
					<input type="text" placeholder="Сумма платежа" />
				</div>
				<div className="transation-input">
					<input type="text" placeholder="Код назначения платежа" />
					<MenuArrow className="right-icon" onClick={() => setShowMenu2(!showMenu2)} />

					<div className={`transaction-menu ${showMenu2 ? 'active' : ''}`}>
						<div className="transaction-menu-item">
							<div>Оплата услуг</div>
							<div>1000001</div>
						</div>
						<div className="transaction-menu-item">
							<div>Оплата налогов</div>
							<div>1000002</div>
						</div>
						<div className="transaction-menu-item">
							<div>Оплата счетов</div>
							<div>1000004</div>
						</div>
						<div className="transaction-menu-item">
							<div>Перевод</div>
							<div>1000005</div>
						</div>
					</div>

				</div>
				<div className="transation-input">
					<input type="text" placeholder="Назначение платежа" />
				</div>
			</div>

			<div className="auth-btn second start primary-hover">
				Оплатить
				<div className="devider" />
				<ArrowRightIcon />
			</div>
		</>
	)
}

export default Transations
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

import activity_2 from 'assets/images/activity_2.png'

function Index() {
	const navigate = useNavigate()
	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">

				<div className="activity-card third">
					<img src={activity_2} alt="" />
					Подключение к UZUM Market
				</div>

				<div className="open-account-card second">

					<div className="open-account-card-title">
						Всё готово, ваш запрос <br />
						<span className="text-primary">в обработке</span>!
					</div>

					<div className="open-account-card-description">
						Через пару минут с вами свяжется наш  оператор для уточнения деталей.
					</div>

					<div className="auth-buttons w-100">
						<button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
							<ArrowLeft />
						</button>

						<Link className="auth-btn start second" to="/dashboard">
							Перейти в кабинет!
							<div className="devider" />
							<ArrowRightIcon />
						</Link>
					</div>
				</div>



			</div>

			<div></div>
		</>
	)
}

export default Index
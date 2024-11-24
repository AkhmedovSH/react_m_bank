import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Success() {
	const navigate = useNavigate()

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">


				<div className="open-account-card second">

					<div className="open-account-card-title">
						Всё готово, ваш запрос <br />
						в <span className="text-primary"> обработке</span>!
					</div>

					<div className="auth-buttons w-100">
						<button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
							<ArrowLeftIcon />
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

export default Success
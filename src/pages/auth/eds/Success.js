import React from 'react'

import { Link } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Success() {
	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">
				<div className="auth-title text-center">
					Всё готово, <br />
					вы добавили ИП!
				</div>

				<div className="auth-buttons">
					<Link className="auth-btn start" to="/auth/activity">
						Продолжить
						<div className="devider" />
						<ArrowRightIcon />
					</Link>
				</div>
			</div>

			<div></div>
		</>
	)
}

export default Success
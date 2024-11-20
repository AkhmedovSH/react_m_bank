import React from 'react'

import { Link } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import error from 'assets/icons/error.svg'

function Error() {
	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">
				<div className="open-account-card">
					<img src={error} alt="" width={64} />

					<div className="open-account-card-title">
						Ошибка открытия счета
					</div>

					<div className="open-account-card-description">
						Пожалуйста, завершите регистрацию аккаунта и внесите нужные данные чтобы открыть счет!
					</div>
				</div>

				<div className="auth-buttons w-100">
					<Link className="auth-btn second" to="/dashboard">
						Завершить регистрацию аккаунта
					</Link>
				</div>
			</div>

			<div></div>
		</>
	)
}

export default Error 
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
						Ошибка ЭЦП
					</div>

					<div className="open-account-card-description">
						Произошла ошибка с подтверждением ЭЦП,
						попробуйте ещё раз
					</div>
				</div>

				<div className="auth-buttons w-100">
					<Link className="auth-btn second" to="/auth/eds/upload">
						Попробовать ещё раз
					</Link>
				</div>
			</div>

			<div></div>
		</>
	)
}

export default Error 
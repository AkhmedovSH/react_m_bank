import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';

function Index() {
	const navigate = useNavigate()

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">
				<div className="auth-title text-center">
					У вас есть компания?
				</div>

				<div className="auth-buttons w-75">
					<button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
						<ArrowLeft />
					</button>

					<Link className="auth-btn second rounded" to="/auth/eds">
						Есть
					</Link>

					<Link className="auth-btn second rounded" to="/auth/open-company/operator">
						Нет
					</Link>
				</div>
			</div>

			<div></div>
		</>
	)
}

export default Index 
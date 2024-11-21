import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Index() {
	const navigate = useNavigate()

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">
				<div className="auth-title">
					Чтобы открыть счет <br />
					нажмите кнопку ниже
				</div>

				<div className="auth-buttons">
					<button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
						<ArrowLeft />
					</button>

					<Link className="auth-btn start" to="/auth/open-account/error">
						Открыть счет
						<div className="devider" />
						<ArrowRightIcon />
					</Link>
				</div>
			</div>

			<div></div>
		</>
	)
}

export default Index
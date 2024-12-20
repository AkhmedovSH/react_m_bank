import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function AddCompany() {
	const navigate = useNavigate()

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">
				<div className="auth-title text-center">
					Чтобы добавить компанию <br />
					нажмите кнопку ниже
				</div>

				<div className="auth-buttons">
					<button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
						<ArrowLeft />
					</button>

					<Link className="auth-btn" to="/auth/eds">
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

export default AddCompany
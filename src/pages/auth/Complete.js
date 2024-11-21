import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';
import { get, httpOk } from 'configs/api';

function RegisterPhone() {
	const navigate = useNavigate()
	const isRegister = localStorage.getItem('isRegister')

	const [user, setUser] = useState({})

	async function getUser() {
		const response = await get('/api/auth/user/')
		if (httpOk(response)) {
			setUser(response.data)
		}
	}

	useEffect(() => {
		getUser()
	}, []);

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">
				{isRegister === 'true' ?
					<div className="auth-title text-center">
						Привет <span className="text-primary">{user.first_name}</span>, <br />
						начинаем работу?
					</div>
					:
					<div className="auth-title text-center">
						С возвращением <br />
						в приложение, <span className="text-primary">{user.first_name}</span>!
					</div>
				}

				<div className="auth-buttons">
					<button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
						<ArrowLeft />
					</button>

					<Link className="auth-btn" to="/dashboard">
						Перейти в кабинет!
						<div className="devider" />
						<ArrowRightIcon />
					</Link>
				</div>
			</div>

			<div></div>
		</>
	)
}

export default RegisterPhone
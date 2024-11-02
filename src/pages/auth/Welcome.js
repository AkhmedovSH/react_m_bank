import React from 'react'
import { Link } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Welcome() {
	return (
		<>
			<div className="auth-bg welcome">
				<img src={logo} alt="" className="mobile-show logo" />


				<div className="welcome-container">
					<img src={logo} alt="" className="logo" />

					<h1>
						Добро пожаловать в MBank!
					</h1>

					<div className="w-100 d-flex justify-content-center gap-10">
						<Link className="auth-btn small mobile-show" to="/auth/login" onClick={() => localStorage.setItem('isRegister', false)}>
							Вход
						</Link>

						<Link className="auth-btn" to="/auth/register" onClick={() => localStorage.setItem('isRegister', true)}>
							Регистрация
							<div className="devider"></div>
							<ArrowRightIcon />
						</Link>
					</div>
				</div>

				<Link className="auth-btn small welcome-login" to="/auth/login" onClick={() => localStorage.setItem('isRegister', false)}>
					Войти
				</Link>
			</div>
		</>
	)
}

export default Welcome
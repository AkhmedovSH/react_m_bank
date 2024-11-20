import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import check from 'assets/icons/check.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';
import { httpOk, post } from 'configs/api';

function Register() {
	const navigate = useNavigate()

	const [data, setData] = useState({
		first_name: '',
		last_name: '',
		middle_name: '',
		birhday: '',
		email: '',
		password: '',
		agreement: false,
	})

	async function login() {
		const response = await post('/api/auth/login', data)
		if (httpOk(response)) {
			navigate('/auth/phone')
		}
	}

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content">
				<div className="auth-title">
					Вход в аккаунт
				</div>

				<div className="form-group">
					<label htmlFor="email">Почта</label>
					<input type="text" className="auth-input" id='email' placeholder='yourmail@gmail.com'
						value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
				</div>

				<div className="form-group">
					<label htmlFor="password">Пароль</label>
					<input type="password" className="auth-input" id='password' placeholder='10+ символов'
						value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
				</div>

				<div className="agreement">
					<div className={"agreement-checkbox " + (data.agreement ? 'active' : '')} onClick={() => setData({ ...data, agreement: !data.agreement })} >
						<img src={check} alt="" />
					</div>
					<div>
						Я согласен с
						<span className="text-underline cursor">Условиями предоставления услуг MBank</span>
						, Политикой
						конфиденциальности и настройками уведомлений по умолчанию.
					</div>
				</div>
			</div>

			<div className="auth-buttons">
				<button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
					<ArrowLeft />
				</button>

				<button className="auth-btn start" onClick={() => login()} disabled={!data.agreement}>
					Далее
					<div className="devider" />

					<ArrowRightIcon />
				</button>
			</div>
		</>
	)
}

export default Register
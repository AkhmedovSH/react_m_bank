import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { httpOk, post } from 'configs/api';

import logo from 'assets/icons/logo.svg'
import check from 'assets/icons/check.svg'
import validation from 'assets/icons/validation.svg'
import eye from 'assets/icons/eye.svg'
import eye_closed from 'assets/icons/eye_closed.svg'

import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Register() {
	const navigate = useNavigate()

	const [errors, setErrors] = useState({});
	const [data, setData] = useState({
		email: '',
		password: '',
		agreement: false,
		showPassword: false,
	})

	function validateFields() {
		const newErrors = {};

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!data.email.trim() || !emailRegex.test(data.email)) newErrors.email = 'Некорректный email';

		const passwordRegex = /.{10,}/;
		if (!data.password.trim() || !passwordRegex.test(data.password)) newErrors.password = 'Пароль должен содержать 10+ символов';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}

	async function login() {
		if (!validateFields()) return;

		const response = await post('/api/auth/login', data, { guest: true })
		if (httpOk(response)) {
			navigate(`/auth/phone?login_session_id=${response.data.login_session_id}`)
		}
	}

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content">
				<div className="auth-title">
					Вход в аккаунт
				</div>

				<div className={`form-group ${errors.email && 'error'}`}>
					<label htmlFor="email">Почта</label>
					<input type="text" className="auth-input" id='email' placeholder='yourmail@gmail.com'
						value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />

					<div className="message">
						<img src={validation} alt="" width={24} />
						{errors.email}
					</div>
				</div>

				<div className={`form-group ${errors.password && 'error'}`}>
					<label htmlFor="password">Пароль</label>
					<div className="position-relative">
						<input type={data.showPassword ? "text" : "password"}
							className="auth-input" id='password' placeholder='10+ символов'
							value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />

						<div className="right-icon" onClick={() => setData({ ...data, showPassword: !data.showPassword })}>
							{data.showPassword ?
								<img src={eye} alt="" />
								:
								<img src={eye_closed} alt="" />
							}
						</div>
					</div>

					<div className="message">
						<img src={validation} alt="" width={24} />
						{errors.password}
					</div>
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
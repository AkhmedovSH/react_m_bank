import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'

import { useNavigate } from 'react-router-dom'

import { httpOk, post } from 'configs/api'
import { formatDateBackend } from 'configs/helper'

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
		first_name: '',
		last_name: '',
		middle_name: '',
		birth_date: '',
		email: '',
		password: '',
		agreement: false,
		showPassword: false,
	})

	function validateFields() {
		const newErrors = {};

		if (!data.first_name.trim()) newErrors.first_name = 'Обязательное поле';
		if (!data.last_name.trim()) newErrors.last_name = 'Обязательное поле';
		if (!data.middle_name.trim()) newErrors.middle_name = 'Обязательное поле';

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!data.email.trim() || !emailRegex.test(data.email)) newErrors.email = 'Некорректный email';

		const passwordRegex = /.{10,}/;
		if (!data.password.trim() || !passwordRegex.test(data.password)) newErrors.password = 'Пароль должен содержать 10+ символов';

		const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
		if (!data.birth_date.trim() || !dateRegex.test(data.birth_date)) newErrors.birth_date = 'Некорректная дата';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}


	async function register() {
		if (!validateFields()) return;

		var sendData = { ...data }
		sendData.birth_date = formatDateBackend(data.birth_date)
		console.log(sendData);

		const response = await post('/api/auth/register/', sendData, { guest: true })
		if (httpOk(response)) {
			navigate(`/auth/phone?session_id=${response.data.session_id}`)
		}
	}

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content">
				<div className="auth-title">
					Регистрация аккаунта
				</div>

				<div className="auth-group">
					<div className={`form-group ${errors.first_name && 'error'}`}>
						<label htmlFor="first_name">Имя</label>
						<input type="text" className="auth-input" id='first_name' placeholder='Камрон'
							value={data.first_name} onChange={(e) => setData({ ...data, first_name: e.target.value })}
						/>
						<div className="message">
							<img src={validation} alt="" width={24} />
							{errors.first_name}
						</div>
					</div>

					<div className={`form-group ${errors.last_name && 'error'}`}>
						<label htmlFor="last_name">Фамилия</label>
						<input type="text" className="auth-input" id='last_name' placeholder='Камрон'
							value={data.last_name} onChange={(e) => setData({ ...data, last_name: e.target.value })}
						/>
						<div className="message">
							<img src={validation} alt="" width={24} />
							{errors.last_name}
						</div>
					</div>
				</div>

				<div className="auth-group">
					<div className={`form-group ${errors.middle_name && 'error'}`}>
						<label htmlFor="middle_name">Отчество</label>
						<input type="text" className="auth-input" id='middle_name' placeholder='Козимович'
							value={data.middle_name} onChange={(e) => setData({ ...data, middle_name: e.target.value })}
						/>
						<div className="message">
							<img src={validation} alt="" width={24} />
							{errors.middle_name}
						</div>
					</div>

					<div className={`form-group ${errors.birth_date && 'error'}`}>
						<label htmlFor="birth_date">Дата рождения</label>
						<MaskedInput
							type="text"
							className="auth-input"
							id='birth_date'
							placeholder='29/11/2006'
							mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
							guide={true}
							value={data.birth_date}
							onChange={(e) => setData({ ...data, birth_date: e.target.value })}
						/>
						<div className="message">
							<img src={validation} alt="" width={24} />
							{errors.birth_date}
						</div>

					</div>
				</div>

				<div className={`form-group ${errors.email && 'error'}`}>
					<label htmlFor="email">Почта</label>
					<input type="text" className="auth-input" id='email' placeholder='yourmail@gmail.com'
						value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
					/>
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

				<button className="auth-btn start" onClick={() => register()} disabled={!data.agreement}>
					Далее
					<div className="devider" />
					<ArrowRightIcon />
				</button>
			</div>
		</>
	);

}

export default Register
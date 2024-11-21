import React, { useRef, useState } from 'react'
import MaskedInput from 'react-text-mask'

import { useNavigate, useSearchParams } from 'react-router-dom'

import { httpOk, post } from 'configs/api';
import { unMaskPhoneNumber } from 'configs/helper';

import logo from 'assets/icons/logo.svg'
import validation from 'assets/icons/validation.svg'

import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function RegisterPhone() {
	const navigate = useNavigate()
	const otpCodeInputRef = useRef(null); // Создаем реф для input

	const [searchParams] = useSearchParams();
	const urlPrefix = localStorage.getItem('isRegister') === 'false' ? 'login' : 'register'


	const [errors, setErrors] = useState({});
	const [data, setData] = useState({
		phone_number: '+998',
		otp_code: '',
		session_id: searchParams.get('session_id'),
		login_session_id: searchParams.get('login_session_id'),
	})

	const validateSendCode = () => {
		const newErrors = {};
		const phoneRegex = /^\+998 \d{2} \d{3} \d{2} \d{2}$/;
		if (!phoneRegex.test(data.phone_number)) {
			newErrors.phone_number = 'Некорректный номер телефона (формат: +998 XX XXX XX XX)';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const validateVerifyCode = () => {
		const newErrors = {};

		const codeRegex = /^\d{3} \d{3}$/;
		if (data.otp_code && !codeRegex.test(data.otp_code)) {
			newErrors.otp_code = 'Код должен быть в формате XXX XXX';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	async function sendCode() {
		if (!validateSendCode()) return;

		const sendData = {
			...data,
			phone_number: '+' + unMaskPhoneNumber(data.phone_number),
		};

		const response = await post(`/api/auth/${urlPrefix}-phone`, sendData, { guest: true })
		if (httpOk(response)) {
			if (otpCodeInputRef.current) {
				otpCodeInputRef.current.focus();
			}
		}
	}

	async function verifyCode() {
		if (!validateVerifyCode()) return;

		const sendData = {
			...data,
			phone_number: unMaskPhoneNumber(data.phone_number),
			otp_code: data.otp_code.replace(/\s/g, ''),
		};

		const response = await post(`/api/auth/${urlPrefix}-verify/`, sendData, { guest: true })
		if (httpOk(response)) {
			localStorage.setItem('token', response.data.access_token)
			navigate('/auth/complete')
		}
	}

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content">
				<div className="auth-title">
					Номер телефона
				</div>

				<div className={`form-group ${errors.phone_number ? 'error' : ''}`}>
					<label htmlFor="phone_number">Телефон</label>
					<MaskedInput
						type="text"
						className="auth-input"
						id="phone_number"
						placeholder="+998 xx xxx xx xx"
						mask={[
							'+', '9', '9', '8', ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/
						]}
						guide={false}
						value={data.phone_number}
						onChange={(e) => {
							const inputValue = e.target.value;
							if (!inputValue.startsWith('+998')) {
								setData({ ...data, phone_number: '+998 ' });
								setTimeout(() => {
									e.target.setSelectionRange(e.target.value.length, e.target.value.length);
								}, 0);
							} else {
								setData({ ...data, phone_number: inputValue });
							}
						}}
					/>

					<div className="message">
						<img src={validation} alt="" width={24} />
						{errors.phone_number}
					</div>

				</div>

				<div className="auth-group">
					<div className="form-group">
						<label htmlFor="email">Получить СМС</label>
						<button className="auth-btn dark start second" onClick={() => sendCode()}>
							Отправить код
						</button>
					</div>

					<div className={`form-group ${errors.otp_code ? 'error' : ''}`}>
						<label htmlFor="otp_code">Введите код из СМС</label>
						<MaskedInput
							ref={otpCodeInputRef}
							type="text"
							className="auth-input"
							id="otp_code"
							placeholder="XXX XXX"
							mask={[
								/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/
							]}
							guide={false}
							value={data.otp_code}
							onChange={(e) => setData({ ...data, otp_code: e.target.value })}
						/>

						<div className="message">
							<img src={validation} alt="" width={24} />
							{errors.otp_code}
						</div>
					</div>
				</div>
			</div>

			<div className="auth-buttons">
				<button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
					<ArrowLeft />
				</button>

				<button className="auth-btn start" onClick={() => verifyCode()}>
					Далее
					<div className="devider" />
					<ArrowRightIcon />
				</button>
			</div>
		</>
	)
}

export default RegisterPhone
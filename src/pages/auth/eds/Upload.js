import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import file from 'assets/icons/file.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Upload() {
	const navigate = useNavigate()

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">
				<div className="auth-title text-center">
					Загрузка ЭЦП
				</div>

				<div className="upload-block">
					<div className="upload-div">
						<img src={file} alt="" />
						<div>
							Прикрепите файл
						</div>
					</div>

					<input type="file" className="file" />
				</div>

				<div className="auth-buttons">
					<button className="auth-btn rounded back" onClick={() => navigate(-1)} title="Назад">
						<ArrowLeft />
					</button>

					<Link className="auth-btn start" to="/auth/eds/success">
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

export default Upload
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Импортируйте motion
import logo from 'assets/icons/logo.svg';

import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Welcome() {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const navigate = useNavigate();

	const handleExpand = (path, isRegister) => {
		localStorage.setItem('isRegister', isRegister);
		setIsFullScreen(true);
		setIsAnimating(true);

		// Задержка для завершения анимации
		setTimeout(() => {
			navigate(path);
		}, 500); // Установите время задержки, соответствующее продолжительности анимации
	};

	return (
		<>
			<img src={logo} alt="" className="mobile-show logo" />

			<motion.div
				className={`welcome-container ${isFullScreen ? 'full-screen' : ''}`}
				initial={{ width: 'calc(100% - 20px)', scale: 1, transform: window.innerWidth < 568 ? 'translate(-50%, -50%)' : '' }} // Начальное состояние
				animate={isFullScreen ? { width: '100vw', scale: 1.05 } : {}} // Анимация при развертывании
				transition={{
					duration: 0.5,
					type: "spring",
					bounce: 0.4,
					stiffness: 150,
					damping: 15
				}}
			>
				<img src={logo} alt="" className="logo" />

				<h1>Добро пожаловать в MBank!</h1>

				<div className={`d-flex justify-content-center gap-10 ${isFullScreen ? 'move-down' : 'w-100'}`}>
					<button
						className={`auth-btn mobile-show ${isFullScreen ? 'rounded' : 'small'}`}
						onClick={() => handleExpand('/auth/login', false)}
						disabled={isAnimating}
					>
						{isFullScreen ?
							<ArrowLeftIcon />
							:
							'Вход'
						}
					</button>

					<button
						className="auth-btn"
						onClick={() => handleExpand('/auth/register', true)}
						disabled={isAnimating}
					>
						Регистрация
						<div className="devider"></div>
						<ArrowRightIcon />
					</button>
				</div>
			</motion.div>

			<button className="auth-btn small welcome-login" onClick={() => handleExpand('/auth/login', false)} disabled={isAnimating}>
				Войти
			</button>
		</>
	);
}

export default Welcome;

// NoAuthLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function NoAuthLayout() {
	const location = useLocation()
	const isRegister = location.pathname.includes('register');
	const lastSegment = location.pathname.split('/').pop();
	const isWelcome = location.pathname !== '/auth/welcome'

	return (
		<div className={`auth-bg ${lastSegment} ` + (isRegister ? 'second ' : ' ')}>
			<div className="auth-card bg">
				<motion.div
					className={"auth-motion " + (isWelcome ? '' : 'justify-content-center')}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<Outlet />
				</motion.div>
			</div>

		</div>
	);
}

export default NoAuthLayout;

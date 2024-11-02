import React from 'react'
import { Route, Routes, Navigate, Outlet, useLocation } from 'react-router-dom';
import { publicRoutes, usersRoutes } from './routes'
import { AnimatePresence, motion } from 'framer-motion';

// import CashierLayout from 'containers/layout/director/Layout';
import NoAuthLayout from '../layouts/NoAuthLayout';
import Register from 'pages/auth/Register';
import Welcome from 'pages/auth/Welcome';

function createPublicRoutes() {
	return publicRoutes.map((item, key) => {
		return (
			<Route key={key} path={item.path} element={item.component} />
		);
	});
}

function createPrivateRoutes() {
	// const role = localStorage.getItem("role");
	return usersRoutes.map((item, key) => {
		return (
			<Route key={key} element={<ProtectedRoute />}>
				<Route path={item.path} element={item.component} />
			</Route>
		);
	});
}

function ProtectedRoute() {
	// const login = localStorage.getItem("login");
	// var isAuthenticated = false;
	// if (login) {
	// 	isAuthenticated = true
	// } else {
	// 	isAuthenticated = false
	// }

	// if (!isAuthenticated) {
	// 	localStorage.removeItem('login')
	// 	localStorage.removeItem('role')
	// 	localStorage.removeItem('token')
	// 	return <Navigate to="/auth/login" />;
	// }

	return <Outlet />;
};

const Index = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route
					path="/auth/register"
					element={
						<Register />
					}
				/>
				<Route
					path="/auth/welcome"
					element={
						<motion.div
							style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: '100%', overflow: 'hidden' }} // Полупрозрачный белый фон
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<Welcome />
						</motion.div>
					}
				/>


				<Route element={<NoAuthLayout />} path='/auth'>
					{createPublicRoutes()}
				</Route>

				<Route >
					{createPrivateRoutes()}
				</Route>

				<Route element={<NoAuthLayout />}>
					<Route path="*" element={<Navigate to="/auth/welcome" replace />} />
				</Route>
			</Routes>
		</AnimatePresence>
	)
}

export default Index;
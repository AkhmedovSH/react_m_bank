import React from 'react'
import { Route, Routes, Navigate, Outlet, useLocation } from 'react-router-dom';
import { publicRoutes, usersRoutes, authRoutes } from './routes'
import { AnimatePresence } from 'framer-motion';

// import CashierLayout from 'containers/layout/director/Layout';
import NoAuthLayout from '../layouts/NoAuthLayout';
import NoAuthLayoutBg from '../layouts/NoAuthLayoutBg';

function createPublicRoutes() {
	return publicRoutes.map((item, key) => {
		return (
			<Route key={key} path={item.path} element={item.component} />
		);
	});
}

function createAuthRoutes() {
	return authRoutes.map((item, key) => {
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
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>

				<Route element={<NoAuthLayout />} path='/auth'>
					{createPublicRoutes()}
				</Route>

				<Route element={<NoAuthLayoutBg />} path='/auth'>
					{createAuthRoutes()}
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
import React from 'react'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { publicRoutes, usersRoutes } from './routes'

// import CashierLayout from 'containers/layout/director/Layout';
import NoAuthLayout from '../layouts/NoAuthLayout';

function createPublicRoutes() {
	return publicRoutes.map((item, key) => {
		return (
			<Route key={key} path={item.path} element={item.component} />
		);
	});
}

function createPrivateRoutes() {
	const role = localStorage.getItem("role");
	if (role === 'ROLE_ACCOUNTANT') {
		return usersRoutes.map((item, key) => {
			return (
				<Route key={key} element={<ProtectedRoute />}>
					<Route path={item.path} element={item.component} />
				</Route>
			);
		});
	}
}

function ProtectedRoute() {
	const login = localStorage.getItem("login");
	var isAuthenticated = false;
	if (login) {
		isAuthenticated = true
	} else {
		isAuthenticated = false
	}

	if (!isAuthenticated) {
		localStorage.removeItem('login')
		localStorage.removeItem('role')
		localStorage.removeItem('token')
		return <Navigate to="/auth/login" />;
	}

	return <Outlet />;
};

const Index = () => {
	return (
		<Routes>
			<Route element={<NoAuthLayout />} path='/auth'>
				{createPublicRoutes()}
			</Route>

			<Route >
				{createPrivateRoutes()}
			</Route>

			<Route element={<NoAuthLayout />}>
				<Route path="*" element={<Navigate to="/auth/login" replace />} />
			</Route>
		</Routes>
	)
}

export default Index;
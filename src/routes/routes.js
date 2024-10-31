import React from 'react'

import Welcome from 'pages/auth/Welcome'
import Register from 'pages/auth/Register'
import RegisterComplete from 'pages/auth/Complete'
import Phone from 'pages/auth/Phone'
import Login from 'pages/auth/Login'

const publicRoutes = [
	{ path: "/auth/welcome", component: <Welcome /> },

	{ path: "/auth/register", component: <Register /> },
	{ path: "/auth/login", component: <Login /> },
	{ path: "/auth/phone", component: <Phone /> },
	{ path: "/auth/complete", component: <RegisterComplete /> },

]

const usersRoutes = [
]


export { publicRoutes, usersRoutes }
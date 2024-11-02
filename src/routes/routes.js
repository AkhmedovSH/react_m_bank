import React from 'react'

import { motion } from 'framer-motion';

import Welcome from 'pages/auth/Welcome'
import Auth from 'pages/auth/Auth'

import Register from 'pages/auth/Register'
import RegisterComplete from 'pages/auth/Complete'
import Phone from 'pages/auth/Phone'
import Login from 'pages/auth/Login'

import Dashboard from 'pages/dashboard/Index'

const publicRoutes = [
	// { path: "/auth/welcome", component: <Welcome /> },

	// { path: "/auth/register", component: <Register /> },
	{ path: "/auth/auth", component: <Auth /> },

	{ path: "/auth/login", component: <Login /> },
	{ path: "/auth/phone", component: <Phone /> },
	{ path: "/auth/complete", component: <RegisterComplete /> },
]

const usersRoutes = [
	{ path: "/dashboard", component: <Dashboard /> },
]


export { publicRoutes, usersRoutes }
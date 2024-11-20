import React from 'react'

import Welcome from 'pages/auth/Welcome'
import Auth from 'pages/auth/Auth'

import Register from 'pages/auth/Register'
import RegisterComplete from 'pages/auth/Complete'
import Phone from 'pages/auth/Phone'
import Login from 'pages/auth/Login'

import OpenAccountIndex from 'pages/auth/open_account/Index'
import OpenAccountSuccess from 'pages/auth/open_account/Success'
import OpenAccountError from 'pages/auth/open_account/Error'

import OpenCompanyIndex from 'pages/auth/open_company/Index'
import OpenCompanyOperator from 'pages/auth/open_company/Operator'
import OpenCompanyAddCompany from 'pages/auth/open_company/AddCompany'

import EdsIndex from 'pages/auth/eds/Index'
import EdsUpload from 'pages/auth/eds/Upload'
import EdsError from 'pages/auth/eds/Error'
import EdsSuccess from 'pages/auth/eds/Success'

import ActivityIndex from 'pages/auth/activity/Index'
import ActivityChildren from 'pages/auth/activity/Children'
import ActivitySuccess from 'pages/auth/activity/Success'

import Dashboard from 'pages/dashboard/Index'

const publicRoutes = [
	{ path: "/auth/welcome", component: <Welcome /> },

	{ path: "/auth/register", component: <Register /> },
	{ path: "/auth/auth", component: <Auth /> },

	{ path: "/auth/login", component: <Login /> },
	{ path: "/auth/phone", component: <Phone /> },
]

const authRoutes = [
	{ path: "/auth/complete", component: <RegisterComplete /> },

	{ path: "/auth/open-account", component: <OpenAccountIndex /> },
	{ path: "/auth/open-account/success", component: <OpenAccountSuccess /> },
	{ path: "/auth/open-account/error", component: <OpenAccountError /> },

	{ path: "/auth/open-company", component: <OpenCompanyIndex /> },
	{ path: "/auth/open-company/operator", component: <OpenCompanyOperator /> },
	{ path: "/auth/open-company/add-company", component: <OpenCompanyAddCompany /> },


	{ path: "/auth/open-company", component: <OpenCompanyIndex /> },
	{ path: "/auth/open-company/operator", component: <OpenCompanyOperator /> },
	{ path: "/auth/open-company/add-company", component: <OpenCompanyAddCompany /> },

	{ path: "/auth/eds", component: <EdsIndex /> },
	{ path: "/auth/eds/upload", component: <EdsUpload /> },
	{ path: "/auth/eds/success", component: <EdsSuccess /> },
	{ path: "/auth/eds/error", component: <EdsError /> },

	{ path: "/auth/activity", component: <ActivityIndex /> },
	{ path: "/auth/activity/children", component: <ActivityChildren /> },
	{ path: "/auth/activity/success", component: <ActivitySuccess /> },
]

const usersRoutes = [
	{ path: "/dashboard", component: <Dashboard /> },
]


export { publicRoutes, usersRoutes, authRoutes }
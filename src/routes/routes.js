import React from 'react'

import Welcome from 'pages/auth/Welcome'

const publicRoutes = [
	{ path: "/auth/welcome", component: <Welcome /> },
]

const usersRoutes = [
	// { path: "/shift-report", component: <ShiftReport /> },
	// { path: "/shift-report/:id", component: <ShiftReport /> },
]


export { publicRoutes, usersRoutes }
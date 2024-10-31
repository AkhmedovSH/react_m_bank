import React from 'react'

import Welcome from 'pages/auth/Welcome'

const publicRoutes = [
	{ path: "/auth/welcome", component: <Welcome /> },
]

const usersRoutes = [
]


export { publicRoutes, usersRoutes }
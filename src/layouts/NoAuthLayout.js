import React from 'react'
import { Outlet } from 'react-router-dom';

function NoAuthLayout() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default NoAuthLayout
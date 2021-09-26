import React from 'react';
import { Outlet } from 'react-router-dom';

function MinimalLayout() {
    return (
        <>
            <span>MinimalLayout</span>
            <Outlet />
        </>
    );
}

export default MinimalLayout;

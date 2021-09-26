import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <>
            <span>AdminLayout</span>
            <Outlet />
        </>
    );
}

export default AdminLayout;

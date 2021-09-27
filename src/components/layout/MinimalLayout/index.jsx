import LangSwitcher from 'features/i18n/components/LangSelect';
import { ToggleTheme } from 'features/theme/components/ToggleTheme';
import React from 'react';
import { Outlet } from 'react-router-dom';

function MinimalLayout() {
    return (
        <>
            <div className="float-right">
                <LangSwitcher />
                <ToggleTheme />
            </div>
            <Outlet />
        </>
    );
}

export default MinimalLayout;

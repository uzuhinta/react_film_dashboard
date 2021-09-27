import LangSwitcher from 'features/i18n/components/LangSelect';
import { ToggleTheme } from 'features/theme/components/ToggleTheme';
import React from 'react';
import { Outlet } from 'react-router-dom';

function MinimalLayout() {
    return (
        <div className="grid h-screen grid-rows-minimal">
            <div className="flex justify-end">
                <LangSwitcher />
                <ToggleTheme />
            </div>
            <Outlet />
        </div>
    );
}

export default MinimalLayout;

import { Button, Typography } from '@mui/material';
import { Box, fontWeight } from '@mui/system';
import SignOutWithGoogle from 'features/auth/components/SignOutWithGoogle';
import LangSwitcher from 'features/i18n/components/LangSelect';
import { ToggleTheme } from 'features/theme/components/ToggleTheme';
import React from 'react';

function Header() {
    return (
        <header className="bg-primary flex items-center justify-between shadow transition-colors duration-300">
            <Button color="primary" sx={{ fontWeight: '600' }}>
                Admin Dashboard
            </Button>
            <div>
                <LangSwitcher />
                <ToggleTheme />
                <SignOutWithGoogle />
            </div>
        </header>
    );
}

export default Header;

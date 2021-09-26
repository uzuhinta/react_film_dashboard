import { selectAuth } from 'features/auth/authSlice';
import LoginWithGoogle from 'features/auth/components/LoginWithGoogle';
import SignOutWithGoogle from 'features/auth/components/SignOutWithGoogle';
import LangSwitcher from 'features/i18n/components/LangSwitcher';
import { ToggleTheme } from 'features/theme/components/ToggleTheme';
import React from 'react';
import { useSelector } from 'react-redux';
import ThemeRoutes from 'routes/routes';
import './App.css';
import logo from './logo.svg';

function App() {
    const auth = useSelector(selectAuth);
    console.log('In start app: ');
    return (
        <div className="App bg-primary transition-all duration-300">
            <LangSwitcher />
            <ToggleTheme />
            {auth.user ? <SignOutWithGoogle /> : <LoginWithGoogle />}
            <ThemeRoutes />
        </div>
    );
}

export default App;

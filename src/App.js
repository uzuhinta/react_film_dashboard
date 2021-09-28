import { ThemeProvider } from '@mui/material';
import { selectAuth } from 'features/auth/authSlice';
import LoginWithGoogle from 'features/auth/components/LoginWithGoogle';
import SignOutWithGoogle from 'features/auth/components/SignOutWithGoogle';
import LangSwitcher from 'features/i18n/components/LangSelect';
import { ToggleTheme } from 'features/theme/components/ToggleTheme';
import React from 'react';
import { useSelector } from 'react-redux';
import ThemeRoutes from 'routes/routes';
import './App.css';
import logo from './logo.svg';
import { createTheme } from '@mui/material/styles';

function App() {
    const auth = useSelector(selectAuth);
    console.log('In start app: ');
    return (
        <div className="App bg-primary transition-colors duration-300">

            {/* {auth.user ? <SignOutWithGoogle /> : <LoginWithGoogle />} */}

            <ThemeRoutes />
        </div>
    );
}

export default App;

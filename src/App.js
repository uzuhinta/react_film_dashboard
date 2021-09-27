import { ThemeProvider } from '@mui/material';
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
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
function App() {
    const auth = useSelector(selectAuth);
    console.log('In start app: ');
    return (
        <div className="App bg-primary transition-all duration-300">
            <LangSwitcher />
            <ToggleTheme />
            {auth.user ? <SignOutWithGoogle /> : <LoginWithGoogle />}
            <ThemeProvider theme={theme}>
                <ThemeRoutes />
            </ThemeProvider>
        </div>
    );
}

export default App;

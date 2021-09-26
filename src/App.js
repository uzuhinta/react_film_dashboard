import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import LangSwitcher from 'features/i18n/components/LangSwitcher';
import { ToggleTheme } from 'features/theme/components/ToggleTheme';
import LoginWithGoogle from 'features/auth/components/LoginWithGoogle';
import SignOutWithGoogle from 'features/auth/components/SignOutWithGoogle';
import { useSelector } from 'react-redux';
import { selectAuth } from 'features/auth/authSlice';
import routes from 'routes/routes';
import { useRoutes } from 'react-router-dom';

function App() {
    const auth = useSelector(selectAuth);
    console.log('In start app: ');
    const content = useRoutes(routes(auth.user));
    return (
        <div className="App bg-primary transition-all duration-300">
            <header className="App-header">
                <img src={logo} className="App-logo " alt="logo" />
                <LangSwitcher />
                <ToggleTheme />
                {auth.user ? <SignOutWithGoogle /> : <LoginWithGoogle />}
                {content}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <a
                        className="App-link "
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                        className="App-link"
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </span>
            </header>
        </div>
    );
}

export default App;

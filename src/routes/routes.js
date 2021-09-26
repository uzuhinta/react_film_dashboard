import { selectAuth } from 'features/auth/authSlice';
import Login from 'features/auth/pages/Login';
import { Counter } from 'features/counter/Counter';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AdminRoutes } from './AdminRoutes';
import { PublicRoutes } from './PublicRoutes';
import { useRoutes } from 'react-router-dom';

function ThemeRoutes() {
    const auth = useSelector(selectAuth);
    const isUserLogin = auth.user;
    return useRoutes([AdminRoutes(isUserLogin), PublicRoutes(isUserLogin)]);
}

export default ThemeRoutes;

import { selectAuth } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { AdminRoutes } from './AdminRoutes';
import { PublicRoutes } from './PublicRoutes';

function ThemeRoutes() {
    const auth = useSelector(selectAuth);
    const isUserLogin = auth.user;
    return useRoutes([AdminRoutes(isUserLogin), PublicRoutes(isUserLogin)]);
}

export default ThemeRoutes;

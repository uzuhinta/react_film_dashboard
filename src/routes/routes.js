import Login from 'features/auth/pages/Login';
import { Counter } from 'features/counter/Counter';
import { Navigate } from 'react-router-dom';
import { AdminRoutes } from './AdminRoutes';
import { PublicRoutes } from './PublicRoutes';

const routes = (isUserLogin) => {

    return [
        AdminRoutes(isUserLogin),
        PublicRoutes(isUserLogin),
    ];
};

export default routes;

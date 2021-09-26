import MinimalLayout from 'components/layout/MinimalLayout';
import Login from 'features/auth/pages/Login';
import { Navigate } from 'react-router-dom';

export const PublicRoutes = (isUserLogin) => ({
    path: '/',
    element: !isUserLogin ? <MinimalLayout /> : <Navigate to="/app" />,
    children: [
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/',
            element: <Login />,
        },
    ],
});

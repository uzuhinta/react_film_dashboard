import AdminLayout from 'components/layout/AdminLayout';
import MinimalLayout from 'components/layout/MinimalLayout';
import Login from 'features/auth/pages/Login';
import { Counter } from 'features/counter/Counter';
import { Navigate } from 'react-router-dom';
import NotFound from 'components/NotFound';

export const AdminRoutes = (isUserLogin) => ({
    path: '/app',
    element: isUserLogin ? <AdminLayout /> : <Navigate to="/login" />,
    children: [
        {
            path: '/counter',
            element: <Counter />,
        },
        {
            path: '/',
            element: <Counter />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ],
});

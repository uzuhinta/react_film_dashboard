import AdminLayout from 'components/layout/AdminLayout';
import MinimalLayout from 'components/layout/MinimalLayout';
import Login from 'features/auth/pages/Login';
import { Counter } from 'features/counter/Counter';
import { Navigate } from 'react-router-dom';
import NotFound from 'components/NotFound';
import AllPage from 'features/actor/pages/AllPage';
import PaginationPage from 'features/actor/pages/PaginationPage';
import AddPage from 'features/actor/pages/AddPage';

export const AdminRoutes = (isUserLogin) => ({
    path: '/app',
    element: isUserLogin ? <AdminLayout /> : <Navigate to="/login" />,
    children: [
        {
            path: '/counter',
            element: <Counter />,
        },
        {
            path: '/actor/add',
            element: <AddPage />,
        },
        {
            path: '/actor/pagination',
            element: <PaginationPage />,
        },
        {
            path: '/actor/all',
            element: <AllPage />,
        },
        {
            path: '/',
            element: <Counter />,
        },
        {
            path: '/404',
            element: <NotFound />,
        },
    ],
});

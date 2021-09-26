import Login from 'features/auth/pages/Login';
import { Counter } from 'features/counter/Counter';
import { Navigate } from 'react-router-dom';

const routes = (isUserLogin) => [
    {
        path: '/app',
        element: isUserLogin ? <Counter /> : <Navigate to="/" />,
        // children: [{ path: '/counter', element: <Counter /> }],
    },
    {
        path: '/',
        element: !isUserLogin ? <Login /> : <Navigate to="/app" />,
    },
];

export default routes;

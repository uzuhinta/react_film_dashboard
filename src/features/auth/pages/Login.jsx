import { getAll } from 'api/actorApi';
import React from 'react';

function Login() {
    return (
        <div>
            Login Page
            <button
                className="px-3 py-1 bg-green-500 opacity-40 ring-1 ml-4 mt-3"
                onClick={async () => {
                    const data = await getAll();
                    console.log(data);
                }}
            >
                Test Setup API
            </button>
        </div>
    );
}

export default Login;

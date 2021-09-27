import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { googleSignInStart } from '../authSlice';

function LoginWithGoogle() {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    const handleClick = () => {
        console.log('Handle signin click');
        dispatch(googleSignInStart());
    };
    return (
            <Button onClick={handleClick}>
                {authState.status === 'loading' ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-500 inline-block"></div>
                ) : null}
                Login with Google
                {/* {authState.status === 'error'
                    ? 'Try login with google again'
                    : ''} */}
            </Button>
    );
}

export default LoginWithGoogle;

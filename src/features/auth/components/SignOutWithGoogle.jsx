import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { googleSignOut } from '../authSlice';

function SignOutWithGoogle() {
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(googleSignOut());
    };
    return (
        <Button variant="outlined" color="warning" onClick={handleSignOut}>
            Sign out
        </Button>
    );
}

export default SignOutWithGoogle;

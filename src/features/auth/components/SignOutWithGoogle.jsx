import React from 'react';
import { useDispatch } from 'react-redux';
import { googleSignOut } from '../authSlice';
import { auth } from '../firebase';
import styled from './Auth.module.css';

function SignOutWithGoogle() {
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(googleSignOut());
    };
    return (
        <div>
            <button className={styled.button} onClick={handleSignOut}>
                Sign out
            </button>
        </div>
    );
}

export default SignOutWithGoogle;

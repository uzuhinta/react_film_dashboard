import React from 'react';
import { signInWithGoogle } from '../firebase';
import styled from './Auth.module.css';
function LoginWithGoogle() {
    return (
        <div>
            <button className={styled.button} onClick={signInWithGoogle}>
                LoginWithGoogle
            </button>
        </div>
    );
}

export default LoginWithGoogle;

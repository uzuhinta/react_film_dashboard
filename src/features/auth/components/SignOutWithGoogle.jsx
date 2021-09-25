import React from 'react';
import { auth } from '../firebase';
import styled from './Auth.module.css';

function SignOutWithGoogle() {
    return (
        <div>
            <button className={styled.button} onClick={() => auth.signOut()}>
                Sign out
            </button>
        </div>
    );
}

export default SignOutWithGoogle;

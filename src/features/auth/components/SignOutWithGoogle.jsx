import { Button } from '@mui/material';
import { selectTranslations } from 'features/i18n/i18nSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { googleSignOut } from '../authSlice';

function SignOutWithGoogle() {
    const dispatch = useDispatch();
    const t = useSelector(selectTranslations);
    const handleSignOut = () => {
        dispatch(googleSignOut());
    };
    return (
        <Button variant="outlined" color="warning" onClick={handleSignOut}>
            {t.auth.signOut}
        </Button>
    );
}

export default SignOutWithGoogle;

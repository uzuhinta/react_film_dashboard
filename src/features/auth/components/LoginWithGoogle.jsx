import { Button } from '@mui/material';
import { selectTranslations } from 'features/i18n/i18nSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeDark } from 'utils';
import { googleSignInStart } from '../authSlice';

function LoginWithGoogle() {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    const t = useSelector(selectTranslations);
    const handleClick = () => {
        console.log('Handle signin click');
        dispatch(googleSignInStart());
    };
    return (
        <Button
            variant="outlined"
            onClick={handleClick}
            sx={{
                textTransform: 'none',
                color: `${useThemeDark() ? 'white' : 'black'}`,
            }}
        >
            {authState.status === 'loading' ? (
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-600 inline-block"></div>
            ) : null}
            {t.auth.signInWithGoogle}
            {/* {authState.status === 'error'
                    ? 'Try login with google again'
                    : ''} */}
        </Button>
    );
}

export default LoginWithGoogle;

import { all, put, takeLatest } from 'redux-saga/effects';
import {
    googleSignInError,
    googleSignInStart,
    googleSignInSuccess,
} from './authSlice';

import { auth, googleProvider } from './firebase';

function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield put(
            googleSignInSuccess({
                email: user.email,
                displayName: user.displayName,
            })
        );
    } catch (error) {
        yield put(googleSignInError(error.message));
    }
}

function* onGoogleSignInStart() {
    yield console.log('onGoogleSignInStart');
    yield takeLatest(googleSignInStart, signInWithGoogle);
}

function* onGoogleSignOut() {
    yield console.log('onGoogleSignOut');
}

export default function* authSaga() {
    yield all([onGoogleSignInStart(), onGoogleSignOut()]);
}

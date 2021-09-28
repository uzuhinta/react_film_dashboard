import { Images } from 'constant/Image';
import { selectTranslations } from 'features/i18n/i18nSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import LoginWithGoogle from '../components/LoginWithGoogle';

function Login() {

    const t = useSelector(selectTranslations);
    return (
        <div className="flex px-6 py-3 bg-primary transition-colors duration-300">
            <div className="flex flex-col justify-center w-login-img shadow-2xl rounded-2xl  bg-secondary transition-colors duration-300">
                <h1 className=" text-center text-primary font-bold text-3xl mb-9">
                    {t.auth.loginHi}
                </h1>
                <img className="w-full" src={Images.Login} alt="Login" />
            </div>
            <div className="w-full ml-12 bg-primary flex items-center transition-colors duration-300">
                <div className="max-w-login-form w-full mx-auto">
                    <h2 className="text-center text-primary font-bold text-2xl mb-3">
                        {t.auth.loginTutor}
                    </h2>
                    {/* <p className="text-primary mb-5">
                        Enter your details below.
                    </p> */}
                    <div className="flex justify-center mt-5">
                        <LoginWithGoogle className="mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;

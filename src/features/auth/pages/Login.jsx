import React from 'react';

function Login() {
    return (
        <div className={`h-screen flex w-screen`}>
            <div
                className={`shadow-xl bg-admin-bs-gray-dark w-4/12 hidden relative`}
            >
                <h2 className={``}>Hi, Welcome Back</h2>
                <div className={`h-full`}>
                    {/* <img
                        className={``}
                        src={AdminImages.LOGIN_BG}
                        alt="welcome"
                    /> */}
                </div>
            </div>
            <div className={`flex flex-col w-full px-5  mx-auto `}>
                <div className={`w-full `}>
                    {/* <img
                        className={`pt-4 pb-7`}
                        src={Images.IMG_LOGO}
                        alt="logo"
                    /> */}
                </div>
                <div className={`w-login max-w-full mx-auto`}>
                    <h3 className={`text-2xl font-extrabold pb-1.5`}>
                        Sign in to Dashboard
                    </h3>
                    <span className={`block text-common-gray37 pb-7`}>
                        Enter your details below
                    </span>
                    <div className={`grid grid-cols-3 gap-2 pb-7`}>
                        <button
                            className={`text-center border border-common-gray89 border-opacity-50 rounded-md py-2.5 hover:bg-common-gray89 hover:bg-opacity-20 duration-300`}
                        >
                            <svg
                                className={`block mx-auto`}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                width="24"
                                height="24"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                                style={{ color: '#DF3E30' }}
                            >
                                <path
                                    fill="currentColor"
                                    d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93a6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44a.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29A10.12 10.12 0 0 0 11.57 22A10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"
                                ></path>
                            </svg>
                        </button>
                        <button
                            className={`text-center border border-common-gray89 border-opacity-50 rounded-md py-2.5 hover:bg-common-gray89 hover:bg-opacity-20 duration-300`}
                        >
                            <svg
                                className={`block mx-auto`}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                width="24"
                                height="24"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                                style={{ color: 'rgb(24, 119, 242)' }}
                            >
                                <path
                                    fill="currentColor"
                                    d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"
                                ></path>
                            </svg>
                        </button>
                        <button
                            className={`text-center border border-common-gray89 border-opacity-50 rounded-md py-2.5 hover:bg-common-gray89 hover:bg-opacity-20 duration-300`}
                        >
                            <svg
                                className={`block mx-auto`}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                width="24"
                                height="24"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                                style={{ color: 'rgb(28, 156, 234)' }}
                            >
                                <path
                                    fill="currentColor"
                                    d="M8.08 20A11.07 11.07 0 0 0 19.52 9A8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51a1.88 1.88 0 0 1-2.16-.38a3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24a9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`relative border-b border-common-gray9c border-opacity-50 mb-7`}
                    >
                        <div
                            className={`absolute  top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-common-gray9c bg-common-whiteff px-2`}
                        >
                            OR
                        </div>
                    </div>
                    <div
                        className={`form-field relative group focus-within:text-admin-bs-blue w-full`}
                    >
                        <input
                            className={`w-full border border-common-gray9c border-opacity-50 rounded-md px-2 py-2.5 outline-none hover:border-opacity-100 focus:border-opacity-100`}
                            id="email"
                        />
                        <label
                            className={`absolute transform top-1/2 left-0 -translate-y-1/2 px-2 select-none pointer-events-none text-common-gray9c`}
                            htmlFor="email"
                        >
                            Email address
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;

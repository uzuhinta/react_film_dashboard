import { Images } from 'constant/Image';
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router';

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="mt-10">
            <div className="relative  max-w-login-form mx-auto">
                <h2 className="text-center text-primary font-bold text-2xl mb-3">
                    Sorry, page not found!
                </h2>
                <p className="text-primary mb-10">
                    Sorry, we couldn’t find the page you’re looking for. Perhaps
                    you’ve mistyped the URL? Be sure to check your spelling.
                </p>
                <motion.img
                    animate={{
                        scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
                        opacity: [0, 1, 1, 1, 1, 1],
                        transition: {
                            duration: 0.72,
                            ease: [0.43, 0.13, 0.23, 0.96],
                        },
                    }}
                    exit={{
                        scale: [0.9, 1.1, 0.3],
                        opacity: [1, 1, 0],
                    }}
                    src={Images.NotFound}
                    alt="not found"
                />
                <button
                    className="absolute mt-10 left-1/2 transform -translate-x-1/2 bg-green-400 hover:bg-green-300 text-white font-bold py-3 px-6 rounded-md shadow-3xl transition-all duration-200 "
                    onClick={() => navigate('/')}
                >
                    Go To Home
                </button>
            </div>
        </div>
    );
}

export default NotFound;

import React, { useState, useEffect } from 'react';
import Login from '../auth/Login';

const PopupForm = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 60000); // 1 minute in milliseconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-8 shadow-md">
                        <Login />
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupForm;

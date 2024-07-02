import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginStatus } from '../redux/reducer/auth';
import Login from '../auth/Login';
import { RootState } from '../redux/store'; 

const PopUp = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [seconds, setSeconds] = useState(10); // Adjusted back to 60 seconds
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // Check login status on component mount
  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Open login popup after 60 seconds if not already logged in
  useEffect(() => {
    if (seconds === 0 && !isLoggedIn) {
      setShowLoginPopup(true);
    }
  }, [seconds, isLoggedIn]);

  // Close popup after successful login
  useEffect(() => {
    if (isLoggedIn) {
      setShowLoginPopup(false);
      // Reset timer when logged in
      setSeconds(10);
    }
  }, [isLoggedIn]);

  // Prevent scrolling on the background content when the popup is open
  useEffect(() => {
    if (showLoginPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showLoginPopup]);

  

  return (
    <>
      {/* Login popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative z-50 h-full ">
            <h1 className='text-xl font-bold text-[#173445]'>Please Login or Register to continue..</h1>
            {/* Include your existing login form or login page here */}
            <Login />
            {/* Replace with actual login form */}
            
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;

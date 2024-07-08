import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetBookingbyIdQuery, useGetBookingByUserAndVenueQuery, useUpdateIsVerifiedMutation } from '../../redux/api/booking';
import { FaCheck, FaTimes } from 'react-icons/fa';
import NavBar from '../../components/navbar';

const EnquiryNotif = () => {
    const vId = useSelector((state: RootState) => state?.auth?.user?._id);
    const [readUsers, setReadUsers] = useState<string[]>([]);
    const [notificationStatus] = useState<string[]>([]);
    const [showOTPPopup, setShowOTPPopup] = useState(false); // State to manage OTP Popup visibility
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null); // State to store selected user ID
    const [otp, setOtp] = useState(''); // State to store OTP input

    console.log("otpppp", otp);

    const { data } = useGetBookingbyIdQuery({ vId: vId as string });
    const [verify] = useUpdateIsVerifiedMutation();

    const handleMarkAsRead = async (notificationId: string) => {
        try {
            await useGetBookingByUserAndVenueQuery({ vId: vId as string, uId: notificationId });
            setReadUsers(prevState => [...prevState, notificationId]);
        } catch (error) {
            console.error("Error marking notification as read:", error);
        }
    };

    const handleApproval = async (uId: string) => {
        try {
            console.log("approved");
            await verify({
                vId: vId as string,
                uId: uId as string,
                bookingId: otp
            });
        } catch (error) {
            console.error('Error approving:', error);
        }
    };

    const handleRejection = async (uId: string) => {
        try {
            console.log("rejected");
            await verify({
                vId: vId as string,
                uId: uId as string,
                bookingId: 'reject'
            });
        } catch (error) {
            console.error('Error rejecting:', error);
        }
    };

    const handleOTPSubmit = async () => {
      
        if (otp === '1234') { // Example OTP validation
            if (selectedUserId) {
                await handleApproval(selectedUserId);
            }
            setShowOTPPopup(false);
        } else {
            alert('Invalid OTP');
        }
    };

    return (
        <>
            <NavBar />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data?.map((user: any, index: number) => (
                    <div key={index} className={`p-4 m-4 border border-gray-200 rounded shadow-md ${readUsers.includes(user.notificationId) ? 'bg-gray-100' : ''}`}>
                        <div className="mb-4">
                            <p className="text-lg font-bold">{user.name}</p>
                            <p className="text-gray-500">{user.address}</p>
                        </div>
                        <div className="mb-2">
                            <p className="text-gray-600">Contact: {user.contact}</p>
                            <p className="text-gray-600">Guest: {user.guests}</p>
                            <p className="text-gray-600">Location: {user.location}</p>
                            <p className="text-gray-600">Message: {user.message}</p>
                        </div>
                        <button
                            onClick={() => handleMarkAsRead(user.notificationId)}
                            className={`font-bold py-2 px-4 rounded ${notificationStatus[index] === 'read' || readUsers.includes(user.notificationId) ? 'bg-green-500 hover:bg-green-700 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                        >
                            {notificationStatus[index] === 'read' || readUsers.includes(user.notificationId) ? 'Marked as Read' : 'Mark as Read'}
                        </button>

                        <div className="w-1/12 p-2 flex justify-center items-center">
                            {user.isVerified === "Approved" ? (
                                <span className="bg-green-500 text-white rounded-full px-2 py-1 font-semibold">
                                    Approved
                                </span>
                            ) : user.isVerified === "Rejected" ? (
                                <span className="bg-red-500 text-white rounded-full px-2 py-1 font-semibold">
                                    Rejected
                                </span>
                            ) : (
                                <>
                                    <button
                                        onClick={() => {
                                            setSelectedUserId(user.uId);
                                            setShowOTPPopup(true);
                                        }}
                                        className="bg-green-500 text-white rounded-full p-1 mr-2"
                                    >
                                        <FaCheck />
                                    </button>
                                    <button
                                        onClick={() => handleRejection(user.uId)}
                                        className="bg-red-500 text-white rounded-full p-1"
                                    >
                                        <FaTimes />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {showOTPPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-xl mb-4">Enter OTP</h2>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="border p-2 rounded w-full mb-4"
                        />
                        <button
                            onClick={handleOTPSubmit}
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Submit
                        </button>
                        <button
                            onClick={() => setShowOTPPopup(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default EnquiryNotif;

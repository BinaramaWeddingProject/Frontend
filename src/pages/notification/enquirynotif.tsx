import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetBookingbyIdQuery, useGetBookingByUserAndVenueQuery, useUpdateIsVerifiedMutation } from '../../redux/api/booking';
import { FaCheck, FaTimes } from 'react-icons/fa';


const EnquiryNotif = () => {
    const vId = useSelector((state: RootState) => state?.auth?.user?._id);
    const [readUsers, setReadUsers] = useState<string[]>([]);
    const [notificationStatus, setNotificationStatus] = useState<string[]>([]);
    // const [isVerified, setIsVerified] = useState<string[]>([]);

    const { data, refetch } = useGetBookingbyIdQuery({ vId: vId as string });
    const [verify]=useUpdateIsVerifiedMutation()

  

    const handleMarkAsRead = async (notificationId: string) => {
        try {
            // Example: Call API to mark notification as read
            await useGetBookingByUserAndVenueQuery({ vId: vId as string, uId: notificationId });
            setReadUsers(prevState => [...prevState, notificationId]);
        } catch (error) {
            console.error("Error marking notification as read:", error);
        }
    };

    

    const handleApproval = async (uId:string) => {
        try {
            console.log("approved");
            await verify({
                
                    vId:vId as string,
                    uId: uId as string,
                    bookingId: 'approve'
                
            });
            // Example: Call other functions or update local state after mutation
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
            // Example: Call other functions or update local state after mutation
        } catch (error) {
            console.error('Error rejecting:', error);
        }
    };

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data?.map((user: any, index: number) => (
                <div key={index} className={`p-4 m-4 border border-gray-200 rounded shadow-md ${notificationStatus[index] === 'read' || readUsers.includes(user.notificationId) ? 'bg-gray-100' : ''}`}>
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
{/* 
                    <button
                        onClick={() => handleIsVerified(user._uId, isVerified[index])}
                        className={`font-bold py-2 px-4 rounded ${
                            isVerified[index] === 'approved' ? 'bg-green-500 hover:bg-green-700 text-white' :
                            isVerified[index] === 'rejected' ? 'bg-red-500 hover:bg-red-700 text-white' :
                            'bg-blue-500 hover:bg-blue-700 text-white'
                        }`}
                    >
                        {isVerified[index] === 'pending' ? (
                            <>
                                <button className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded mr-2">✓</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded">✕</button>
                            </>
                        ) : (
                            isVerified[index] === 'approved' ? 'Approved' : 'Rejected'
                        )}
                    </button> */}

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
                                    onClick={() => handleApproval(user.uId)}
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
    );
};

export default EnquiryNotif;

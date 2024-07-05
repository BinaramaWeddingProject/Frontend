import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetBookingbyIdQuery, useGetBookingByUserAndVenueQuery } from '../../redux/api/booking';

const EnquiryNotif = () => {
    const vId = useSelector((state: RootState) => state?.auth?.user?._id);
    const [readUsers, setReadUsers] = useState<string[]>([]);
    const [selectedNotificationId, setSelectedNotificationId] = useState<string | null>(null);
    
    const { data: bookingData } = useGetBookingbyIdQuery({ vId: vId as string });
    const { data: notificationData } = useGetBookingByUserAndVenueQuery({ vId: vId as string, uId: selectedNotificationId || '' }, { skip: !selectedNotificationId });
console.log(notificationData)
    const handleMarkAsRead = (notificationId: string) => {
        setSelectedNotificationId(notificationId);
        setReadUsers(prevState => [...prevState, notificationId]);
    };

    if (!bookingData) {
        return "no new notification";
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bookingData?.data?.map((user: any, index: number) => (
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
                        onClick={() => handleMarkAsRead(user._uId)}
                        className={`font-bold py-2 px-4 rounded ${readUsers.includes(user._uId) ? 'bg-green-500 hover:bg-green-700 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                    >
                        {readUsers.includes(user._uId) ? 'Marked as Read' : 'Mark as Read'}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default EnquiryNotif;

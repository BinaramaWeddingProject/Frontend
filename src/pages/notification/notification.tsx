import React, { useState, useEffect } from 'react';
import { useGetNotificationByIdQuery } from "../../redux/api/notification";
import { useUpdateNotificationMutation } from '../../redux/api/notification';
import { useGetNotificationIdStatusQuery } from '../../redux/api/notification';

const vId = "6647077ca07a6f12501a2b84";

const UserNotification = () => {
    const { data } = useGetNotificationByIdQuery({ vId });
    const [notificationIds, setNotificationIds] = useState<string[]>([]);
    const [notificationStatus, setNotificationStatus] = useState<string[]>([]);
    const [readUsers, setReadUsers] = useState<string[]>([]);
    const [updateNotification] = useUpdateNotificationMutation();

    useEffect(() => {
        const fetchNotificationStatus = async () => {
            if (data) {
                const ids = data.users.map((user: any) => user.notificationId);
                setNotificationIds(ids);
                const status = await Promise.all(ids.map(fetchNotificationStatusById));
                setNotificationStatus(status);
            }
        }

        fetchNotificationStatus();
    }, [data]);

    const fetchNotificationStatusById = async (notifId: string) => {
        try {
            console.log("notifid", notifId)
            const { data: status } = await useGetNotificationIdStatusQuery({ nId: notifId, vId });
            console.log("status beta", status)
            return status;
        } catch (error) {
            console.error("Error fetching notification status:", error);
            return "unread";
        }
    }

    const handleMarkAsRead = async (notificationId: string) => {
        try {
            const res = await updateNotification({ nId: notificationId, vId });
            console.log('res',res)
            setReadUsers(prevState => [...prevState, notificationId]);
        } catch (error) {
            console.error("Error marking notification as read:", error);
        }
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data?.users.map((user: any, index: number) => (
                <div key={index} className={`p-4 m-4 border border-gray-200 rounded shadow-md ${readUsers.includes(notificationIds[index]) ? 'bg-gray-100' : ''}`}>
                    <div className="mb-4">
                        <p className="text-lg font-bold">{user.user.fullName}</p>
                        <p className="text-gray-500">{user.user.email}</p>
                    </div>
                    <div className="mb-2">
                        <p className="text-gray-600">City: {user.user.city}</p>
                        <p className="text-gray-600">Phone: {user.user.phone}</p>
                    </div>
                    <button
                        onClick={() => handleMarkAsRead(notificationIds[index])}
                        className={`font-bold py-2 px-4 rounded ${readUsers.includes(notificationIds[index]) ? 'bg-green-500 hover:bg-green-700 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                    >
                        {notificationStatus[index] === 'read' ? 'Marked as Read' : 'Mark as Read'}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default UserNotification;

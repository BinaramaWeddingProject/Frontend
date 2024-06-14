// import React, { useState, useEffect } from 'react';
// import { useGetNotificationByIdQuery } from "../../redux/api/notification";
// import { useUpdateNotificationMutation } from '../../redux/api/notification';
// import { useGetNotificationIdStatusQuery } from '../../redux/api/notification';
// import { useGetAllNotificationByVIdQuery } from '../../redux/api/notification';

// const vId = "6647077ca07a6f12501a2b84";

// interface NotificationStatus {
//     vendorIds: string[];
//     statuses: string[];
//   }

// const UserNotification = () => {
//     const { data } = useGetNotificationByIdQuery({ vId });
//     const [notificationIds, setNotificationIds] = useState<string[]>([]);
//     const [notificationStatus, setNotificationStatus] = useState<NotificationStatus[]>([]);
//     const [readUsers, setReadUsers] = useState<string[]>([]);
//     const [updateNotification] = useUpdateNotificationMutation();
//     const { data: notif } = useGetAllNotificationByVIdQuery({vId});
//     console.log("notif", notif)

//     // useEffect(() => {
//     //     const fetchNotificationStatus = async () => {
//     //         if (data) {
//     //             const ids = data.users.map((user: any) => user.notificationId);
//     //             setNotificationIds(ids);
//     //             const statuses = await Promise.all(ids.map(async (id: string) => {
//     //                 if (id) {
//     //                     const { data: status } = await useGetNotificationIdStatusQuery({ nId: id, vId });
//     //                     return status;
//     //                 }
//     //                 return '';
//     //             }));
//     //             setNotificationStatus(statuses);
//     //         }
//     //     }
//     //     fetchNotificationStatus();
//     // }, [data]);

//     useEffect(() => {
//         if (notif && notif.status) {
//             const ids = notif.status.map((item: any) => {
// const vendorIds = item.vendors.map((vendor: any) => vendor.vendorId);                
//                 const statuses = item.vendors.map((vendor: any) => vendor.status);
//                 return { vendorIds, statuses };
//             });

//             setNotificationStatus(ids);
            
//         }
//     }, [notif]);

//     // console.log("idsss", notificationStatus );
//     // if (notificationStatus.length > 0 && notificationStatus[0].statuses.length > 0) {
//     //     console.log("status", notificationStatus[0].statuses[0]);
//     // }
//     console.log("status", notificationStatus[0]?.statuses[1])
    
//     const handleMarkAsRead = async (notificationId: string) => {
//         try {
//             const res = await updateNotification({ nId: notificationId, vId });
//             setReadUsers(prevState => [...prevState, notificationId]);
//         } catch (error) {
//             console.error("Error marking notification as read:", error);
//         }
//     }

//     return (
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {data?.users.map((user: any, index: number) => (
//                 <div key={index} className={`p-4 m-4 border border-gray-200 rounded shadow-md ${readUsers.includes(notificationIds[index]) ? 'bg-gray-100' : ''}`}>
//                     <div className="mb-4">
//                         <p className="text-lg font-bold">{user.user.fullName}</p>
//                         <p className="text-gray-500">{user.user.email}</p>
//                     </div>
//                     <div className="mb-2">
//                         <p className="text-gray-600">City: {user.user.city}</p>
//                         <p className="text-gray-600">Phone: {user.user.phone}</p>
//                     </div>
//                     <button
//                         onClick={() => handleMarkAsRead(notificationIds[index])}
//                         className={`font-bold py-2 px-4 rounded ${readUsers.includes(notificationIds[index]) ? 'bg-green-500 hover:bg-green-700 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
//                     >
//                         {notificationStatus[0].statuses[index]  === 'read' ? 'Marked as Read' : 'Mark as Read'}
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default UserNotification;




import  { useState, useEffect } from 'react';
import { useGetNotificationByIdQuery } from "../../redux/api/notification";
import { useUpdateNotificationMutation } from '../../redux/api/notification';
import { useGetAllNotificationByVIdQuery } from '../../redux/api/notification';

// const vId = "6647077ca07a6f12501a2b84";
const vId="6654342528aa54d4db416139"

const UserNotification = () => {

    const [readUsers, setReadUsers] = useState<string[]>([]);
    const [notificationStatus, setNotificationStatus] = useState<string[]>([]);
    const { data } = useGetNotificationByIdQuery({ vId });
    const { data: notif } = useGetAllNotificationByVIdQuery({ vId });
    const [updateNotification] = useUpdateNotificationMutation();
    
    useEffect(() => {
        if (notif && notif.status) {
            const statuses: string[] = [];
            notif.status.forEach((item: any) => {
                const vendor = item.vendors.find((vendor: any) => vendor.vendorId === vId);
                if (vendor) {
                    statuses.push(vendor.status);
                } else {
                    const venue = item.venues.find((venue: any) => venue.venueId === vId);
                    statuses.push(venue.status);
                }
            });
            setNotificationStatus(statuses);
        }
    }, [notif]);

    const handleMarkAsRead = async (notificationId: string) => {
        try {
            await updateNotification({ vId, nId: notificationId });
            setReadUsers(prevState => [...prevState, notificationId]);
        } catch (error) {
            console.error("Error marking notification as read:", error);
        }
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data?.users.map((user: any, index: number) => (
                <div key={index} className={`p-4 m-4 border border-gray-200 rounded shadow-md ${notificationStatus[index] === 'read' || readUsers.includes(user.notificationId) ? 'bg-gray-100' : ''}`}>
                    <div className="mb-4">
                        <p className="text-lg font-bold">{user.user.fullName}</p>
                        <p className="text-gray-500">{user.user.email}</p>
                    </div>
                    <div className="mb-2">
                        <p className="text-gray-600">City: {user.user.city}</p>
                        <p className="text-gray-600">Phone: {user.user.phone}</p>
                    </div>
                    <button
                        onClick={() => handleMarkAsRead(user.notificationId)}
                        className={`font-bold py-2 px-4 rounded ${notificationStatus[index] === 'read' || readUsers.includes(user.notificationId) ? 'bg-green-500 hover:bg-green-700 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                    >
                        {/* {notificationStatus[index] === 'read' ? 'Marked as Read' : 'Mark as Read' }!! {readUsers.includes(user.notificationId) ? 'Marked as Read' : 'Mark as Read'} */}
                        {notificationStatus[index] === 'read' || readUsers.includes(user.notificationId) ? 'Marked as Read' : 'Mark as read' }
                    </button>
                </div>
            ))}
        </div>
    );
}

export default UserNotification;

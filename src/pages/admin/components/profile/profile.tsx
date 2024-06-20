import { FC, useState } from "react";
import { useGetAdminQuery, useUpdateAdminMutation } from "../../../../redux/api/admin";

import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';


// Define interface for props
interface ProfileProps {
  avatar?: string;
  name?: string;
  email?: string;
  contact?: string;
  address?: string;
  city?: string;
}

// const id = "665ee38ffd074e3e7c25f70b";

// Use interface in component props
const Profile: FC<ProfileProps> = ({
  avatar = "default-avatar.jpg",
  name,
  email,
  contact,
  address,
  city,
}) => {

    
  const id =  useSelector((state: RootState) => state?.auth?.user?._id) ;
  console.log("admin" , id)

  const [isEditing, setIsEditing] = useState(false);
  const [editedAvatar, setEditedAvatar] = useState(avatar);
  const [editedName, setEditedName] = useState(name || undefined);
  const [editedContact, setEditedContact] = useState(contact || undefined);
  const [editedCity, setEditedCity] = useState(city || undefined);
  const [editedAddress, setEditedAddress] = useState(address || undefined);
  const [editedPassword, setEditedPassword] = useState("");
  const { data: admin, refetch } = useGetAdminQuery(id || "");
  const [updateAdmin] = useUpdateAdminMutation();




  // Fetch admin details
  if (admin) {
    avatar = "default-avatar.jpg";
    name = admin?.profile.name;
    email = admin?.profile.email;
    contact = admin?.profile.contact;
    address = admin?.profile.address;
    city = admin?.profile.city;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    // Perform save action, for now just log the edited values
    const updatedData = {
      id: id,
      admin: {
        name: editedName,
        contact: editedContact,
        address: editedAddress,
        city: editedCity,
      },
    };

    try {
      const response = await updateAdmin(updatedData).unwrap();
      refetch();
      console.log("updatedAdmin", response);
    } catch (error) {
      console.error("Failed to update user: ", error);
    }

    // Reset edit mode
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset edited values to original values
    setEditedAvatar(avatar);
    setEditedName(name);
    setEditedContact(contact);
    setEditedPassword("");
    setEditedAddress(address);
    setEditedCity(city);

    // Reset edit mode
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 shadow-md rounded-md p-6 flex h-screen">
      <div className="w-3/4 mb-4 shadow-2xl rounded-md border-2 bg-white">
        {isEditing ? (
          <div className="p-6">
            <div className="flex flex-col items-center mb-4">
              <label
                htmlFor="avatarInput"
                className="mb-2 font-semibold text-lg"
              >
                Avatar URL:
              </label>
              <input
                id="avatarInput"
                type="text"
                value={editedAvatar}
                onChange={(e) => setEditedAvatar(e.target.value)}
                placeholder="Avatar URL"
                className="w-2/3 mb-4 rounded-md p-2 border-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col items-center mb-4">
              <label htmlFor="nameInput" className="mb-2 font-semibold text-lg">
                Name:
              </label>
              <input
                id="nameInput"
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                placeholder="Name"
                className="w-2/3 mb-4 rounded-md p-2 border-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col items-center mb-4">
              <label
                htmlFor="contactInput"
                className="mb-2 font-semibold text-lg"
              >
                Contact:
              </label>
              <input
                id="contactInput"
                type="text"
                value={editedContact}
                onChange={(e) => setEditedContact(e.target.value)}
                placeholder="Contact"
                className="w-2/3 mb-4 rounded-md p-2 border-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col items-center mb-4">
              <label
                htmlFor="passwordInput"
                className="mb-2 font-semibold text-lg"
              >
                Password:
              </label>
              <input
                id="passwordInput"
                type="password"
                value={editedPassword}
                onChange={(e) => setEditedPassword(e.target.value)}
                placeholder="Password"
                className="w-2/3 mb-4 rounded-md p-2 border-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col items-center mb-4">
              <label htmlFor="cityInput" className="mb-2 font-semibold text-lg">
                City:
              </label>
              <input
                id="cityInput"
                type="text"
                value={editedCity}
                onChange={(e) => setEditedCity(e.target.value)}
                placeholder="City"
                className="w-2/3 mb-4 rounded-md p-2 border-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col items-center mb-4">
              <label
                htmlFor="addressInput"
                className="mb-2 font-semibold text-lg"
              >
                Address:
              </label>
              <input
                id="addressInput"
                type="text"
                value={editedAddress}
                onChange={(e) => setEditedAddress(e.target.value)}
                placeholder="Address"
                className="w-2/3 mb-4 rounded-md p-2 border-2 border-gray-300"
              />
            </div>
          </div>
        ) : (
<div className="flex justify-center m-4">
            <div className="flex flex-col justify-center">
              <img
                src={avatar}
                alt="Avatar"
                className="w-24 h-24 rounded-full m-auto bg-blue-900"
              />

              <h3 className="text-lg font-semibold text-center m-2">
                Name: {name}
              </h3>
              <p className="text-center mb-2">Email: {email}</p>
              <p className="text-center mb-2">Contact: {contact}</p>
              <p className="text-center mb-2">City: {city}</p>
              <p className="text-center mb-2">Address: {address}</p>
            </div>
          </div>
        )}
      </div>

      <div className="w-1/4 mb-4 border-2 shadow-2xl rounded-md ml-4 bg-white flex flex-col justify-center items-center">
        {!isEditing && (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-xl font-semibold m-4 shadow-md"
          >
            Edit
          </button>
        )}
        {isEditing && (
          <div className="flex flex-col w-full p-4">
            <button
              onClick={handleSaveClick}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-xl font-semibold mb-4 shadow-md"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md text-xl font-semibold shadow-md"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;








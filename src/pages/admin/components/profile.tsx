import { FC, useState } from "react";
import { useGetAdminQuery, useUpdateAdminMutation } from "../../../redux/api/admin";

// Define interface for props
interface ProfileProps {
  avatar?: string;
  name?: string;
  email?: string;
  contact?: string;
  address?: string;
  city?: string;
}

const id="665ee38ffd074e3e7c25f70b";

// Use interface in component props
const Profile: FC<ProfileProps> = ({
  avatar = "default-avatar.jpg",
  name,
  email,
  contact,
  address,
  city
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAvatar, setEditedAvatar] = useState(avatar);
  const [editedName, setEditedName] = useState(name || undefined);
  
  const [editedContact, setEditedContact] = useState(contact || undefined);
  const [editedCity, setEditedCity] = useState(city || undefined);
  const [editedAddress, setEditedAddress] = useState(address || undefined);
  const [editedPassword, setEditedPassword] = useState("");
  const { data: admin, refetch } = useGetAdminQuery(id);
  // const { data :updateAdmin } = useUpdateAdminMutation();
  const [updateAdmin] = useUpdateAdminMutation();

  


  avatar = "default-avatar.jpg"
  name = admin?.profile.name
  email = admin?.profile.email
  contact = admin?.profile.contact
  address = admin?.profile.address
  city = admin?.profile.city

  console.log("sjdf",admin);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async() => {
    // Perform save action, for now just log the edited values
    console.log("Edited Avatar:", editedAvatar);
    console.log("Edited Name:", editedName);
    console.log("Edited Contact:", editedContact);
    console.log("Edited Password:", editedPassword);
    console.log("Edited Address:", editedAddress);
    console.log("Edited City", editedCity);


    const updatedData = {
      id: id,
       admin: {
        name:editedName,
        contact: editedContact,
        address: editedAddress,
        city: editedCity,
        // You may want to include other fields here if needed
      },
    };
    console.log(updatedData)

    try {
      console.log("Before API call");
    const reponse =  await updateAdmin(updatedData).unwrap();
      refetch();
      console.log("updatedAdmin",reponse)

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
    <div className="bg-white shadow-md rounded-md p-6 flex h-screen">
      <div className="w-3/4 mb-4 shadow-2xl shadow-slate-400 border-2  ">
        {isEditing ? (
          <div className=" m-4 border-2 border-gray-300">
            <div className="flex flex-col items-center">
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
                className="w-1/3 mb-2 rounded-md p-2 text-center border-2 border-slate-300"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="nameInput" className="mb-2 font-semibold text-lg">
                Name:
              </label>
              <input
                id="nameInput"
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                placeholder="Name"
                className="w-1/3 mb-4 rounded-md p-2 text-center border-2 border-slate-300"
              />
            </div>
            <div className="flex flex-col items-center">
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
                className="w-1/3 mb-4 rounded-md p-2 text-center border-2 border-slate-300"
              />
            </div>
            <div className="flex flex-col items-center">
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
                className="w-1/3 mb-2 rounded-md p-2 text-center border-2 border-slate-300"
              />
            </div>

            <div className="flex flex-col items-center">
              <label
                htmlFor="cityInput"
                className="mb-2 font-semibold text-lg"
              >
                City:
              </label>
              <input
                id="cityInput"
                type="city"
                value={editedCity}
                onChange={(e) => setEditedCity(e.target.value)}
                placeholder="City"
                className="w-1/3 mb-2 rounded-md p-2 text-center border-2 border-slate-300"
              />
            </div>

            <div className="flex flex-col items-center">
              <label
                htmlFor="addressInput"
                className="mb-2 font-semibold text-lg"
              >
                Address:
              </label>
              <input
                id="addressInput"
                type="address"
                value={editedAddress}
                onChange={(e) => setEditedAddress(e.target.value)}
                placeholder="Address"
                className="w-1/3 mb-2 rounded-md p-2 text-center border-2 border-slate-300"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center m-4 border-2">
            <div className="flex flex-col justify-center">
              <img
                src={avatar}
                alt="Avatar"
                className="w-24 h-24 rounded-full m-auto bg-blue-900"
              />

              <h3 className="text-lg font-semibold text-center m-2">
                Name: {name}
              </h3>
              <p className=" text-center m-2">Email: {email}</p>
              <p className=" text-center m-2">Contact: {contact}</p>
              <p className=" text-center m-2">City: {city}</p>
              <p className=" text-center m-2">Address: {address}</p>
            </div>
          </div>
        )}
      </div>

      <div className="w-1/4 mb-4 border-2 shadow-2xl shadow-slate-400 ml-4">
        {!isEditing && (
          <div className="m-4 shadow-lg shadow-blue-950">
            <button
              onClick={handleEditClick}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 w-full text-xl font-semibold rounded-md"
            >
              Edit
            </button>
          </div>
        )}
        {isEditing && (
          <div className="  m-4 ">
            <button
              onClick={handleSaveClick}
              className="bg-green-500 hover:bg-green-600 text-white py-2 w-full text-xl font-semibold rounded-md mr-2 shadow-lg shadow-green-900"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2  mt-4 w-full text-xl font-semibold rounded-md shadow-lg shadow-gray-900"
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

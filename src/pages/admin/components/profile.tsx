import { FC, useState } from "react";

// Define interface for props
interface ProfileProps {
  avatar?: string;
  name?: string;
  email?: string;
  contact?: string;
}

// Use interface in component props
const Profile: FC<ProfileProps> = ({
  avatar = "default-avatar.jpg",
  name = "John Doe",
  email = "john.doe@example.com",
  contact = "123-456-7890",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAvatar, setEditedAvatar] = useState(avatar);
  const [editedName, setEditedName] = useState(name);
  const [editedContact, setEditedContact] = useState(contact);
  const [editedPassword, setEditedPassword] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform save action, for now just log the edited values
    console.log("Edited Avatar:", editedAvatar);
    console.log("Edited Name:", editedName);
    console.log("Edited Contact:", editedContact);
    console.log("Edited Password:", editedPassword);

    // Reset edit mode
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset edited values to original values
    setEditedAvatar(avatar);
    setEditedName(name);
    setEditedContact(contact);
    setEditedPassword("");

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
          </div>
        ) : (
          <div className="flex justify-center m-4 border-2">
            <div>
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

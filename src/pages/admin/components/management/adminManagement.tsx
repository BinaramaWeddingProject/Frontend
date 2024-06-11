import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useGetAllAdminQuery } from "../../../../redux/api/admin";
import { useDeleteAdminByIdMutation } from "../../../../redux/api/admin";
import { useAddAdminMutation } from "../../../../redux/api/admin";

const superadmin = "665ee38ffd074e3e7c25f70b";

const AdminManagement: React.FC = () => {
  const { data: admin, refetch } = useGetAllAdminQuery();
  const [deleteAdminById] = useDeleteAdminByIdMutation();
  const [addAdmin] = useAddAdminMutation();

  const [showModal, setShowModal] = useState(false);
  const [reloadTrigger, setReloadTrigger] = useState(false); // State to trigger reload

  useEffect(() => {
    // Effect to reload data when reloadTrigger state changes
    if (reloadTrigger) {
      refetch();
      setReloadTrigger(false);
    }
  }, [reloadTrigger, refetch]);

  const handleDelete = async (id: any) => {
    // Check if the admin ID matches the specific value
    if (id === superadmin) {
      // Skip deletion if the ID matches
      console.log("Skipping deletion for admin with ID:", id);
      alert("bhsdk papa hai hum");
      alert("nikal laude");
      alert("pehli fursat me nikal");
      alert("ab bakchodi krne aa mat jaiyo");
      return;
    } else {
      // Display confirmation dialog for other admins
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this admin?"
      );

      // If user confirms deletion, proceed with deletion
      if (confirmDelete) {
        await deleteAdminById(id);
        setReloadTrigger(true); // Trigger reload after deletion
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const { data } = await addAdmin({
        profile: {
          name: event.currentTarget.name.value,
          email: event.currentTarget.email.value,
          contact: event.currentTarget.contact.value,
          password: event.currentTarget.password.value,
          city: event.currentTarget.city.value,
          address: event.currentTarget.address.value,
        },
      });
      console.log("New admin added:", data);
      setReloadTrigger(true); // Trigger reload after addition
    } catch (error) {
      console.error("Error adding admin:", error);
    }

    setShowModal(false); // Close modal after submission
  };

  return (
    <>
    <h2 className="text-center font-bold text-2xl">Admins</h2>
    <hr className="border-2"></hr>
    <div className="bg-white shadow-md rounded-md px-6 pb-6 pt-2 flex h-screen">
      <div className="w-3/4 mb-4 shadow-2xl shadow-slate-400 ">
        <div className="flex w-full bg-white">
          <div className="h-fit flex w-full text-lg font-bold text-center">
            <div className="w-1/12 bg-slate-200 ml-2 mt-2 mr-1">Index</div>
            <div className="w-3/12 bg-slate-200 font-bold mt-2 mr-1">Name</div>
            <div className="w-3/12 bg-slate-200 font-bold mt-2 mr-1">Email</div>
            <div className="w-2/12 bg-slate-200 font-bold mt-2 mr-1">
              Contact
            </div>
            <div className="w-2/12 bg-slate-200 mt-2 mr-1">City</div>
            <div className="w-1/12 bg-slate-200 mt-2 mr-2">Delete</div>
          </div>
        </div>
        <div className=" w-full bg-slate-300">
        {Array.isArray(admin) && admin.map((admin: any, index: any) => (
            <React.Fragment key={index}>
              <div className="flex w-full bg-white text-center ">
                <div className="w-1/12 bg-slate-100 mt-2 ml-2 mr-1">
                  {index + 1}
                </div>
                <div className="w-3/12 bg-slate-100 font-bold mt-2 mr-1">
                  {admin?.profile.name}
                </div>
                <div className="w-3/12 bg-slate-100 font-bold mt-2 mr-1">
                  {admin?.profile.email}
                </div>
                <div className="w-2/12 bg-slate-100 font-bold mt-2 mr-1">
                  {admin?.profile.contact}
                </div>
                <div className="w-2/12 bg-slate-100 font-bold mt-2 mr-1">
                  {admin?.profile.city}
                </div>
                <div
                  className="w-1/12 bg-slate-100 mt-2 mr-2 cursor-pointer flex justify-center items-center"
                  onClick={() => handleDelete(admin?._id)}
                >
                  {admin?._id == superadmin ? (
                    <FaTrash color="red" opacity={0.5} />
                  ) : (
                    <FaTrash />
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-1/4 mb-4 shadow-2xl shadow-slate-400 ml-4 flex flex-col">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white py-2 px-4 m-2 rounded-lg shadow-md"
        >
          Add
        </button>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">Add Admin</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="contact"
                  >
                    Contact:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contact"
                    name="contact"
                    type="number"
                    placeholder="Enter Contact"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="city"
                  >
                    City:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter City"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="address"
                  >
                    Address:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter Address"
                    required
                  />
                </div>

                {/* Repeat similar structure for other form fields */}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default AdminManagement;

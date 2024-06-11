import React, { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { useGetAllUserQuery } from "../../../../redux/api/user";
import { useDeleteUserMutation } from "../../../../redux/api/user";
import { useNavigate } from "react-router-dom";

const UserManagement: React.FC = () => {
  const navigate = useNavigate();

  const { data: user, refetch } = useGetAllUserQuery();

  const [deleteUser] = useDeleteUserMutation();

  const admins = user?.data.users;
  console.log("user data", admins);

  const [reloadTrigger, setReloadTrigger] = useState(false); // State to trigger reload

  useEffect(() => {
    // Effect to reload data when reloadTrigger state changes
    if (reloadTrigger) {
      refetch();
      setReloadTrigger(false);
    }
  }, [reloadTrigger, refetch]);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this User?");
    
    // If user confirms deletion, proceed with deletion
    if (confirmDelete) {
    const res = await deleteUser(id);
    setReloadTrigger(true); // Trigger reload after deletion
    console.log("admin deleted", res);
    }
  };

  function viewUser(id: any): void {
    navigate(`/UserProfile/${id}`);
  }

  return (
    <>
     <h2 className="text-center font-bold text-2xl">Users</h2>
     <hr className="border-2"></hr>
     <div className="bg-white shadow-md rounded-md px-6 pb-6 pt-2 flex h-screen">
      <div className="w-full mb-4 shadow-2xl shadow-slate-400 border-2">
        <div className="flex w-full bg-slate-300">
          <div className="h-fit flex w-full text-lg font-bold text-center">
            <div className="w-1/12 bg-slate-200 ml-2 mt-2 mr-1">Index</div>
            <div className="w-3/12 bg-slate-200 font-bold mt-2 mr-1">Name</div>
            <div className="w-4/12 bg-slate-200 font-bold mt-2 mr-1">Email</div>
            <div className="w-1/12 bg-slate-200 font-bold mt-2 mr-1">
              Contact
            </div>
            <div className="w-1/12 bg-slate-200 font-bold mt-2 mr-1">
              City
            </div>
            <div className="w-1/12 bg-slate-200 font-bold mt-2 mr-1">View</div>
            {/* <div className="w-1/12 bg-pink-300 mt-2 mr-1">Select</div> */}
            <div className="w-1/12 bg-slate-200 mt-2 mr-2">Delete</div>
          </div>
        </div>
        <div className=" w-full bg-slate-300 pb-2">
          {admins?.map((admin: any, index: any) => (
            <React.Fragment key={index}>
              <div className="flex w-full bg-slate-300 text-center ">
                <div className="w-1/12 bg-slate-100 mt-2 ml-2 mr-1">
                  {index + 1}
                </div>
                <div className="w-3/12 bg-slate-100 font-bold mt-2 mr-1">
                  {admin?.fullName}
                </div>
                <div className="w-4/12 bg-slate-100 font-bold mt-2 mr-1">
                  {admin?.email}
                </div>
                <div className="w-1/12 bg-slate-100 font-bold mt-2 mr-1">
                  {admin?.phone}
                </div>
                <div className="w-1/12 bg-slate-100 font-bold mt-2 mr-1">
                  {admin?.city}
                </div>
                <div
                  className="w-1/12 bg-slate-100 mt-2 mr-1 cursor-pointer flex justify-center items-center"
                  onClick={() => viewUser(admin?._id)}
                >
                  {<FaEye size={20} />}
                </div>

                <div
                  className="w-1/12 bg-slate-100 mt-2 mr-2 cursor-pointer flex justify-center items-center"
                  onClick={() => handleDelete(admin?._id)}
                >
                  <FaTrash />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default UserManagement;

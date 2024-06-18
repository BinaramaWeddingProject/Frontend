import React, { useEffect, useState } from "react";
import { FaCheck, FaEye, FaTimes, FaTrash } from "react-icons/fa";
import { useAllVenueQuery } from "../../../../redux/api/venue";
import { useUpdateVenueMutation } from "../../../../redux/api/venue";
import { useDeleteVenueByIdMutation } from "../../../../redux/api/venue";
import { useNavigate } from "react-router-dom";

const VenueManagement: React.FC = () => {
  const navigate = useNavigate();
  const { data: venue, refetch } = useAllVenueQuery("");
  const [verify] = useUpdateVenueMutation();
  const [deleteVenue] = useDeleteVenueByIdMutation();

  // console.log("vendor data", venue?.data.venues);
  const admins = venue?.data.venues;

  const [reloadTrigger, setReloadTrigger] = useState(false); // State to trigger reload

  useEffect(() => {
    // Effect to reload data when reloadTrigger state changes
    if (reloadTrigger) {
      refetch();
      setReloadTrigger(false);
    }
  }, [reloadTrigger, refetch]);

  const handleApproval = async (id: string) => {
    const verificationStatus = "Approved"; // Setting the verification status to "Approved"
    const res = await verify({ id, venue: { isVerified: verificationStatus } });
    // console.log("isverifies", res);
    // console.log("id of vendor", id);
    // console.log("vendor", admins);
  };

  const handleRejection = async (id: string) => {
    const verificationStatus = "Rejected"; // Setting the verification status to "Approved"
    const res = await verify({ id, venue: { isVerified: verificationStatus } });
    // console.log("isverifies", res);
    // You may want to perform other actions related to rejection here
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Venue?"
    );

    // If user confirms deletion, proceed with deletion
    if (confirmDelete) {
      const res = await deleteVenue(id);
      setReloadTrigger(true); // Trigger reload after deletion
      // Update the state to reflect the new list of admins
      // console.log("admin deleted", res);
    }

    // You may want to perform other actions related to deletion here
  };

  function viewUser(id: string): void {
    navigate(`/VenueProfile/${id}`);
  }

  return (
    <>
      <h2 className="text-center font-bold text-2xl">Venues</h2>
      <hr className="border-2"></hr>
      <div className="bg-white shadow-md rounded-md px-6 pb-6 pt-2 flex h-screen">
        <div className="w-full mb-4 shadow-2xl shadow-slate-400 border-2">
          <div className="flex w-full bg-slate-300">
            <div className="h-fit flex w-full text-lg font-bold text-center">
              <div className="w-1/12 bg-slate-200 ml-2 mt-2 mr-1">Index</div>
              <div className="w-3/12 bg-slate-200 font-bold mt-2 mr-1">
                Name
              </div>
              <div className="w-3/12 bg-slate-200 font-bold mt-2 mr-1">
                Email
              </div>
              <div className="w-1/12 bg-slate-200 font-bold mt-2 mr-1">
                Contact
              </div>
              <div className="w-1/12 bg-slate-200 font-bold mt-2 mr-1">
                City
              </div>
              <div className="w-1/12 bg-slate-200 mt-2 mr-1">View</div>
              <div className="w-1/12 bg-slate-200 mt-2 mr-1">Approval</div>
              <div className="w-1/12 bg-slate-200 mt-2 mr-2">Delete</div>
            </div>
          </div>
          <div className=" w-full bg-slate-300 pb-2">
            {admins?.map((admin, index) => (
              <React.Fragment key={index}>
                <div className="flex w-full bg-slate-300 text-center ">
                  <div className="w-1/12 bg-slate-100 mt-2 ml-2 mr-1">
                    {index + 1}
                  </div>
                  <div className="w-3/12 bg-slate-100 font-bold mt-2 mr-1">
                    {admin.yourName}
                  </div>
                  <div className="w-3/12 bg-slate-100 font-bold mt-2 mr-1">
                    {admin.email}
                  </div>
                  <div className="w-1/12 bg-slate-100 font-bold mt-2 mr-1">
                    {admin.phone}
                  </div>
                  <div className="w-1/12 bg-slate-100 font-bold mt-2 mr-1">
                    {admin.city}
                  </div>
                  <div
                    className="w-1/12 bg-slate-100 mt-2 mr-1 cursor-pointer flex justify-center items-center"
                    onClick={() => viewUser(admin?._id)}
                  >
                    <FaEye size={20} />
                  </div>
                  <div className="w-1/12 bg-slate-100 mt-2 mr-1 cursor-pointer flex justify-center items-center">
                    {admin?.isVerified === "Approved" ? (
                      <span className="bg-green-500 text-white rounded font-semibold">
                        Approved
                      </span>
                    ) : admin?.isVerified === "Rejected" ? (
                      <span className="bg-red-500 text-white rounded font-semibold">
                        Rejected
                      </span>
                    ) : (
                      <>
                        <button
                          onClick={() => handleApproval(admin?._id)}
                          className="bg-green-500 text-white mr-2"
                        >
                          <FaCheck />
                        </button>
                        <button
                          onClick={() => handleRejection(admin?._id)}
                          className="bg-red-500 text-white"
                        >
                          <FaTimes />
                        </button>
                      </>
                    )}
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

export default VenueManagement;

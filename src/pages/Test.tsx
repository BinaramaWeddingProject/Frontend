import React, { useState } from "react";
import { useUpdateVenueMutation } from "../redux/api/venue";
import { Venue } from "../../types/types";

const id = "6683e9b695dbe30db640fcd1";

const UpdateVenueComponent = () => {
  const initialVenueState: Venue = {
    name: "",
    address: "",
    description: "",
    // Add more fields as needed
  };

  const [venue, setVenue] = useState<Venue>(initialVenueState);
  const [images, setImages] = useState<File[]>([]);
  const [updateVenue, { isLoading }] = useUpdateVenueMutation();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages(Array.from(event.target.files));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVenue((prevVenue) => ({
      ...prevVenue,
      [name]: value,
    }));
  };

  const handleUpdateVenue = async () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("venue", JSON.stringify(venue)); // Serialize venue object to string

    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    try {
      await updateVenue(formData); // Pass formData directly to the mutation hook
      setVenue(initialVenueState); // Reset form state after successful update if needed
      setImages([]); // Clear selected images after successful update if needed
    } catch (error) {
      console.error("Error updating venue:", error);
    }
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={venue.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={venue.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={venue.description}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <br />
      <input type="file" multiple onChange={handleFileChange} />
      <br />
      <button onClick={handleUpdateVenue} disabled={isLoading}>
        Update Venue
      </button>
    </div>
  );
};

export default UpdateVenueComponent;

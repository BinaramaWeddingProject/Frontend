import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVendor } from '../redux/api/vendor'; 
import { Vendor } from '../types/types';

interface Params {
  [key: string]: string | undefined;
}

const VendorPage = () => {
  const { _id } = useParams<Params>();
  const id = _id ;
  const [vendorData, setVendorData] = useState<Vendor | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("vendor:", id)
        const data = await getVendor(id) as Partial<Vendor>;
        setVendorData(vendorData);
        console.log(data)
        setLoading(false);
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

    // Clean up effect
    return () => {
      // Cleanup code if needed
    };
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {vendorData && (
        <div>
          <h1>Vendor Details</h1>
          <p>ID: {vendorData._id}</p>
          <p>ID: {vendorData.name}</p>
          <p>ID: {vendorData.email}</p>
          {/* Render other vendor data */}
          
        </div>
      )}
    </div>
  );
};

export default VendorPage;

// src/pages/RealWeddingsList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { RealWeddingsResponse} from '../types/api-types';
import { RealWeddings } from '../types/types';
import { useGetAllRealWeddingsQuery } from '../redux/api/realWeddings';
import NavBar from '../components/navbar';

const RealWeddingsList: React.FC = () => {
  const { data: realWeddingsData, refetch } = useGetAllRealWeddingsQuery('');
  console.log("real data",realWeddingsData);
  const realWeddings: RealWeddings[] = realWeddingsData?.data.realWeddings || [];

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-8 font-roboto">
        <h1 className="text-4xl font-bold mb-8 text-center">Real Weddings</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {realWeddings.length > 0 ? (
            realWeddings.map((wedding: RealWeddings) => (
              <div key={wedding._id} className="border rounded-lg overflow-hidden shadow-lg">
                {wedding.images && wedding.images.length > 0 && (
                  <img src={wedding.images[0]} alt={wedding.title ?? 'Untitled'} className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{wedding.title ?? 'Untitled'}</h2>
                  <p className="text-gray-700">{wedding.content ? wedding.content.substring(0, 100) + '...' : 'No content available'}</p>
                  <Link to={`/realWeddings/${wedding._id}`} className="text-blue-500 hover:underline mt-2 block">
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No real weddings available</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RealWeddingsList;

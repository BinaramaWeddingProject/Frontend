// src/pages/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../components/navbar";
import InformationBanner from "../components/InformationBanner";
import Footer from "../components/Footer";
import { useRankedVenuesQuery } from "../redux/api/venue";
import { useGetAllBlogsQuery } from '../redux/api/blog';
import { useGetAllRealWeddingsQuery } from '../redux/api/realWeddings'; // Import the real weddings query hook
import VenueCard from "../components/VenueCard";
import SkeletonBlogCard from "../components/skeleton/Blog";
import SkeletonRealWeddingCard from "../components/skeleton/RealWedding"; // Adjust the import path as needed
import { AllVenuesResponse } from "../types/api-types";
import { Blog, RealWeddings } from '../types/types';

const imageUrl = "/wv_cover2.jpg";

const Home: React.FC = () => {
  // Fetch ranked venues using useRankedVenuesQuery hook
  const { data: venuesData, isLoading: isLoadingVenues, error: venuesError } = useRankedVenuesQuery();
  const { data: blogData, isLoading: isLoadingBlogs, error: blogsError } = useGetAllBlogsQuery('');
  const { data: realWeddingsData, isLoading: isLoadingRealWeddings, error: realWeddingsError } = useGetAllRealWeddingsQuery();

  // Type assertion to specify the shape of venuesData
  const venues = venuesData?.data?.venues as AllVenuesResponse['data']['venues'] || [];
  const blogs = blogData?.data.blog || [];
  const realWeddings = realWeddingsData?.data.realWeddings || [];

  // Handle error appropriately based on its type
  const errorMessageVenues = venuesError 
    ? 'status' in venuesError 
      ? `Error: ${venuesError.status} - ${JSON.stringify(venuesError.data)}` 
      : venuesError.message
    : null;

  const errorMessageBlogs = blogsError 
    ? 'status' in blogsError 
      ? `Error: ${blogsError.status} - ${JSON.stringify(blogsError.data)}` 
      : blogsError.message
    : null;

  const errorMessageRealWeddings = realWeddingsError
    ? 'status' in realWeddingsError
      ? `Error: ${realWeddingsError.status} - ${JSON.stringify(realWeddingsError.data)}`
      : realWeddingsError.message
    : null;

  return (
    <div>
      <NavBar />
      <div className="relative">
        <div
          className="bg-cover bg-center h-[95vh]"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="bg-black bg-opacity-10 h-[95vh] flex flex-col justify-center items-center">
            {/* Additional content or components */}
          </div>
        </div>
      </div>
      <div className="py-12">
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-8">Top Rated Venues</h2>
        {isLoadingVenues ? (
          <div>Loading...</div>
        ) : venuesError ? (
          <div>{errorMessageVenues}</div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 scale-90 -mt-16">
              {venues.map((venue: any, index: number) => (
                <VenueCard
                  key={index}
                  venue={{
                    name: venue.businessName,
                    location: venue.city,
                    maxGuests: venue.guestCapacity,
                    contact: venue.phone,
                    description: venue.summary,
                    vegPrice: venue.foodPackages,
                    images: venue.images,
                    id: venue._id,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="py-12 bg-white">
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-8">Latest Blog Posts</h2>
        {isLoadingBlogs ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonBlogCard key={index} />
            ))}
          </div>
        ) : blogsError ? (
          <div>{errorMessageBlogs}</div>
        ) : blogs.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {blogs.slice(0, 4).map((blog: Blog) => {
              const imageUrl = Array.isArray(blog.images) ? blog.images[0] : blog.images || '/default-image.jpg';
              const contentPreview = blog.content ? blog.content.substring(0, 100) : 'No content available';
              return (
                <div key={blog._id} className="border rounded-lg overflow-hidden shadow-lg">
                  <img src={imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                    <p className="text-gray-700">{contentPreview}...</p>
                    <Link to={`/blogs/${blog._id}`} className="text-red-500 hover:underline mt-2 block">
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No blogs available</p>
        )}
      </div>

      <div className="py-12 bg-white">
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-8">Real Wedding Posts</h2>
        {isLoadingRealWeddings ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonRealWeddingCard key={index} />
            ))}
          </div>
        ) : realWeddingsError ? (
          <div>{errorMessageRealWeddings}</div>
        ) : realWeddings.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {realWeddings.slice(0, 4).map((wedding: RealWeddings) => {
              const imageUrl = wedding.images && wedding.images.length > 0 ? wedding.images[0] : '/default-image.jpg';
              const contentPreview = wedding.content ? wedding.content.substring(0, 100) : 'No content available';
              return (
                <div key={wedding._id} className="border rounded-lg overflow-hidden shadow-lg">
                  <img src={imageUrl} alt={wedding.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{wedding.title}</h2>
                    <p className="text-gray-700">{contentPreview}...</p>
                    <Link to={`/realWedding/${wedding._id}`} className="text-blue-500 hover:underline mt-2 block">
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No real weddings available</p>
        )}
      </div>

      <div className="py-12 bg-white">
        <InformationBanner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// src/pages/BlogList.tsx

import React from 'react';
import { Link } from 'react-router-dom';
// import NavBar from '../components/navbar';
// import Footer from '../components/Footer';
import { useGetAllBlogsQuery } from '../redux/api/blog';
import SkeletonBlogCard from '../components/skeleton/Blog';
import { Blog } from '../types/types';


const RelatedArticles: React.FC = () => {
  const { data: blogData, error, isLoading } = useGetAllBlogsQuery('');
  const blogs:any = blogData?.data.blog || [];


  const errorMessageBlogs = error
    ? 'status' in error
      ? `Error: ${error.status} - ${JSON.stringify(error.data)}` 
      : error.message
    : null;


  if (error) {      
    return <h1>Error while loading data</h1>;
  }

  return (
    <>
      <div className="py-12 bg-[#fffdd0]">
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-8">Latest Blog Posts</h2>
        {isLoading ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonBlogCard key={index} />
            ))}
          </div>
        ) : error ? (
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

    </>
  );
};

export default RelatedArticles;

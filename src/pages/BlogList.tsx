// src/pages/BlogList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';
import { useGetAllBlogsQuery } from '../redux/api/blog';

interface BlogPost {
  _id: string;  // Assuming MongoDB ObjectId is used
  title: string;
  images: string;
  content: string;
}

const BlogList: React.FC = () => {
  const { data: blogData, refetch } = useGetAllBlogsQuery('');
  const blogs: BlogPost[] = blogData?.data.blog || [];

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-8 font-roboto">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {blogs.length > 0 ? (
            blogs.map((blog: BlogPost) => (
              <div key={blog._id} className="border rounded-lg overflow-hidden shadow-lg">
                <img src={blog.images} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-700">{blog.content.substring(0, 100)}...</p>
                  <Link to={`/blog/${blog._id}`} className="text-blue-500 hover:underline mt-2 block">
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogList;

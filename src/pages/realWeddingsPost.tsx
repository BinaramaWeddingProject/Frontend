// src/pages/RealWeddingsPost.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRealWeddingsPostByIdQuery, useUpdateRealWeddingsPostMutation } from '../redux/api/realWeddings';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';

interface RealWeddingPostInterface {
  id: string;
  title: string;
  images: string[];
  content: string;
}

const RealWeddingsPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("this is the id", id)
  const { data: realWeddingData, error, isLoading, refetch } = useGetRealWeddingsPostByIdQuery(id || '');
  console.log("this isnthe data real",realWeddingData);
  const [isEditing, setIsEditing] = useState(false);
  const [updateRealWedding] = useUpdateRealWeddingsPostMutation();
  const [formData, setFormData] = useState<RealWeddingPostInterface>({
    id: '',
    title: '',
    images: [],
    content: ''
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  useEffect(() => {
    if (realWeddingData?.data) {
      setFormData({
        id: realWeddingData.data.realWeddings._id,
        title: realWeddingData.data.realWeddings.title || '',
        images: realWeddingData.data.realWeddings.images || [],
        content: realWeddingData.data.realWeddings.content || ''
      });
    }
  }, [realWeddingData]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !realWeddingData?.data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Real Wedding post not found</div>
      </div>
    );
  }

  const realWedding = realWeddingData?.data.realWeddings;

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({
      id: realWedding._id,
      title: realWedding.title || '',
      images: realWedding.images || [],
      content: realWedding.content || '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('title', formData.title);
    formDataToSubmit.append('content', formData.content);
    console.log("this is the form data",formDataToSubmit);
  
    selectedImages.forEach(image => {
      formDataToSubmit.append('images', image);
    });
  
    try {
        console.log("error kya hai?", formData)
      const res = await updateRealWedding({ id: formData.id, realWeddingsFormData: formDataToSubmit });
      console.log("res DATA",res);
      setIsEditing(false);
      refetch();
    } catch (error) {
      console.error('Failed to update real wedding:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-8 font-roboto">
        {!isEditing ? (
          <>
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
              {realWedding?.title}
            </h1>
            {realWedding?.images && realWedding?.images[0] && (
              <div className="flex justify-center mb-8">
                <img
                  src={realWedding?.images[0]}
                  alt={realWedding?.title}
                  className="w-full md:w-2/3 lg:w-1/2 h-80 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            <div className="prose max-w-none mx-auto text-gray-700 leading-loose">
              {realWedding?.content}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                Images
              </label>
              <input
                type="file"
                id="images"
                name="images"
                multiple
                onChange={handleImageChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Save
            </button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default RealWeddingsPost;

// src/pages/AboutUs.tsx

import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/navbar';


const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Manager',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Michael Johnson',
      role: 'Lead Developer',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Emily Davis',
      role: 'Customer Support',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  const youtubeVideos = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/oHg5SJYRHA0',
    'https://www.youtube.com/embed/tVj0ZTS4WF4',
  ];

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Learn more about our company and our mission.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Mission</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our mission is to provide the best wedding vendor services to couples and make their special day truly memorable.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Story</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We started our journey in 2015 with a passion for creating unforgettable wedding experiences. Since then, we've grown into a leading provider of wedding vendor services, working with talented professionals to make every couple's dream wedding a reality.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Our Team</h3>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="mx-auto rounded-full w-32 h-32 mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Videos</h3>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {youtubeVideos.map((videoUrl, index) => (
                <div key={index} className="rounded-lg shadow-md overflow-hidden">
                  <iframe
                    width="100%"
                    height="315"
                    src={videoUrl}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
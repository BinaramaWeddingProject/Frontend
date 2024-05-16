import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignupMutation } from '../redux/api/vendor';
import { Vendor } from '../types/types';

export const VenueRegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const [register , ] = useSignupMutation();
  


  const formik = useFormik({
    initialValues: {
      businessName: '',
      cityName: '',
      // businessType: '',
      yourName: '',
      contact: '',
      email: '',
      password: '',
      // confirmPassword: '',
      comments: ''
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required('Business name is required'),
      cityName: Yup.string().required('City name is required'),
      // businessType: Yup.string().required('Type of business is required'),
      yourName: Yup.string().required('Your name is required'),
      contact: Yup.string().required('Contact number is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      // password: Yup.string().required('Password is required'),
      // confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
      comments: Yup.string()
    }),
    onSubmit: async (values) => {
      try {
        console.log('Vendor registration form submitted:', values);
    
        // Create a Vendor object from the form values
        const vendorData: Vendor = {
          _id: '', // Set these properties based on your actual Vendor type
          name: values.yourName,
          password: values.password,
          phone: values.contact,
          // Add other properties as needed
        };
    
        // Call the register function with the Vendor object
        await register(vendorData);
    
        // Set submitted to true after successful submission
        setSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle errors if needed
      }
    }
    
  });

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md grid grid-cols-2 gap-12">
      <div>
        {/* <h2 className="text-2xl font-bold mb-4">1st Column</h2> */}
        <div className="mb-4">
          <label htmlFor="businessName" className="block mb-1 font-medium">Business Name</label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.businessName}
          />
          {formik.touched.businessName && formik.errors.businessName && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.businessName}</div>
          )}
        </div>
{/* 
        <div className="mb-4">
          <label htmlFor="businessType" className="block mb-1 font-medium">Type of Business</label>
          <input
            id="businessType"
            name="businessType"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.businessType}
          />
          {formik.touched.businessType && formik.errors.businessType && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.businessType}</div>
          )}
        </div> */}

        <div className="mb-4">
          <label htmlFor="contact" className="block mb-1 font-medium">Contact</label>
          <input
            id="contact"
            name="contact"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
          />
          {formik.touched.contact && formik.errors.contact && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.contact}</div>
          )}
        </div>

        {/* <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.password}</div>
          )}
        </div> */}

<div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="comments" className="block mb-1 font-medium">Comments</label>
          <textarea
            id="comments"
            name="comments"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comments}
          />
        </div>
      </div>

      <div>
        {/* <h2 className="text-2xl font-bold mb-4">2nd Column</h2> */}
        <div className="mb-4">
          <label htmlFor="cityName" className="block mb-1 font-medium">City Name</label>
          <input
            id="cityName"
            name="cityName"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cityName}
          />
          {formik.touched.cityName && formik.errors.cityName && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.cityName}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="yourName" className="block mb-1 font-medium">Your Name</label>
          <input
            id="yourName"
            name="yourName"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.yourName}
          />
          {formik.touched.yourName && formik.errors.yourName && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.yourName}</div>
          )}
        </div>

        

        {/* <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1 font-medium">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.confirmPassword}</div>
          )}
        </div> */}
      </div>

      <button
        type="submit"
        className="col-span-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
      {submitted && <div className="col-span-2 text-green-500 mt-2">Form submitted successfully!</div>}
    </div>
  );
};



export const VendorRegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [register , {data , error , isSuccess}] = useSignupMutation();
  useEffect(()=>{ 
    if(isSuccess){
      console.log("user register successfully!!");
    }
    if(error){
      console.log("error while registertion of vendor", error);

    }

  },[data?.message , error , isSuccess])

  const formik = useFormik({
    initialValues: {
      businessName: '',
      cityName: '',
      businessType: '',
      yourName: '',
      contact: '',
      email: '',
      password: '',
    //  confirmPassword: '',
      comments: ''
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required('Business name is required'),
      cityName: Yup.string().required('City name is required'),
      businessType: Yup.string().required('Type of business is required'),
      yourName: Yup.string().required('Your name is required'),
      contact: Yup.string().required('Contact number is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
      comments: Yup.string()
    }),
    onSubmit: async (values) => {
      try {
        console.log('Vendor registration form submitted:', values);
    
        // Create a Vendor object from the form values
        const vendorData: Vendor = {
          _id: '', // Set these properties based on your actual Vendor type
          name: values.yourName,
          password: values.password,
          phone: values.contact,
          // Add other properties as needed
        };
    
        // Call the register function with the Vendor object
        await register(vendorData);
    
        // Set submitted to true after successful submission
        setSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle errors if needed
      }
    }
  });

  

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md grid grid-cols-2 gap-12">
      <div>
        {/* <h2 className="text-2xl font-bold mb-4">1st Column</h2> */}
        <div className="mb-4">
          <label htmlFor="businessName" className="block mb-1 font-medium">Business Name</label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.businessName}
          />
          {formik.touched.businessName && formik.errors.businessName && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.businessName}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="businessType" className="block mb-1 font-medium">Type of Business</label>
          <input
            id="businessType"
            name="businessType"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.businessType}
          />
          {formik.touched.businessType && formik.errors.businessType && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.businessType}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="contact" className="block mb-1 font-medium">Contact</label>
          <input
            id="contact"
            name="contact"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
          />
          {formik.touched.contact && formik.errors.contact && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.contact}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.password}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="comments" className="block mb-1 font-medium">Comments</label>
          <textarea
            id="comments"
            name="comments"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comments}
          />
        </div>
      </div>

      <div>
        {/* <h2 className="text-2xl font-bold mb-4">2nd Column</h2> */}
        <div className="mb-4">
          <label htmlFor="cityName" className="block mb-1 font-medium">City Name</label>
          <input
            id="cityName"
            name="cityName"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cityName}
          />
          {formik.touched.cityName && formik.errors.cityName && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.cityName}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="yourName" className="block mb-1 font-medium">Your Name</label>
          <input
            id="yourName"
            name="yourName"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.yourName}
          />
          {formik.touched.yourName && formik.errors.yourName && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.yourName}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.email}</div>
          )}
        </div>

        {/* <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1 font-medium">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500 mt-1 text-sm">{formik.errors.confirmPassword}</div>
          )}
        </div> */}
      </div>

      <button


        type="submit"
        className="col-span-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
      {submitted && <div className="col-span-2 text-green-500 mt-2">Form submitted successfully!</div>}
    </div>
  );
};
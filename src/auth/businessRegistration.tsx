import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSignupMutation } from "../redux/api/vendor";
import toast from "react-hot-toast";
import { useSignupVenueMutation } from "../redux/api/venue";
import { styles } from "../styles/style";

export const VenueRegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [register] = useSignupVenueMutation();

  const formik = useFormik({
    initialValues: {
      businessName: "",
      city: "",
      // businessType: '',
      yourName: "",
      phone: "",
      email: "",
      password: "",
      // confirmPassword: '',
      comments: "",
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required("Business name is required"),
      city: Yup.string().required("City name is required"),
      // businessType: Yup.string().required('Type of business is required'),
      yourName: Yup.string().required("Your name is required"),
      phone: Yup.string().required("Contact number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
      // confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
      comments: Yup.string(),
    }),
    onSubmit: async (values) => {
      console.log("Vendor registration form submitted:", values);
      await register(values);
      setSubmitted(true);
    },
  });

  return (
    <div className="w-[450px] mx-auto p-6 bg-white rounded shadow-md">
      <form className="w-full" onSubmit={formik.handleSubmit}>
        {/* <h2 className="text-2xl font-bold mb-4">1st Column</h2> */}
        <div className="mb-4">
          <label htmlFor="businessName" className="block mb-1 font-medium">
            Business Name
          </label>
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
            <div className="text-red-500 mt-1 text-sm">
              {formik.errors.businessName}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="cityName" className="block mb-1 font-medium">
            City Name
          </label>
          <input
            id="city"
            name="city"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city && (
            <div className="text-red-500 mt-1 text-sm">
              {formik.errors.city}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="yourName" className="block mb-1 font-medium">
            Your Name
          </label>
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
            <div className="text-red-500 mt-1 text-sm">
              {formik.errors.yourName}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="contact" className="block mb-1 font-medium">
            Contact
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 mt-1 text-sm">
              {formik.errors.phone}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
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
            <div className="text-red-500 mt-1 text-sm">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
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
            <div className="text-red-500 mt-1 text-sm">
              {formik.errors.password}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="comments" className="block mb-1 font-medium">
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comments}
          />
        </div>

        {/* <h2 className="text-2xl font-bold mb-4">2nd Column</h2> */}

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

        <button
          type="submit"
          className={`${styles.button} `}
        >
          Submit
        </button>
        {submitted && (
          <div className="col-span-2 text-green-500 mt-2">
            Form submitted successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export const VendorRegistrationForm: React.FC = () => {
  const Vendor = Yup.object().shape({
    name: Yup.string().required("Please enter your name!"),
    email: Yup.string()
      .email("Invalid email!")
      .required("Please enter your email!"),
    password: Yup.string().required("Please enter your password!").min(6),
    phone: Yup.string().required("Please enter your phone number!"),
    city: Yup.string().required("Please enter your city!"),
    type_Of_Business: Yup.string().required("Please enter your business type!"),
    businessName: Yup.string().required("Please enter your business name!"),
  });

  const [register, { data, error, isSuccess }] = useSignupMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Registration successful";
      toast.success(message);
      console.log(message);
      // setRoute("Verification");
      // alert ('error');
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
        toast.success("Success message", { duration: 4000 });
        console.log(errorData);
      }
    }
  }, [isSuccess, error, data?.message]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      city: "",
      type_Of_Business: "",
      businessName: "",
      // confirmPassword: '',
      // comments: ''
    },
    validationSchema: Vendor,
    onSubmit: async ({
      name,
      email,
      password,
      phone,
      city,
      type_Of_Business,
      businessName,
    }) => {
      const data = {
        name,
        email,
        password,
        phone,
        city,
        type_Of_Business,
        businessName,
      };
      await register(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="w-[450px] mx-auto p-6 bg-white rounded shadow-md ">
      <form className= 'w-full' onSubmit={handleSubmit}>
        
          {/* <h2 className="text-2xl font-bold mb-4">1st Column</h2> */}

          <div className="mb-4">
            <label htmlFor="businessName" className="block mb-1 font-medium">
              Business Name
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={values.businessName}
            />
            {touched.businessName && errors.businessName && (
              <div className="text-red-500 mt-1 text-sm">
                {errors.businessName}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="businessType" className="block mb-1 font-medium">
              Type of Business
            </label>
            <input
              id="type_Of_Business"
              name="type_Of_Business"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={values.type_Of_Business}
            />
            {touched.type_Of_Business && errors.type_Of_Business && (
              <div className="text-red-500 mt-1 text-sm">
                {errors.type_Of_Business}
              </div>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="cityName" className="block mb-1 font-medium">
              City Name
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={values.city}
            />
            {touched.city && errors.city && (
              <div className="text-red-500 mt-1 text-sm">{errors.city}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="yourName" className="block mb-1 font-medium">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={values.name}
            />
            {touched.name && errors.name && (
              <div className="text-red-500 mt-1 text-sm">
                {formik.errors.name}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block mb-1 font-medium">
              Contact
            </label>
            <input
              id="phone"
              name="phone"
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 mt-1 text-sm">
                {formik.errors.phone}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={values.password}
            />
            {touched.password && errors.password && (
              <div className="text-red-500 mt-1 text-sm">{errors.password}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <div className="text-red-500 mt-1 text-sm">{errors.email}</div>
            )}
          </div>

         
        

      
          {/* <h2 className="text-2xl font-bold mb-4">2nd Column</h2> */}
          

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
        
        <button
          type="submit"
          value="Sign Up"
          className={`${styles.button} `}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

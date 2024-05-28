
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { styles } from "../styles/style";
import { Link , useNavigate} from "react-router-dom";

import { useLoginVendorMutation } from "../redux/api/vendor";
import { useLoginVenueMutation } from "../redux/api/venue";




const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email!"),
  password: Yup.string(),
  role: Yup.string().required("Please select a role"),
});

const Login: FC = () => {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [loginVendor] = useLoginVendorMutation();
  const [loginVenue] = useLoginVenueMutation();

  const formik = useFormik({
    initialValues: { email: "", password: "", role: "" },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        let response;
        if (values.role === "vendor") {
          response = await loginVendor(values).unwrap(); // Assuming loginVendor is a function that sends login request for vendor role
        } else if (values.role === "venue") {
          response = await loginVenue(values).unwrap(); // Assuming loginVenue is a function that sends login request for venue role
        }
    
        // Handle successful login
        console.log("Login successful:", response);
    
        // Redirect to the desired page
        navigate("/vendorProfilePage");
    
      } catch (err) {
        // Handle login error
        console.error("Login error:", err);
      }
    },
  
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full h-[650px] flex flex-col justify-center items-center overflow-hidden">
      <h1 className={`${styles.title} m-5 text-black`}>Login with Weddingz-Venue</h1>
      <form onSubmit={handleSubmit}>
        {/* Email field */}
        <label className={`${styles.label}`} htmlFor="email">
          Enter your Email
        </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${errors.email && touched.email && "border-red-500"} ${styles.input}`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}

        {/* Password field */}
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="password">
            Enter your password
          </label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
            className={`${errors.password && touched.password && "border-red-500"} ${styles.input}`}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>

        {/* Role dropdown */}
        <div className="w-full mt-5">
          <label className={`${styles.label}`} htmlFor="role">
            Select your role
          </label>
          <select
            name="role"
            value={values.role}
            onChange={handleChange}
            className={`${errors.role && touched.role && "border-red-500"} ${styles.input}`}
          >
            <option value="">Select</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="vendor">Vendor</option>
            <option value="venue">Venue</option>
          </select>
          {errors.role && touched.role && (
            <span className="text-red-500 pt-2 block">{errors.role}</span>
          )}
        </div>

        {/* Forget Password */}
        <div className="flex justify-end">
          <span className="text-blue-500 underline cursor-pointer mt-2 mr-2">
            <Link to="/forget">Forget Password?</Link>
          </span>
        </div>

        {/* Login button */}
        <div className="w-full mt-5">
          <input type="submit" value="Login" className={`${styles.button}`} />
        </div>

        <br />

        {/* Sign up and business links */}
        <div className="flex">
          <h5 className="text-center pt-4 pr-20 pl-5 font-Poppins text-[14px]">
            Not have any account?{" "}
            <span className="text-[#2190ff] pl-14 pr-20 cursor-pointer">
              <Link to="/Signup">Sign Up</Link>
            </span>
          </h5>
          <h5 className="text-center pt-4 font-Poppins text-[14px]">
            Are you a business?{" "}
            <span className="text-[#2190ff] pl-20 cursor-pointer">
              <Link to="/business">Click here</Link>
            </span>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Login;

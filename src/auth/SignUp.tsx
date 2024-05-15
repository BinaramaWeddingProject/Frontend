"use client";
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { styles } from "../styles/style";

import { Link } from "react-router-dom";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Please confirm your password'),
});

const Signup: FC = () => {
  const [show, setShow] = useState(false);
  // here i am ading some new usestate for the  Make Password Strength Indicator
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

 

  const handleMobileNumberChange = (e: { target: { value: any } }) => {
    const phoneNumber = e.target.value;

    // Check if the entered number has more than 10 digits
    if (phoneNumber.length > 10) {
      alert("Mobile number cannot be greater than 10 digits");
    } else {
      // Update the state with the entered number
      setPhoneNumber(phoneNumber);
    }
  };
  const checkPasswordStrength = (password: string | any[]) => {
    let strength = 0;

    if (password.length <= 6) {
      strength = 1;
    } else if (password.length <= 8) {
      strength = 2;
    } else {
      strength = 3;
    }

    setPasswordStrength(strength);
  };
  const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {  value } = e.target;
    setConfirmPassword(value);
    handleChange(e); 
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: " ",
      password: "",
      confirmPassword: "",
      role: "student",
    },
    validationSchema: schema,
    onSubmit: async ({ name, email, phoneNumber, password, role }) => {
      const data = {name, email, phoneNumber, password, role,};
      
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

 

  return (
    
    <div className="w-full h-[650px] flex flex-col justify-center items-center overflow-hidden">
      
      
      <h1 className={`${styles.title} text-center`}>Join to ELearning</h1>
      <div className="max-w-full overflow-y-auto" >
      <form onSubmit={handleSubmit} className="mt-2 px-4 overflow-y-auto">
        <div className="mb-3">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your Name
          </label>
          <input
            type="text"
            name=""
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="johndoe"
            className={`${errors.name && touched.name && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.name}</span>
          )}
        </div>
        <div className="mb-3">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your Email
          </label>
          <input
            type="email"
            name=""
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="loginmail@gmail.com"
            className={`${errors.email && touched.email && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.email && touched.email && (
            <span className="text-red-500 pt-2 block">{errors.email}</span>
          )}
        </div>
        <div className="mb-3">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your Mobile number
          </label>
          <input
            type="number"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={(e) => {
              handleChange(e);
              handleMobileNumberChange(e);
            }}
            id="number"
            placeholder="Enter your Number"
            className={`${
              errors.phoneNumber && touched.phoneNumber && "border-red-500"
            } ${styles.input}`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">
              {errors.phoneNumber}
            </span>
          )}
        </div>

        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="password">
            Enter your password
          </label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={(e) => {
              handleChange(e);
              checkPasswordStrength(e.target.value);
            }}
            id="password"
            placeholder="password!@%"
            className={`${
              errors.password && touched.password && "border-red-500"
            } ${styles.input}`}
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
        </div>

        {errors.password && touched.password && (
          <span className="text-red-500 pt-2 block">{errors.password}</span>
        )}
         <div className="mb-3">
          <label className={`${styles.label}`} htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            id="confirmPassword"
            placeholder="Confirm your password"
            className={`${
              errors.confirmPassword && touched.confirmPassword && "border-red-500"
            } ${styles.input}`}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span className="text-red-500 pt-2 block">{errors.confirmPassword}</span>
          )}
        </div>
        {/* Password Strength Indicator */}
        {values.password && (
          <div className="mt-2">
            <div className="bg-gray-200 h-2 rounded">
              <div
                className={`${
                  passwordStrength === 1
                    ? "bg-red-500"
                    : passwordStrength === 2
                    ? "bg-orange-500"
                    : "bg-green-500"
                } h-2 rounded`}
                style={{ width: `${(passwordStrength / 3) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs mt-1">
              Password Strength:{" "}
              {passwordStrength === 1
                ? "Weak"
                : passwordStrength === 2
                ? "Medium"
                : "Strong"}
            </p>
          </div>
        )}
        <div className="w-full mt-5">
          <input type="submit" value="Sign Up" className={`${styles.button}`} />
        </div>
        
      </form>
      </div>
      <div className=" w-full flex flex-col items-center justify-center">
      
        <h5 className="text-center font-Poppins text-[14px]">
          Already have an account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
          >
            <Link to="/login">Sign in</Link>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Signup;
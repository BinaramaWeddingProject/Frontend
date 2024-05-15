import { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { styles } from "../styles/style";
import { Link } from "react-router-dom";





const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!"),

  password: Yup.string(),
});

const Login: FC = () => {
  const [show, setShow] = useState(false);
 
 const formik = useFormik({
   initialValues: { email: "", password: "" },
   validationSchema: schema,
     onSubmit: async ({  }) => {
     ;
     },
   });



  const { errors, touched, values, handleChange, handleSubmit } = formik;


  return (
    <div className="w-full h-[650px] flex flex-col justify-center items-center overflow-hidden">
      
      <div className="flex justify-end">
       
      </div>
      <h1 className={`${styles.title} m-5`}>Login with Weddingz-Venue</h1>
      <form onSubmit={handleSubmit}>
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
          className={`${errors.email && touched.email && "border-red-500"} ${styles.input}`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}

        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your password
          </label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={(e) => {
              handleChange(e);
            }}
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
        <div className="flex justify-end">
          <span
            className="text-blue-500 underline cursor-pointer mt-2 mr-2"
            
          >
            <Link to="/forget">Forget Password?</Link>
          </span>
        </div>

        <div className="w-full mt-5">
          <input type="submit" value="Login" className={`${styles.button}`} />
        </div>
        <br />
        <div className="flex">
        <h5 className="text-center pt-4 pr-20 pl-5 font-Poppins text-[14px]">
          Not have any account?{" "}
        </h5>
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          Are you a business?{" "}
         
        </h5>
        </div>
        <div className="flex">
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
         
          <span className="text-[#2190ff] pl-14 pr-20 cursor-pointer">
            <Link to="/Signup">Sign Up</Link>
          </span>
        </h5>
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          
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

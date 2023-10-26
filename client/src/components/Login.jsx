import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bscslogs from "../assets/bscslogs.png";
import Validation from "../components/Registration/LoginValidation";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:3001/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/AAlumnipage");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="bg-emerald-400 flex justify-center items-center min-h-screen">
      <div className="bg-green-300 px-8 rounded-lg shadow-md sm:w-auto w-1/3 mx-auto py-8 mt-5">
        <div className="relative inline-block w-28 mt-5 mx-5 text-center sm:inline-block sm:w-28 md:w-40 sm:mx-auto">
          <img src={bscslogs} className="sm:w-auto lg:w-auto" alt="WMSU Logs" />
          <Link to="/Registration">
            <button className=" mt-2 p-1 w-full">Create an Account</button>
          </Link>
        </div>
        <div className="relative inline-block float-right m-5 sm:w-auto ">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="email" className="block mb-1 ">
                <strong>Email </strong>
              </label>
              <input
                type="email"
                onChange={handleInput}
                name="email"
                className="w-full  border border-gray-300 p-2 rounded"
              />
              {errors.email && (
                <span className="text-red-600">{errors.email}</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                onChange={handleInput}
                name="password"
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.password && (
                <span className="text-red-600">{errors.password}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-black py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              <strong>Login as Alumni</strong>
            </button>

            {/* <Link to="/Adminpage">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Log In Admin
              </button>
            </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

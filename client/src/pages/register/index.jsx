/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../utils/users";
import { HideLoader, ShowLoader } from "../../redux/loaderSlice";
import login from "../../assets/login.webp";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = async () => {
    try {
      dispatch(ShowLoader());
      const response = await RegisterUser(user);
      dispatch(HideLoader());
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoader());
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <section className="w-full h-screen flex">
      <article className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={login} alt="/" />
        </div>
        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h1 className="text-4xl font-bold text-blue-500">
              Free<span className="text-green-500 text-4xl ">Talks</span>
            </h1>
            <input
              type="text"
              placeholder="Enter your name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full border relative bg-gray-100 p-2 my-4"
            />
            <input
              type="text"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full border relative bg-gray-100 p-2 my-4"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full border relative bg-gray-100 p-2 my-4"
            />
            <button
              type="button"
              className="w-full py-2 my-4 text-white bg-green-600 hover:bg-green-500"
              onClick={register}
            >
              Register
            </button>
            <p className="text-center">
              Already have an account?
              <Link to="/login" className="text-red-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Register;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../utils/users";
import { HideLoader, ShowLoader } from "../../redux/loaderSlice";
import gambarlogin from "../../assets/login.webp";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      dispatch(ShowLoader());
      const response = await LoginUser(user);
      dispatch(HideLoader());
      if (response.success) {
        toast.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/";
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
          <img className="w-full h-full" src={gambarlogin} alt="/" />
        </div>
        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h1 className="text-4xl font-bold text-blue-500">
              Free<span className="text-green-500 text-4xl ">Talks</span>
            </h1>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full border relative bg-gray-100 p-2 my-4"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border relative bg-gray-100 p-2 my-4"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button
              type="button"
              className="w-full py-2 my-4 text-white bg-green-600 hover:bg-green-500"
              onClick={login}
            >
              Login
            </button>
            <p className="text-center">
              Don&apos;t have an account?
              <Link to="/register" className="text-red-500">
                Register
              </Link>
            </p>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;

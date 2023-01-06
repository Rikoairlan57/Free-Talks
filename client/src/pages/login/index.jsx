import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/login.webp";

const Login = () => {
  return (
    <section className="w-full h-screen flex">
      <article className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={login} alt="/" />
        </div>
        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h1 className="text-4xl font-bold text-blue-500">
              Free<span className="text-green-500">Talks</span>
            </h1>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full border relative bg-gray-100 p-2 my-4"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border relative bg-gray-100 p-2 my-4"
            />
            <button
              type="button"
              className="w-full py-2 my-4 text-white bg-green-600 hover:bg-green-500"
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

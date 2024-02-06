import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center text-center flex-col mt-20">
      <h1 className="text-3xl text-center mb-4">Register</h1>
      <form className="gap-3 max-w-lg">
        <div className="flex gap-2">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="bg-pink-500 px-4 py-1 text-white rounded-2xl w-full my-3 hover:bg-pink-600">
          Create Account
        </button>
        <div>
          <span>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-500 font-semibold hover:underline"
            >
              Login
            </Link>{" "}
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center text-center flex-col mt-20">
      <h1 className="text-3xl text-center mb-4">Login</h1>
      <form className="gap-3 max-w-lg">
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="bg-pink-500 px-4 py-1 text-white rounded-2xl w-full my-3 hover:bg-pink-600">
          Login
        </button>
        <div>
          <span>
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-pink-500 font-semibold hover:underline"
            >
              Sign Up
            </Link>{" "}
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;

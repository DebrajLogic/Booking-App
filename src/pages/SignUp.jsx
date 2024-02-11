import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/register", { firstName, lastName, email, password });
      alert("Registered");
      navigate("/home");
    } catch (error) {
      alert("User Already Registered");
    }
  };

  return (
    <div className="flex justify-center items-center text-center flex-col mt-20 px-3">
      <h1 className="text-3xl text-center mb-4">Register</h1>
      <form className="gap-3 max-w-lg" onSubmit={registerUser}>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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

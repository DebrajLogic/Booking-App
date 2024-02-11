import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      alert("login successful");
      navigate("/home");
    } catch (error) {
      alert("login failed");
    }
  };

  return (
    <div className="flex justify-center items-center text-center flex-col mt-20 px-3">
      <h1 className="text-3xl text-center mb-4">Login</h1>
      <form className="gap-3 max-w-lg" onSubmit={loginUser}>
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

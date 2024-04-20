"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignup = async () => {
    const res = await axios.post(`/api/user/register`, {
      name,
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  const handleLogin = async () => {
    const res = await axios.post(`/api/user/login`, {
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  return (
    <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
    <div className="flex flex-col justify-center items-center w-9/12">
      <div className="text-white"></div>
      <div className="ml-20 pb-40 w-10/12 border bg-slate-50 bg-opacity-20 backdrop-filter backdrop-blur-md">
        <div className="px-10">
          <h3 className="text-5xl font-bold my-5 text-center">
            Login/SignUp
          </h3>
          {!login && (
            <input
              type="text"
              placeholder="Enter your name..."
              style={inputStyle}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Enter your email..."
            style={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password..."
            style={inputStyle}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
            onClick={login ? handleLogin : handleSignup}
          >
            {login ? "Login" : "Sign Up"}
          </button>
          <p className="my-1 text-xl">
            {login ? "Don't have an account?" : "Already have an account?"}
            <span
              className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
              onClick={handleToggle}
            >
              {login ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);
};

const inputStyle = {
outline: "none",
border: "1px solid #000",
marginBottom: "10px",
padding: "8px",
width: "100%",
boxSizing: "border-box",
borderRadius: "4px",
};

export default Login;
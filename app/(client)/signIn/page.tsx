"use client";

import { error } from "console";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex">
      <div className="w-1/2 relative">
        <div className="relative z-10 font-bold text-8xl top-1/3 text-white px-20">
          Welcome Back !
        </div>
        <Image
          className="w-full inset-0 h-screen absolute z-0"
          src={"/bg.jpg"}
          alt="bg"
          height={100}
          width={100}
        ></Image>
      </div>
      <div className="w-1/2 bg-white-500 h-screen flex flex-col justify-center items-center gap-8">
        <h1 className="font-bold text-4xl ">Login</h1>
        <label className="text-neutral-400">
          Welcome back! Please login to your account.
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-2/3 border-[1px] p-2 rounded"
          type="email"
          placeholder="Email"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-2/3  dark:bg- border-[1px] p-2 rounded"
          type="password"
          placeholder="Password"
        ></input>
        <button
          onClick={() =>
            signIn("credentials", { email: email, password: password })
          }
          className="w-2/3 bg-indigo-900 hover:bg-indigo-700 px-8 pb-3 pt-2 rounded font-semibold text-white"
        >
          Login
        </button>
        <label className="text-neutral-400">Or</label>
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-2/3  px-8 pb-3 pt-2 border-[1px]  rounded justify-center items-center font-semibold flex "
        >
          <Image
            className="mr-3"
            src={"/search.png"}
            alt="google"
            height={20}
            width={20}
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;

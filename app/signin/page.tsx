'use client'

import { signIn } from "next-auth/react";
import Image from "next/image";

const SignIn = () => {
    return (
        <div className="flex">
            <div className="w-1/2 bg-gradient-to-t from-cyan-500 to-blue-500  flex justify-center items-center h-screen">
                <Image className="z-10" src={"/signals.png"} alt="img" height={400} width={400}></Image>
            </div>
            <div className="w-1/2 bg-white-500 h-screen flex flex-col justify-center items-center gap-8">
                <h1 className="font-bold text-4xl ">Login</h1>
                <label className="text-neutral-400">Welcome back! Please login to your account.</label>
                <input className="w-2/3 border-[1px] p-2 rounded" type="text" placeholder="Username"></input>
                <input className="w-2/3 border-[1px] p-2 rounded" type="email" placeholder="Email"></input>
                <input className="w-2/3  dark:bg- border-[1px] p-2 rounded" type="password" placeholder="Password"></input>
                <button onClick={() => signIn()} className="w-2/3 bg-indigo-900 hover:bg-indigo-700 px-8 pb-3 pt-2 rounded font-semibold text-white">Login</button>
                <label className="text-neutral-400">Or</label>
                <button onClick={() => signIn()} className="w-2/3  px-8 pb-3 pt-2 border-[1px] hover:bg-neutral-300 rounded justify-center items-center font-semibold flex ">
                    <Image className="mr-3" src={"/search.png"} alt="google" height={20} width={20} />Login with Google</button>

            </div>

        </div>

    )


}

export default SignIn;
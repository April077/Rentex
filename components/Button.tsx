'use client'
import { signIn } from "next-auth/react"


export const Button = () => {
    return (
        <div className=" flex justify-start py-2">
            <button className="bg-white-900  border-[1px] border-indigo-900  text-center  px-8 py-2 rounded font-semibold">Sign Up</button>
            <button onClick={() => signIn()} className="bg-indigo-900 hover:bg-indigo-700 text-center px-8 py-2 ml-3 rounded font-semibold text-white">Sign In</button>
        </div>)

}
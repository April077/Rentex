'use client'

import { signOut } from "next-auth/react";

const SignOut = () => {
    return <button onClick={() => signOut()} className="bg-white-900  border-[1px] border-indigo-900  text-center  px-8 py-2 rounded font-semibold">Sign Out</button>

}

export default SignOut;
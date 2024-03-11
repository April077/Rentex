'use client'

import { Button } from "./Button"
import Image from "next/image"
import { ThemeSwitch } from "./ThemeSwitch"
import { useSession } from "next-auth/react"
import SignOut from "./SignOut"
import Link from "next/link"


export const Navbar = () => {
    const { data: session } = useSession();
    return (
        <nav className="h-50 dark:bg-black bg-neutral-300 w-auto flex items-center justify-between px-20 py-3">
            <Link href={"/"}><Image alt="logo" src={"/logo.png"} width={150} height={150}></Image></Link>
            <div className="flex justify-center items-center">
                {!session?.user ? <div className="hidden sm:block"><Button /></div> : <SignOut />}
                <button className="px-3 p-1 mx-2 rounded border-transparent hover:border-indigo-900"><ThemeSwitch /></button>
            </div>
        </nav>

    )

}
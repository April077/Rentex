import { Button } from "./Button";
import Image from "next/image";
import { ThemeSwitch } from "./ThemeSwitch";
import SignOut from "./SignOut";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const Navbar = async() => {
  const session = await getServerSession(authOptions);
  console.log(session?.user?.email);

  return (
    <nav className="h-50 dark:bg-black bg-neutral-300 w-auto flex items-center justify-between px-20 py-3">
      <Link href={"/"}>
        <Image alt="logo" src={"/logo.png"} width={150} height={150}></Image>
      </Link>
      <div className="flex justify-center items-center">
        {!session ? (
          <div className="hidden sm:block">
            <Button />
          </div>
        ) : (
          <SignOut />
        )}
        <button className="px-3 p-1 mx-2 rounded border-transparent hover:border-indigo-900">
          <ThemeSwitch />
        </button>
      </div>
    </nav>
  );
};

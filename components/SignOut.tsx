"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const handleSignout = () => {
    signOut({ callbackUrl: "/", redirect: true });
  };
  return (
    <button
      onClick={handleSignout}
      className="bg-white-900  border-[1px] border-indigo-900  text-center  px-8 py-2 rounded font-semibold"
    >
      Sign Out
    </button>
  );
};

export default SignOut;

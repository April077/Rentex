import { Button } from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-bold md:flex h-screen dark:bg-black bg-neutral-300">
      <div className="pl-20 pr-10 py-10 md:py-40">
        <div className="text-5xl">Looking to save more on your rental car?</div>
        <div  className="justify-start pt-4"><Button /></div>
      </div>
      <div className="py-20 relative md:px-0 lg:px-0">
        <div className="top-0  bg-gradient-to-b lg:w-3/4 lg:right-20 md:w-3/4 md:right-20 from-orange-600 to-orange-800 h-full md:h-screen absolute w-full rounded-t-xl z-0 "></div>
        <div className="z-100 relative top-1/2 lg:top-0 md:top-1/2"><Image src="/car.png" alt="car" width={950} height={900}></Image></div>
      </div>
    </div>
  );
}

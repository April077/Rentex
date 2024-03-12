"use client";

import Image from "next/image";
import { useState } from "react";

function page() {
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/addcar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model,
          image: image,
          fuelType: fuel,
          pricePerDay: price,
        }),
      });
      const serverRes = await response.json();
      console.log(serverRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="w-1/2 relative">
          <div className="relative z-10 font-bold text-7xl top-1/3 text-white px-20">
            Add Your Car Details!
          </div>
          <Image
            className="w-full inset-0 h-screen absolute z-0"
            src={"/bg.jpg"}
            alt="bg"
            height={100}
            width={100}
          />
        </div>
        <div className="w-1/2 bg-white-500 h-screen flex flex-col justify-center items-center gap-8">
          <input
            onChange={(e) => setModel(e.target.value)}
            className="w-2/3 border-[1px] p-2 rounded"
            type="text"
            placeholder="Model"
          />
          <input
            onChange={(e) => setImage(e.target.value)}
            className="w-2/3  dark:bg- border-[1px] p-2 rounded"
            type="text"
            placeholder="Image"
          />

          <select
            className="w-2/3 border-[1px] p-2 rounded"
            id="dropdown"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
          >
            <option className="text-neutral-400" value="">
              Fuel Type...
            </option>
            <option value="Petrol">Petrol </option>
            <option value="Diesel">Diesel </option>
            <option value="Electric">Electric </option>
          </select>

          <input
            onChange={(e) => setPrice(e.target.value)}
            className="w-2/3  dark:bg- border-[1px] p-2 rounded"
            type="text"
            placeholder="Price"
          />

          <button
            onClick={handleClick}
            className="w-2/3 bg-indigo-900 hover:bg-indigo-700 px-8 pb-3 pt-2 rounded font-semibold text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;

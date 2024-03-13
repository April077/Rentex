"use client";

import Card from "@/components/Card";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type carProp = {
  model: string;
  image: string;
  price: number;
};

const Product = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const searchParams = useSearchParams();

  const page = searchParams.get('page')?? '1'

  const handleSearch = () => {
    console.log(cars);
    const result = cars.filter((car: carProp) => {
      return car.model.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredCars(result);
    console.log(result);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    async function getCars() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/showcars`
      );
      const data = await res.json();
      setCars(data);
      console.log(data);
    }
    getCars();
  }, []);

  useEffect(() => {
    setFilteredCars([]);
  }, [search]);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex w-full mt-3 justify-center  items-center ">
        <input
          placeholder="Search here..."
          className="border-2 p-3 w-1/3 rounded-full"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        ></input>
        <Image
          className="p-2 hover:shadow-lg "
          src={"/srch.png"}
          width={40}
          height={30}
          alt="search"
          onClick={handleSearch}
        ></Image>
      </div>
      <div>
        <label>Fuel Type:</label>
        <select>
          <option value="">All</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="w-full flex mt-5 justify-center">
        <div className="grid gap-8 grid-cols-3">
          {/* Map over the cars array and return a Card component for each car */}
          {(filteredCars.length > 0 ? filteredCars : cars).map((car) => (
            <Card
              key={car.id}
              model={car.model}
              image={car.image}
              fuelType={car.fuelType}
              price={car.pricePerDay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

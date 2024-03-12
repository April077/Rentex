"use client";

import Card from "@/components/Card";
import { useEffect, useState } from "react";

const Product = () => {
  const [cars, setCars] = useState([]);

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

  return (
    <div className="w-full flex mt-5 justify-center">
      <div className="grid gap-8 grid-cols-3">
        {/* Map over the cars array and return a Card component for each car */}
        {cars.map((car) => (
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
  );
};

export default Product;

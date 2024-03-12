import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("hi");

    const { model, image, fuelType, pricePerDay } = await req.json();
    console.log({ model, image, fuelType, pricePerDay });

    const price = parseInt(pricePerDay);

    if (!model || !image || !fuelType || !pricePerDay) {
      return NextResponse.json(
        {
          error: "Missing required fields in request body",
        },
        { status: 400 }
      );
    }

    const car = await prisma.car.create({
      data: {
        model,
        image,
        fuelType,
        pricePerDay: price,
        available: true,
      },
    });
    console.log("hi2");
    
    return NextResponse.json(
      { message: "Car added successfully.", car },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding car", error);
    return NextResponse.json({ message: "Error adding car" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

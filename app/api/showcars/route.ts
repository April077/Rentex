import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cars = await prisma.car.findMany();
    return NextResponse.json(cars);
  } catch (error) {
    NextResponse.json({ message: "Unable to fetch cars" }, { status: 500 });
  }
}

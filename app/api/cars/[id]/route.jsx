import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prismaClient/prisma";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const car = await prisma.car.findUnique({
      where: {
        id: id,
      },
    });

    if (!car) {
      return NextResponse.json({ error: "Car not found" }, { status: 404 });
    }

    return NextResponse.json(car, { status: 200 });
  } catch (error) {
    console.error("Error fetching car:", error);
    return NextResponse.json({ error: "Failed to fetch car" }, { status: 500 });
  }
}

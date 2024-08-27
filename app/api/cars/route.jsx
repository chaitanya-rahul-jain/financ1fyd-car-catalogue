import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prismaClient/prisma";

export async function GET(request) {
  try {
    const cars = await prisma.car.findMany();
    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch cars" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: "Invalid or empty JSON input" },
        { status: 400 }
      );
    }

    const {
      name,
      engine,
      drivetrain,
      exterior,
      interior,
      odometer,
      cashPrice,
      financePrice,
      imageUrl,
      make,
      year,
      secondaryImages,
    } = body;

    const newCar = await prisma.car.create({
      data: {
        name,
        engine,
        drivetrain,
        exterior,
        interior,
        odometer,
        cashPrice,
        financePrice,
        imageUrl,
        make,
        year,
        secondaryImages,
      },
    });

    // const car = await prisma.car.create({
    //   data: {
    //     // ... other fields ...
    //     imageUrl: 'http://example.com/main-image.jpg',
    //     secondaryImages: [
    //       'http://example.com/secondary1.jpg',
    //       'http://example.com/secondary2.jpg',
    //       'http://example.com/secondary3.jpg',
    //       'http://example.com/secondary4.jpg',
    //     ],
    //   },
    // });

    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    console.log("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

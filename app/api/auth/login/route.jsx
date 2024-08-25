// import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import { compare } from 'bcryptjs';
// import { sign } from 'jsonwebtoken';

// const prisma = new PrismaClient();

// export async function POST(request) {
//   const { username, password } = await request.json();

//   try {
//     const admin = await prisma.admin.findUnique({ where: { username } });

//     if (admin && (await compare(password, admin.password))) {
//       const token = sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//       return NextResponse.json({ token }, { status: 200 });
//     } else {
//       return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
//     }
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to authenticate' }, { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();


    if (email === 'patient@medease.rw' && password === 'password123') {
      return NextResponse.json({
        message: 'Login successful',
        token: 'mock-jwt-token-' + Date.now(),
        user: {
          id: 1,
          email: email,
          name: 'Raissa Micheline IMPUHWE MANZI',
          role: 'patient'
        }
      });
    }

    if (email && password) {
      return NextResponse.json({
        message: 'Login successful',
        token: 'mock-jwt-token-' + Date.now(),
        user: {
          id: 1,
          email: email,
          name: 'Demo Patient',
          role: 'patient'
        }
      });
    }

    return NextResponse.json(
      { message: 'Invalid email or password' },
      { status: 401 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}
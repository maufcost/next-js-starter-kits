// This route can be reached by calling: http://localhost:3000/api
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        hello: "world"
    })
}

export async function POST(request: Request) {

    const data = await request.json()
    
    return NextResponse.json({
        ...data
    })
}

export async function PATCH() {
    return NextResponse.json({
        hello: "world"
    })
}
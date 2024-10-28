import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        products: [
            { id: 123 },
            { id: 456 },
            { id: 789 },
        ]
    })
}
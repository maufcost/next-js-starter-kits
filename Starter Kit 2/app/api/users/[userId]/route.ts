import { NextResponse } from 'next/server';

const data = [
    { id: 123, name: 'Mauricio' },
    { id: 456, name: 'Jessie' },
    { id: 146, name: 'Mark' },
    { id: 691, name: 'Fisher' },
]

export async function POST(request: Request, context: any) {
    const { params } = context;
    const user = data.filter(u => u.id.toString() === params.userId)

    return NextResponse.json({
       user: user[0]
    })
}
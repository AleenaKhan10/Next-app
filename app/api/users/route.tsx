import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id : 1, name : 'Alia'},
        {id : 2, name : 'Hassan'},
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    if (!body.name){
        return NextResponse.json({error : 'Name is required'}, {status: 401})
    }
    return NextResponse.json(body, {status:201})
}
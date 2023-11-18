import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, {params} : {params : {id : number}}) {
    if (params.id > 10) {
        return NextResponse.json({ error : 'Resuested User is not found'}, {status : 404})
    }
    return NextResponse.json({id: 1, name: 'Mosh'})
}



export async function PUT(request: NextRequest) {
    const body = await request.json()
    if (!body.name){
        return NextResponse.json({error : 'Name is required'}, {status: 400})
    }
    if (body.id > 10){
        return NextResponse.json({error : 'User is not found'}, {status: 404})
    }
    return NextResponse.json({name :body.name}, {status:201})
}
import { NextResponse } from 'next/server'
 
export async function GET(request) {
const data={message:"bikram "};
  return NextResponse.json(data);
}
import { NextResponse } from 'next/server'
import userDb from "../MonDb/userModel"
import bcrypt from "bcrypt";
export async function GET(request) {
  const  userdata=await userDb.find();

 const password=userdata.map((items)=>{
        console.log(items);
        return items.password;
 })
 console.log(password.toString());

  return NextResponse.json(userdata);
}

export async function POST(request) {
  
  const reqdata=await request.json();
const salt=await bcrypt.genSalt(10);
const hash=await bcrypt.hash(reqdata.password,salt);

  console.log(hash)
  const user= new userDb({email:reqdata.email,password:hash});
  const newdata=await user.save();

 
  console.log("this is console",reqdata);

  return NextResponse.json(newdata);
}

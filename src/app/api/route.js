import { NextResponse } from 'next/server'
import userDb from "../MonDb/userModel"
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
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
 
 let transporter= nodemailer.createTransport({
     host:"smtp.gmail.com",
     port:587,
     secure:false,
     requireTLS:true,
     auth:{
      user:reqdata.email,
      pass:hash
     }
 })
 let mailOption={
  from:reqdata.email,
  to:reqdata.email,
  subject:"Please Verify this email ",
  text:`this is your email ${reqdata.email}`
 }

transporter.sendMail(mailOption,(error,info)=>{
         if(error){
          console.log(error)
         }else{
          console.log("email has been send ",info)
         }
})
  // const user= new userDb({email:reqdata.email,password:hash});
  // const newdata=await user.save();

 if(newdata){
  return NextResponse.json({message:"Sign Up successfully !!!"});
 }else{
  return NextResponse.json({message:"Enternal Problem "});
 }

 
}

//reset password 
export async function PUT(request) {
  const reqdata = await request.json();
  const userdata = await userDb.findOne({ email: reqdata.email });
  console.log(userdata);

  if (userdata) {
    const hash = userdata.password; // Use the hashed password from the database

    const comp = await bcrypt.compare(reqdata.password, hash);
    console.log(comp);

    if (comp==true) {
      // Passwords match, user is authenticated

      return NextResponse.json({message:true});
    } else {
      // Passwords do not match
      return NextResponse.json({message:"Incorrect password"});
    }
  } else {
    // User not found
    return NextResponse.json({message:"user not found"});
}
}
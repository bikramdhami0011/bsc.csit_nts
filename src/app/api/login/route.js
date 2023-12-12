// import { NextResponse } from "next/server";
// import userDb from "../../MonDb/userModel";
// import bcrypt from "bcrypt";
// export async function GET(request) {
//   return NextResponse.json({ message: "this is login" });
// }

// export async function POST(request) {
//   const reqdata = await request.json();
//   const userdata = await userDb.findOne({email:reqdata.email});
//   console.log(userdata);
// if (userdata) {
//  const saltRounds = 10;
// const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

//   const hash=  userdata.password
//   const comp= await bcrypt.compare(reqdata.password,hash);
//   console.log(comp);
// } else {
    
// }

//   return NextResponse.json("success");
// }

// // const email = userdata.map((items) => {
// //     return items.email;
// //   });
// //   let useremail = email.filter((item) => {
// //     console.log(item);
// //     return item == reqdata.email;
// //   });

// //   if (useremail) {
// //     const enpassword = userdata.map((items) => {
// //       console.log("this is hashed password ",items);
// //       return items.password;
// //     });
// //     console.log("thsi si en p",enpassword);
// //     const hash = enpassword.toString();
// //     const result = await bcrypt.compare(reqdata.password, hash);
// //     console.log(result);
// //     if (result == true) {
// //       return NextResponse.json({ message: "login successfully !!!" });
// //     } else {
// //       return NextResponse.json({ message: "fail to login !!!" });
// //     }
// //   }
import { NextResponse } from "next/server";
import userDb from "../../MonDb/userModel";
import bcrypt from "bcrypt";

export async function GET(request) {
  return NextResponse.json({ message: "this is login" });
}

export async function POST(request) {
  const reqdata = await request.json();
  const userdata = await userDb.findOne({ email: reqdata.email });
  console.log(userdata);

  if (userdata) {
    const hash = userdata.password; // Use the hashed password from the database

    const comp = await bcrypt.compare(reqdata.password, hash);
    console.log(comp);

    if (comp) {
      // Passwords match, user is authenticated
      return NextResponse.json({message:"login success !!!"});
    } else {
      // Passwords do not match
      return NextResponse.json({message:"login fail !!!"});
    }
  } else {
    // User not found
    return NextResponse.json({message:"user not found"});
  }
}

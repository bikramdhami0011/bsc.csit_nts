"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
// import bcrypt from "bcrypt";
function SignUp() {
  const [img, setimg] = useState(true);
  const [cp, setcp] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router=useRouter();
  const sendData = async () => {
    try {
      if ( cp && email && password) {
        // const salt=await bcrypt.genSalt(10);
        // const hash=await bcrypt.hash(password,salt);
        console.log(email,password)
        const send = await fetch("/api/login", {
          method: "PUT",
          headers: {
            "Content-Type":"application/json",
          },

          body:JSON.stringify({ email:email,password: password }),
        });
        const resdata = await send.json();
        console.log(resdata);
        if(resdata){
          alert(resdata.message)
          if(resdata.message=="Password Update Successfull !!!"){
             router.push("./login")
          }
        }else{
          alert("Already exist ")
        }
      } else {
        alert("Please fill Up!!!");
      }
    } catch (error) {
     alert(" Already exist or Internal error");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.conreal}>
        <div className={style.imgt}>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/133209135?s=96&v=4"
              height={60}
              width={60}
              style={{ borderRadius: "30px" }}
            ></img>
          </div>
          <div> Password Reset Home !!!</div>
        </div>
        <div className={style.inputdiv}>
          <div className={style.settext}>Email Address</div>
          <input
            type="email"
            className={style.input}
            placeholder="Enter your email "
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
        </div>
        <div className={style.inputdiv}>
          <div className={style.settext}>New Password</div>
          <div className={style.conshow}>
          {img ? (
            <input
              type="password"
              className={style.input}
              placeholder="Enter your password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              hidden
            ></input>
          ) : (
            <input
              type="text"
              className={style.input}
              placeholder="Enter your password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              hidden
            ></input>
          )}
          {img ? (
            <div
              className={style.show}
              onClick={() => {
                setimg(false);
              }}
            >
              show
            </div>
          ) : (
            <div
              className={style.show}
              onClick={() => {
                setimg(true);
              }}
            >
              hide
            </div>
          )}
        </div>
        </div>
        <div className={style.inputdiv}>
          <div className={style.settext}>Confirm New Password</div>
          <div className={style.conshow}>
            {img ? (
              <input
                type="password"
                className={style.input}
                placeholder="Enter your password"
                onChange={(e) => {
                  setcp(e.target.value);
                }}
                hidden
              ></input>
            ) : (
              <input
                type="text"
                className={style.input}
                placeholder="Enter your password"
                onChange={(e) => {
                  setcp(e.target.value);
                }}
                hidden
              ></input>
            )}
            {img ? (
              <div
                className={style.show}
                onClick={() => {
                  setimg(false);
                }}
              >
                show
              </div>
            ) : (
              <div
                className={style.show}
                onClick={() => {
                  setimg(true);
                }}
              >
                hide
              </div>
            )}
          </div>
        </div>
        <div className={style.inputdiv}>
          <button
            className={style.input}
            onClick={() => {
              sendData();
            }}
            style={{
               
              font: "28px",
              fontFamily: "800",
              backgroundColor: "rgb(0,0,46)",
              borderRadius: "4px",
              borderColor: "2px solid blue",
              padding: "10px",
              outline: "none",
              border: "none",
              cursor: "pointer",
              width:"100%"
            }}
          >
            Submit
          </button>
        </div>
       
      
      </div>
    </div>
  );
}

export default SignUp;

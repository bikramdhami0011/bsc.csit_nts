
"use client";
import React, { useState } from "react";
import style from "./page.module.css";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

function LogIn() {
  const session=useSession()
  const [img, setimg] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router=useRouter();
 

  const sendData = async () => {
    try {
      if (email && password) {
        console.log(email,password)
        const send = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
          },

          body:JSON.stringify({ email:email,password: password }),
        });
        const resdata = await send.json();
        console.log(resdata);
        alert(resdata.message);
        if(resdata.message=="login success !!!"){
          //  router.push("./home");
          router.push(
             './home',
            {query: { data: 'yourDataValue' },
          });
        }
      }else{
        alert("Please fill Up !!!")
      }
    } catch (error) {
     console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.conreal}>
       {
        session.status=="authenticated"?  <div className={style.imgt}>
        <div>
          <img
            src={session.data.user.image}
            height={60}
            width={60}
            style={{ borderRadius: "30px" }}
          ></img>
        </div>
        <div> Welcome {session.data.user.name+" "} !!!</div>
      </div>:  <div className={style.imgt}>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/133209135?s=96&v=4"
          height={60}
          width={60}
          style={{ borderRadius: "30px" }}
        ></img>
      </div>
      <div> Welcome Students !!!</div>
    </div>
       }
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
          <div className={style.settext}>Password</div>
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
        <div className={style.fp} onClick={()=>{
          router.push("../resetpassword")
        }}>Forget Password ?</div>
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
              width:"92%"
            }}
          >
            Submit
          </button>
        </div>
        <div className={style.orline}>
          <div className={style.line}></div>
          <div> OR LOGIN WITH EMAIL</div>
          <div className={style.line}></div>
        </div>
        <div className={style.google} style={{ cursor: "pointer" }} onClick={()=>signIn("google")}>
          <a style={{ height: "20px", width: "20px" }}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              class="LgbsSe-Bz112c"
              height={18}
              width={18}
            >
              <g>
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </g>
            </svg>
          </a>{" "}
          Sign in with Google
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default LogIn;

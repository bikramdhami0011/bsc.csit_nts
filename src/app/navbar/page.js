"use client";
import ReactDOM from "react-dom"; 
// import React, { useEffect, useState } from "react";
import * as React from "react"; 
import style from "./page.module.css";
import Link from "next/link";
function Navbar() {
const [visible,setvisible]=React.useState(false);
const MenuNav = () => {

  return (
    <div className={style.menunavbar} id="menunav" style={{ display: "flex", flexDirection: "column" }}>
      <Link href="/home">Home</Link>
      <Link href="/syllabus">Syllabus</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
  
};
  function ShowMenuNav() {
    // const exist=document.querySelector("#newdiv");
    // if(exist){
    //   exist.innerHTML=`
    //   <div className=${style.menunavbar} id="menunav" style={{display:"flex",flexDirection:"column"}}>
    //   <Link href=${"./home"}>Home</Link>
    //   <Link href="./syllabus">Syllabus</Link>
    //   <Link href="./about">About</Link>
    //   <Link href="./contact">Contact</Link>
    // </div>
    //   `;
    // ReactDOM.render(<MenuNav/>,exist);
  
    // setvisible(true);
    // }
    
    setvisible(true);
  }
const HideNav=()=>{
  // const exist=document.querySelector("#newdiv");
  // if(exist){
  //   exist.innerHTML=null;
  //   setvisible(false);
  // }
  setvisible(false);
}
  return (
   <div>
   <div className={style.nav} id="navbar">
   <div className={[style.left]} id="menunav">
     <Link href="./home">Home</Link>
     <Link href="./syllabus">Syllabus</Link>
     <Link href="./about">About</Link>
     <Link href="./contact">Contact</Link>
   </div>
  {
    visible?  <div className={style.crmenu} onClick={()=>{
       HideNav()
    }}>
      
      <div 
        style={{
          backgroundColor: "white",
          width: "20px",
          color: "white",
          height: "4px",
        }}
      ></div>
      <div className={style.secondcross}
        style={{
          backgroundColor: "white",
          width: "20px",
          color: "white",
          height: "4px",
        }}
      ></div>
    </div>: <div className={style.menu} id="menu" onClick={()=>{
      ShowMenuNav();
    }}>
      <div
        style={{
          backgroundColor: "white",
          width: "20px",
          color: "white",
          height: "4px",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "white",
          width: "20px",
          color: "white",
          height: "4px",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "white",
          width: "20px",
          color: "white",
          height: "4px",
        }}
      ></div>
    </div>
  }

   <div className={style.right}>
     <div className={style.setsl}>
       <Link href={"/signup"} className={style.signup}>Sign Up</Link>
       <Link href={"/login"} className={style.login}>Log In</Link>
     </div>
   </div>
 
 </div>
 <div id="newdiv">
 {visible ?<MenuNav />:null}
 </div>
   </div>
  );
}

export default Navbar;

"use client";

// import React, { useEffect, useState } from "react";
import  {useState} from "react"; 
import style from "./page.module.css";
import Link from "next/link";
function Navbar() {
const [visible,setvisible]=useState(false);
const MenuNav = () => {
  return (
    <div>
    <div className={style.menunavbar} id="menunav" style={{ display: "flex", flexDirection: "column" }}>
      <Link href="/home">Home</Link>
      <Link href="/syllabus">Syllabus</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
    </div>
  );
  
};
  function ShowMenuNav() {
    setvisible(true);
  }
const HideNav=()=>{
  setvisible(false);
}
  return (
   <div>
   <div className={style.nav} id="navbar">
   <div className={[style.left]} id="menunav">
     <Link href="../../../home">Home</Link>
     <Link href="../../../syllabus">Syllabus</Link>
     <Link href="../../../about">About</Link>
     <Link href="../../../contact">Contact</Link>
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
       <Link href={"/login"} className={style.signup} style={{backgroundColor:"rgb(0,0,46)"}}>Log In</Link>
       <Link href={"/signup"} className={style.login} style={{backgroundColor:"rgb(0,0,46)"}}>Sign Up</Link>
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

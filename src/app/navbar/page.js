"use client";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import Link from "next/link";

import Image from "next/image";
function Navbar() {
  function ShowMenuNav() {

 
    let newdev=document.createElement("div");
    newdev.className="newdiv"
    

  }

  return (
    <div className={style.nav} id="navbar">
      <div className={[style.left]} id="menunav">
        <Link href="./home">Home</Link>
        <Link href="./syllabus">Syllabus</Link>
        <Link href="./about">About</Link>
        <Link href="./contact">Contact</Link>
      </div>
      <div className={style.menu} id="menu" onClick={ShowMenuNav}>
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

      <div className={style.right}>
        <div className={style.setsl}>
          <div className="signup">Sign Up</div>
          <div className="login">Log In</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

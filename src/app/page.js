import Link from "next/link";
import React from "react";
import Navbar from "./navbar/page";
import style from "./page.module.css"
import Image from "next/image";
function page() {
  return (
    <div>
      <div>
        <div className={style.default}>
          <h2> Wel come to all Student of Bsc.Csit</h2>

          <div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
          <Image style={{borderRadius:"10px",margin:"20px" ,padding:"10px",backgroundColor:"white"}} height={200} width={300} src="https://www.fwu.edu.np/assets/uploads//logo/1626619699-school-front-logo.png"></Image>
         </div>
            <p>
              A warm welcome to all students interested in pursuing excellence
              in the field of Computer Science and Information Technology! Our
              Bsc.Csit program is designed to provide a comprehensive and
              enriching educational experience, shaping individuals into skilled
              professionals ready to make a mark in the ever-evolving tech
              industry.
            </p>
          </div>
          <Link href="./home">Get Start   &gt;</Link>
        </div>
       
      </div>
    </div>
  );
}

export default page;

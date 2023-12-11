"use client"
import React, { useEffect, useState } from 'react'
import style from "./page.modul.css"
function DynamicSub(props) {
    console.log(props.params.sub);
    const arr=props.params.sub;
  const [imgs,setimgs]=useState()
const [value, setvalue]=useState();
const [invalid,setinvalid]=useState(false);
console.log(arr);
const setimg=arr[1];
useEffect(() => {
  const setsem = arr[2];
 let data=setsem[0];
 let setimgdata=parseInt(data);
 setimgs(setimgdata);
   console.log(typeof setimgdata);
  let path;
  path = `/${setsem}/${arr[1]}${arr[0]}/${arr[1]}.pdf`;
  switch (setsem) {
      case "1sem":

        if(path==`/${setsem}/${arr[1]}${arr[0]}/6.pdf`){
          if(arr[2]=="1sem"){
           setinvalid(true);
          }
       }
        break;

      case "2sem":
        if(path==`/${setsem}/${arr[1]}${arr[0]}/6.pdf`){
          if(arr[2]=="2sem"){
           setinvalid(true);
          }
       }
        break;
      case "3sem":
      case "4sem":
      case "5sem":
      case "6sem":
      case "7sem":
      case "8sem":
        if(path==`/${setsem}/${arr[1]}${arr[0]}/6.pdf`){
          if(arr[2]=="8sem"){
           setinvalid(true);
          }
       }
        break;
         
      default:
          // Handle the default case if setsem is none of the above
          break;
  }
  
  setvalue(path);
}, [arr]);

    
  return (
    <div className={style.container} style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", height:"100%",width:"100%"}}>
    {
     invalid ? <div> 
       <h1> No More Subject !!!</h1>
        {
          imgs &&<img className={style.img} src={`/${imgs}.png`} height={screen.height} width={screen.width}></img>
        }
     </div>:  <embed src={value} height={screen.height} width={screen.width}></embed>
    }
      
    </div>
  )
}

export default DynamicSub
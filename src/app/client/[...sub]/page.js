"use client"
import React, { useEffect, useState } from 'react'

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
          path = `/${setsem}/${arr[1]}${arr[0]}/${arr[1]}.pdf`;
          break;
      default:
          // Handle the default case if setsem is none of the above
          break;
  }
  
  setvalue(path);
}, [arr]);

    
  return (
    <div >
    {
     invalid ? <div> 
       <h1> No More Subject !!!</h1>
        {
          imgs &&  <img src={`/${imgs}.png`} height={200} width={300}></img>
        }
     </div>:    <embed src={value} height={600} width={400}></embed>
    }
      
    </div>
  )
}

export default DynamicSub
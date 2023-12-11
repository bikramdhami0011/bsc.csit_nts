"use client"
import React, { useEffect, useState } from 'react'

function DynamicSub(props) {
    console.log(props.params.sub);
    const arr=props.params.sub;
   
const [value, setvalue]=useState();
const [invalid,setinvalid]=useState(false);
console.log(arr);
useEffect(() => {
  const setsem = arr[2];
  let path;

  switch (setsem) {
      case "1sem":
      case "2sem":
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
  if(path==`/${setsem}/${arr[1]}${arr[0]}/6.pdf`){
     if(arr[2]=="1sem"){
      setinvalid(true);
     }
  }

console.log("this is path",path)
  setvalue(path);
}, [arr]);

    
  return (
    <div >
    {
     invalid ? <div> 
       <h1> No More Subject !!!</h1>
        <img src="/1.png" height={200} width={300}></img>
     </div>:    <embed src={value} height={600} width={400}></embed>
    }
      
    </div>
  )
}

export default DynamicSub
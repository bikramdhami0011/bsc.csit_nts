
"use client"
import React, { useEffect, useState } from 'react'
import style from "./page.module.css"
import Link from 'next/link';
function Clinet(props) {

   var key=props.values;
   var num=parseInt(key);
   const [value,setvalue]=useState()

  useEffect(()=>{
    switch (num) {
      case 1:
       
        const data1=[{
          firstsub: "English Grammer and Compostiton",
          secondsub:"Infromation Technology Fundamentals",
          thirdsub:"Calculus and Analytical",
          fourthsub:"Electronic Principles TH",
          fifthsub:"Programming Fundamentals and C Programming",
          id:"1sem"
        }]
        
      setvalue(data1);
        break;
        case 2:
          const data2=[{
            firstsub: "Data Structure and Alogrithms",
            secondsub:"Digital Logic Design",
            thirdsub:"Linear Algebra",
            fourthsub:"Mechanics and Electrodynamics TH",
            fifthsub:"Microprocessor System",
            id:"2sem"
          }]
          setvalue(data2)
        break;
        case 3:
          const data3=[{
            firstsub: "Computer Organization and Architecture",
            secondsub:"Discrete Structures",
            thirdsub:"Introduction to Management",
            fourthsub:"Object Oriented Programming",
            fifthsub:"Operating System",
            sixthsub:"Statistic and Probability",
            id:"3sem"
          }]
          setvalue(data3);
        break;
        case 4:
          const data4=[{
            firstsub: "Applied Statistics",
            secondsub:"Data Communication and Network",
            thirdsub:"Database Management System",
            fourthsub:"Numerical Methods",
            fifthsub:"System Analysis and Design",
            sixthsub:"Theory of Computation",
            id:"4sem"
          }]
          setvalue(data4)
        break;
        case 5:
          const data5=[{
            firstsub: "Design and Analysis of Algorithm",
            secondsub:"Artificial Intelligence",
            thirdsub:"Compiler Design",
            fourthsub:"Simulation and Modeling",
            fifthsub:"Graphics and Visual Computing",
            sixthsub:"Web Technology I",
            id:"5sem"
          }]
          setvalue(data5)
        break;
        case 6:
          const data6=[{
            firstsub: "Introduction to Cryptography",
            secondsub:"Java Programming I",
            thirdsub:"Research Methodology for Computer Science",
            fourthsub:"Software Engineering",
            fifthsub:"Web Technology II",
            sixthsub:"Minor Project I",
            id:"6sem"
          }]
          setvalue(data6)
        break;
        case 7:
          const data7=[{
            firstsub: "E-commerce",
            secondsub:"Advanced Java Programming",
            thirdsub:"Object Oriented Analysis and Design",
            fourthsub:"Minor Project II",
            fifthsub:"Database Administration",
            sixthsub:"Data Mining and Warehousing",
            id:"7sem"
          }]
          setvalue(data7)
        break;
        case 8:
          const data8=[{
            firstsub: "Parallel Computing",
            secondsub:"Internship",
            thirdsub:"Advanced Database Design",
            fourthsub:"Distributed Database Management System",
            fifthsub:"E-Business and E-overnance",
            id:"8sem"
          }]
          setvalue(data8)
        break;
      default:
        setvalue(null);
        break;
    }
  },[num])
     

  
  return (
   value&& value.length>0 &&
   <div>
    {
     value.map((item,index)=>(
   
     
      <div key={index} className={style.container}>
     
      <Link href={`../../client/sub/1/${item.id}`} className={style.link} >
      {index+1}.{item.firstsub}
     </Link>
     <Link href={`../../client/sub/2/${item.id}`} className={style.link}>
     {index+2}.{item.secondsub}
   </Link>
   <Link href={`../../client/sub/3/${item.id}`} className={style.link}>
      {index+3}.{item.thirdsub}
    </Link>
    <Link href={`../../client/sub/4/${item.id}`} className={style.link}>
      {index+4}.{item.fourthsub}
    </Link>
    <Link href={`../../client/sub/5/${item.id}`} className={style.link}>
      {index+5}.{item.fifthsub}
    </Link>
    <Link href={`../../client/sub/6/${item.id}`} className={style.link}>
      {index+6}.{item.sixthsub ?item.sixthsub:"No more subject"}
    </Link>
   
      </div>
     ))
    }
    </div>
  )
}

export default Clinet;
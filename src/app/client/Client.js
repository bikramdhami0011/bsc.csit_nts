
"use client"
import React, { useEffect, useState } from 'react'
import style from "./page.module.css"
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
            sixthsub:"Statistic and Probability"
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
            sixthsub:"Theory of Computation"
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
            sixthsub:"Web Technology I"
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
            sixthsub:"Minor Project I"
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
            sixthsub:"Data Mining and Warehousing"
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
            
          }]
          setvalue(data8)
        break;
      default:
        setvalue(null);
        break;
    }
  },[num])
     

  
  return (
   value&& value.length>0 &&<div>
    {
     value.map((item,index)=>(
      <div key={index} className={style.container}>
      <div >
      {index+1}.{item.firstsub}
     </div>
     <div>
     {index+2}.{item.secondsub}
   </div>
   <div>
      {index+3}.{item.thirdsub}
    </div>
    <div>
      {index+4}.{item.fourthsub}
    </div>
    <div>
      {index+5}.{item.fifthsub}
    </div>
    <div>
      {index+6}.{item.sixthsub ?item.sixthsub:"No more subject"}
    </div>
   
      </div>
     ))
    }
    </div>
  )
}

export default Clinet;
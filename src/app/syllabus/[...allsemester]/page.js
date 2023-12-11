
import Clinet from '@/app/client/page';
import React from 'react'
import style from "./page.module.css";
function AllSemester({params}) {

  const key=params.allsemester[1];

  return (
   <div>
      <div className={style.container}>
         <h2> All Subject !!!</h2>
        <Clinet values={key}></Clinet>
      </div> 
   </div>
  )
}

export default AllSemester;
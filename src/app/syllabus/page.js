import React from 'react'
import style from "./page.module.css"
function Syllabus() {
  const FetchData=async()=>{
       const data=await fetch("http://localhost:3000/router",{
        method:"GET",
       });
       
      
       console.log("this is result");
  }
  FetchData();
  return (
    <div>
    <div className={style.syllabus}>
            <h2>Bsc.Csit Syllabus</h2>
            <div className={style.subcode}>
              <div> semester 1</div>
              <div> semester 2</div>
              <div> semester 3</div>
              <div> semester 4</div>
              <div> semester 5</div>
              <div> semester 6</div>
              <div> semester 7</div>
              <div> semester 8</div>
            </div>
         </div>
    </div>
  )
}

export default Syllabus
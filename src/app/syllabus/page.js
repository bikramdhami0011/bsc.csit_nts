import React from 'react'
import style from "./page.module.css"
import Link from 'next/link';
function Syllabus() {
  
  return (
    <div>
    <div className={style.syllabus}>
            <h2>Bsc.Csit Syllabus</h2>
            <div className={style.subcode}>
              <Link href="../syllabus/allsemester/1" className={style.link}> semester 1</Link>
              <Link href="../syllabus/allsemester/2" className={style.link}> semester 2</Link>
              <Link href="../syllabus/allsemester/3" className={style.link}> semester 3</Link>
              <Link href="../syllabus/allsemester/4" className={style.link}> semester 4</Link>
              <Link href="../syllabus/allsemester/5" className={style.link}> semester 5</Link>
              <Link href="../syllabus/allsemester/6" className={style.link}> semester 6</Link>
              <Link href="../syllabus/allsemester/7" className={style.link}> semester 7</Link>
              <Link href="../syllabus/allsemester/8" className={style.link}> semester 8</Link>
            </div>
         </div>
    </div>
  )
}

export default Syllabus
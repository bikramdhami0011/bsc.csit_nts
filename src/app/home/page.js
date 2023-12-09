import React from 'react'
import style from "./page.module.css"
function Home() {
  return (
    <div>
    <div>
    <head>
      <title>Home</title>
      <meta name="description" content="Explore the syllabus for each semester in our comprehensive course program." />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <main>
       <div className='show'>
         <div>
            <h2>Bsc.Csit Subject Code</h2>
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

         <div>
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
    </main>
   
  </div>
    </div>
  )
}

export default Home;
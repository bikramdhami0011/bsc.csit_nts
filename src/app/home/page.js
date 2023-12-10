import React from "react";
import style from "./page.module.css";
import Link from "next/link";
function Home() {
  return (
    <div>
      <div className={style.sethome}>
        <head>
          <title>Home</title>
          <meta
            name="description"
            content="Explore the syllabus for each semester in our comprehensive course program."
          />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <main>
          <div className="show">
            <div>
              <h2>Bsc.Csit Subject Code</h2>
              <div className={style.subcode}>
                <Link className={style.sem} href="/home/subcode/1" style={{cursor:"pointer"}}> semester 1</Link>
                <Link className={style.sem} href="/home/subcode/2" style={{cursor:"pointer"}}> semester 2</Link>
                <Link className={style.sem} href="/home/subcode/3" style={{cursor:"pointer"}}> semester 3</Link>
                <Link className={style.sem} href="/home/subcode/4" style={{cursor:"pointer"}}> semester 4</Link>
                <Link className={style.sem} href="/home/subcode/5" style={{cursor:"pointer"}}> semester 5</Link>
                <Link className={style.sem} href="/home/subcode/6" style={{cursor:"pointer"}}> semester 6</Link>
                <Link className={style.sem} href="/home/subcode/7" style={{cursor:"pointer"}}> semester 7</Link>
                <Link className={style.sem} href="/home/subcode/8" style={{cursor:"pointer"}}> semester 8</Link>
              </div>
            </div>

         
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;

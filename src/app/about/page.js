import React from "react";
import style from "./page.module.css"
function About() {
  return (
    <div>
      <div>
        <main>
          <div className={style.container}>
          <img
          src="https://www.fwu.edu.np/assets/uploads//logo/1626619699-school-front-logo.png"
          height={100}
          width={300}
          style={{ backgroundColor: "white" ,borderRadius:"3px"}}
        ></img>
            <div>
             
              <h2>About Our Bsc.Csit Program</h2>

              <p>
                Welcome to our Bsc.Csit program, where we strive to provide a
                comprehensive and enriching educational experience. Our program
                covers a wide range of subjects, equipping students with the
                skills and knowledge needed in the field of computer science and
                information technology.
              </p>
              <p>
                Throughout the eight semesters, students will delve into various
                aspects of the curriculum, gaining hands-on experience and
                theoretical insights. Our dedicated faculty members are
                committed to fostering a positive learning environment.
              </p>
            </div>
            <div>
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower students with the knowledge and skills
                necessary to excel in the ever-evolving field of computer
                science. We aim to cultivate a passion for learning, critical
                thinking, and problem-solving.
              </p>
              <p>
                By providing a holistic education, we prepare our students to
                become innovative professionals ready to tackle challenges in
                the real world. Join us on this educational journey and discover
                the possibilities within the world of Bsc.Csit.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;

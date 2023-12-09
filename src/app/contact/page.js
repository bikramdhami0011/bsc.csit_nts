import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
function Contact() {
   
  return (
    <div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div className={styles.form}>
          <div className={styles.contact}>
            <h1>Contact Us</h1>
            <p>
              Have questions, suggestions, or just want to say hello? Fill out
              the form below, and we will get back to you as soon as possible.
            </p>
          </div>
          <div className={styles.input}>
           <input placeholder="Enter your name"></input>
          </div>
          <div className={styles.input}>
             <input placeholder="Enter your email"></input>
          </div>
          <div className={styles.input}>
            <textarea cols={29} rows={5} placeholder="Leave your message"></textarea>
          </div>
          <div className={styles.input}>
         
          <button className={styles.button}>Submit</button>
          
          
        </div>
        </div>

        <div className={styles.footer}>
          <p>
            Feel free to reach out to us. We look forward to hearing from you!{" "}
          </p>
          <div>
            <Image
              src="https://www.fwu.edu.np/assets/uploads//logo/1626619699-school-front-logo.png" // Replace with the actual image URL or use the next/image features to load images dynamically
              alt="Contact Us"
              width={200}
              height={100}
              
              style={{ borderRadius: "2px", backgroundColor: "white" }}
            />

          </div>
          <Link href={"https://www.fwu.edu.np/"}> Go fwu site</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;

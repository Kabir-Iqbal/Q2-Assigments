"use client"
import styles from "./header.module.css"
import { FaBars } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";

function Header() {
    
    const [showbarlinks , setShowbarlinks] = useState(false)
    
   const tooglemenu=() =>{
    setShowbarlinks(!showbarlinks)
   }

    return (
       < >
       <div className={styles.navbar} >
           <h1 className={styles.h1styles} >Kabir&apos;s Portfolio</h1>
         <div className={styles.rightsection}>
             <ul  className={`${styles.ulstyle} ${showbarlinks ? styles.show : " " } `}>
              <a href="#home"> <li className={styles.listyle} >Home</li> </a>
              <a href="#about"> <li className={styles.listyle} >About</li> </a>
              <a href="#skill"> <li className={styles.listyle} >Skills</li> </a>
              <a href="#projects"><li className={styles.listyle} >Projects</li> </a>
              <a href="#contact"> <li className={styles.listyle} >Contact</li> </a>
             </ul>
         </div>

         <div className={styles.menuicons}>
            {!showbarlinks ?
         <a className={styles.bar} onClick={tooglemenu} ><FaBars /> </a>
         :
          <a className={styles.close} onClick={tooglemenu} ><IoCloseCircleOutline  /> </a> 
            }
         </div>
       </div>
       </>
    )
}

export default Header
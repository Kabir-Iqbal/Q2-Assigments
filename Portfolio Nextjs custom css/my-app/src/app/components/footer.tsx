import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import styles from "./footer.module.css"

function Footer() {
    return(
        <>
        <div className={styles.divstyle}>
        <footer className={styles.footerstyle} >
        <h2 className={styles.h2style} > Dedicated Developer</h2>
        <p className={styles.p}>&quot; Skilled developer who loves creating smart and efficient web solutions. I enjoy turning ideas into simple,
           user-friendly experiences. Always learning new technologies and ready to solve problems to deliver great results.&quot;</p>

           <div className={styles.container}>    
           <h2 className={styles.h2style}>Get in Touch</h2> 
           <div className={styles.icons} >
            <div><a className={styles.linkdin} href="https://www.linkedin.com/in/kabir-iqbal-8705722ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiL%2FgDkLLT7qh6G%2Fv9YvVKw%3D%3D"> <FaLinkedin /> </a></div>
            <div><a className={styles.github} href="https://github.com/Kabir-Iqbal"> <FaGithub  /> </a></div>
            <div><a className={styles.fb} href="https://web.facebook.com/profile.php?id=100073063770870"><FaFacebook  /> </a> </div>
            <div> <a className={styles.email} href="mailto:kabirhussain0343837@gmail.com"> <MdEmail /> </a> </div>
            </div> 
          </div>  
         </footer>
        </div>
        </>
    )
}

export default Footer
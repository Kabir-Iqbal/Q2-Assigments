import Image from "next/image"
import Header from "./components/header"
import Footer from "./components/footer"

import styles from "./page.module.css"

function page() {
  return(
    <>
    <div className={styles.body} >
    <div >
    {/* Header */}
    
    <Header/>
    {/* Body */}
    {/* first page */}
    
    <div id="home" className={styles.landedpage} >
      <div className={styles.leftSection} ><h2 className={styles.h2inRight}>  Hello, I&apos;m</h2>
        <h1 className={styles.h1inRight} >Kabir Iqbal</h1>
        <p className={styles.pinRight} >Creative and Passionate Web Developer | Specializing in React, UI/UX Design,
           and Building Scalable, Responsive Web Solutions </p>
          <p className={styles.btnbox} >
          <button className={styles.contactbtn} >Contact Me</button>
           <button className={styles.downloadbtn} >Download CV</button>  </p>
          </div>     
      <div className={styles.rightsection} > <Image className={styles.landedimage} src="/images/dp.png" alt="Profile pic" width={150} height={150} /> </div>
    </div>
    
    
    </div>

    {/* About */}
    <div id="about" className={styles.aboutbox} >
         <h2 className={styles.h2about}>About Me</h2>
         <h3 className={styles.h3about} >A Passionate Front-End Developer </h3>
         <hr  className={styles.h3firstline} />
         <p className={styles.aboutp} >Iam a passionate front-end developer with a foundation in HTML , CSS , Javascript , Typescript.
                I enjoying creating responsivnes,user friendly and web application that focus on clean design and
                seamiess functionality. As someone who is always eagger to learn and grow. Iam currently expanding
                my skill set by react.js and Next.js to enhance my ability to build modern, high perfomance web solution</p>

            <h3 className={styles.h3about2} > Current Studies</h3>
            <hr className={styles.h3secondline} />
            <p  className={styles.aboutp}>Iam currently in second quarter of an Artificial intelligence course, having success cleard first quarter
                with the 70 percentile. My journey continous as I enhance my skills inn both AI and front-end
                development.</p>

            <h3 className={styles.h3about2} >Future Goals</h3>
            <hr className={styles.h3thirdline} />
            <p className= {styles.aboutp} >As I continue to master modern web development technologies. My goal is work to more comlex
               , scalabe projects, Iam excited to explore more opertunties when I can merge my front-end experties with my growing
                knowledge in Artificial intelligence, contributing to innovative and impactiful solutions.</p>

                <hr className={styles.h3footerline} />
      </div>
    {/* Skills */}
  
    <div id="skill" className={styles.skillpage } >
    <h2 className={styles.h2skill}> Skills</h2>
       <div className={styles.skillbox} >
        <div className={styles.card} >
          <Image className={styles.logoimage} src="/images/html-logo.png" width={100} height={100} alt="Html-logo" />
          <h3 className={styles.h3styles}>Html5</h3>
          <p className={styles.pskill} >The basic language for structuring web content.</p>
        </div>
        <div className={styles.card} >
        <Image className={styles.logoimage}  src="/images/css3.png" width={100} height={100} alt="CSS-logo" />
          <h3 className={styles.h3styles} >CSS3</h3>
          <p className={styles.pskill} >Styles and layouts for web pages</p>
          </div>
        <div className={styles.card} >
        <Image  className={styles.logoimage} src="/images/tailwind.png" width={100} height={100} alt="Tailwind-CSS-logo" />
         <h3 className={styles.h3styles} > Tailwind CSS </h3>
         <p className={styles.pskill} >Utility-first framework for quick, custom designs.</p>
         </div>
        <div className={styles.card} >
        <Image className={styles.logoimage}  src="/images/typescript.png" width={100} height={100} alt="typescript-logo" />
         <h3 className={styles.h3styles} > Typescript</h3>
         <p className={styles.pskill} >Typed JavaScript for better error checking and maintainability.</p>
         </div>
        <div className={styles.card} >
        <Image className={styles.logoimage}  src="/images/react.webp" width={100} height={100} alt="React.js-logo" />
         <h3 className={styles.h3styles} > React js </h3>
         <p className={styles.pskill} >Library for building UI components and single-page apps</p>
         </div>
        <div className={styles.card} >
        <Image className={styles.logoimage}  src="/images/next.png" width={100} height={100} alt="Next.js-logo" />
         <h3 className={styles.h3styles} >Next Js </h3>
         <p className={styles.pskill} >React framework for server-side rendering and enhanced performance</p>
         </div>
         <hr className={styles.footerskillline} />
       </div>

    </div>
    
    {/* Contact Form */}
  <div id="contact" className={styles.contactbox}>
     <div className={styles.formbox} > 
      <h2 className={styles.contacth2} > Contact Form</h2>
      <form  action="#/" method="post">
      <p className={styles.pcontact} >First Name :</p>
      <input  className={styles.valueinput} type="text" name="First name" id="name" placeholder="Your Name..?" />

      <p className={styles.pcontact} >Email :</p>
      <input className={styles.valueinput}  type="email" name="Email" id="email" placeholder="Enter Your Email.." />

      <p className={styles.pcontact}>Message :</p>
      <textarea className={styles.valuetext} name="message" id="message" placeholder="Enter Your Message."></textarea>
      </form>
      <div className={styles.btnsumbitbox} >
     <button className={styles.subbtn} type="submit">Submit</button>
     </div>
    </div> 
  </div>

  {/* Footer */}
  <Footer />

    </div>
    </>
  )
}

export default page
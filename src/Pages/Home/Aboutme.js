import React from 'react'
import { SlArrowRight } from 'react-icons/sl'

const Aboutme = () => {
  return (
    <section id='AboutMe' className='about--section'>
        <div className='about--section--img'>
            <img src="./img/about-croped.png" alt="About me" />
            {/* <img src="./img/kk.jpg" alt="About me" /> */}
        </div>
        <div className='hero--section--content-box about--section--box'>
            <div className='hero--section--content'>
                {/* <p className='section--title'> About</p> */}
                <h1 className='skills-section--heading' style={{width:"100%",display:"flex",justifyContent:"center"}}>About Me</h1>
                <p className='hero--section--description' style={{textAlign:"justify"}}>"I am a final-year computer science student, an analytical-minded and passionate software developer. I am proficient in C++ for DSA problem solving, adept at algorithmic thinking to deliver optimized and efficient solutions. I possess skills in full-stack web app development using the MERN stack and have experience in crafting high-quality, modern frontends with React, as well as building robust and scalable backends using Node.js, incorporating features of Express.js and MongoDB databases."</p>
                <div style={{alignSelf:"flex-start",marginLeft:"35px",width:"100%"}}>
                  <h3>Key Aspects</h3>
                  <ul style={{listStyle:"none","marginTop":"20px","paddingLeft":"0px"}}>
                   <li><SlArrowRight/> <strong> Full stack web developer</strong> </li><br />
                   <li><SlArrowRight/> <strong>DSA problem solver in C++</strong></li><br />
                   <li><SlArrowRight/> <strong>Building REST API</strong></li><br />
                   <li><SlArrowRight/> <strong>Managing Database</strong> </li>
                  </ul>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Aboutme

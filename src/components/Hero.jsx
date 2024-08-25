import { motion } from 'framer-motion'
import {  FaTwitter,  FaGithub,  FaLinkedin, FaInstagram} from 'react-icons/fa';
import backendImage from '../assets/Ayush_Resume.pdf'

const Hero = () => { 
  const handleDownload = (url) => {
    const link = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download",link);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div id="hero">
      <div className="hero__head">
        <div>
          <div />
          <div />
        </div>
        <div>
          <h1>Hi, I'm <span>Ayush</span></h1>
          <p>who loves to build scalable server-side web <br/>applications  and intuitive user interfaces .</p>
          <button onClick={()=>{
            handleDownload(backendImage);
          }}  class="fourth btn">Resume</button>
          <div className="socialbtns" style={{ textAlign: 'center' }}>
            <ul>
              <li><a target='_blank' href="https://github.com/ayushkamboj18/"><FaGithub size={28} /></a></li>
              <li><a target='_blank' href="https://www.linkedin.com/in/ayush-kamboj-933725245"><FaLinkedin size={28} /></a></li>
              <li><a target='_blank' href="https://x.com/Ayushka656456"><FaTwitter size={28} /></a></li>
              <li><a target='_blank' href="https://www.instagram.com/ayush_kamboj18?igsh=bnQyNDdvcWFibm9z"><FaInstagram size={28} /></a></li>
            </ul>
          </div>

        </div>
      </div>
      <div className="hero__foot">
        <a href="#about">
          <div>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero

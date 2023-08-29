import React from "react";
import { Link } from "react-scroll";
import styles from '../style';
import { logo, git, linkedin } from "../static";

function Sidebar() {

  
  
  return (
    <div className="fixed top-0 left-0 h-screen w-8 bg-primary shadow-md border-r-2 border-gray-300 z-10 select-none">
      
      <div className="flex flex-col items-center space-y-2 mt-2 border-b-2 pb-[0.87rem]">
      <a href="https://github.com/Masd04" target="_blank">
      <img src={git} alt="" className="w-[80%] scale-100 hover:scale-110 cursor-pointer ml-[0.2rem] sm:ml-[0.17rem]" />
      </a>
      <a href="https://www.linkedin.com/in/david-ma%C5%A1ek-aa2463258/" target="_blank">
      <img src={linkedin} alt="" className="w-[80%] scale-100 hover:scale-110 cursor-pointer ml-[0.2rem] sm:ml-[0.17rem]" />
      </a>
      </div>
      
      <nav className="flex flex-col items-center h-full justify-center">
        
        <ul className="flex flex-1 flex-col space-y-20 text-center ml-0 mt-36 w-8">

          <li className={`${styles.rotate_container} ml-1`}>
            <Link
              to="work" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500}
              className="text-gray-300 hover:border-b-2 hover:border-yellow-400 transform -rotate-90 origin-center hover:text-white cursor-pointer"
            >
              Work
            </Link>
          </li>

          <li className={`${styles.rotate_container} ml-1`}>
            <Link
              to="projects" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-145} duration={500}
              className="text-gray-300 hover:border-b-2 hover:border-yellow-400 transform -rotate-90 origin-center hover:text-white cursor-pointer"
            >
              Projects
            </Link>
          </li>

          <li className={`${styles.rotate_container} ml-1`}>
            <Link
              to="lang" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-145} duration={500}
              className="text-gray-300 hover:border-b-2 hover:border-yellow-400 transform -rotate-90 origin-center hover:text-white cursor-pointer"
            >
              Languages
            </Link>
          </li>

          <li className={`${styles.rotate_container} ml-1`}>
            <Link
              to="contact" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-145} duration={500}
              className="text-gray-300 hover:border-b-2 hover:border-yellow-400 transform -rotate-90 origin-center hover:text-white cursor-pointer"
            >
              Contact
            </Link>
          </li>

        </ul>

      </nav>
    </div>
  );
}

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import styles from '../style';
import { logo, git, linkedin } from "../static";

function Sidebar() {
  
  return (
    <div className="fixed top-0 left-0 h-screen w-8 shadow-md border-r-2 border-gray-300 z-10">
      
      <div className="flex flex-col items-center space-y-2 mt-2">
      <a href="https://github.com/Masd04" target="_blank">
      <img src={git} alt="" className="w-[80%] scale-100 hover:scale-110 cursor-pointer" />
      </a>
      <a href="https://www.linkedin.com/in/david-ma%C5%A1ek-aa2463258/" target="_blank">
      <img src={linkedin} alt="" className="w-[80%] scale-100 hover:scale-110 cursor-pointer" />
      </a>
      </div>
      
      <nav className="flex flex-col items-center h-full justify-center">
        
        <ul className="flex flex-1 flex-col space-y-20 text-center ml-14 mt-36">

          <li className={`${styles.rotate_container}`}>
            <Link
              to="/"
              className="text-gray-300 hover:border-b-2 hover:border-yellow-400 transform -rotate-90 origin-center hover:text-white"
            >
              Work
            </Link>
          </li>

          <li className={`${styles.rotate_container}`}>
            <Link
              to="/about"
              className="text-gray-300 hover:border-b-2 hover:border-yellow-400 transform -rotate-90 origin-center hover:text-white"
            >
              Projects
            </Link>
          </li>

          <li className={`${styles.rotate_container}`}>
            <Link
              to="/docs"
              className="text-gray-300 hover:border-b-2 hover:border-yellow-400 transform -rotate-90 origin-center hover:text-white"
            >
              Languages
            </Link>
          </li>

          <li className={`${styles.rotate_container}`}>
            <Link
              to="/docs"
              className="text-gray-300 hover:border-b-2 hover:border-yellow-400 transform -rotate-90 origin-center hover:text-white"
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

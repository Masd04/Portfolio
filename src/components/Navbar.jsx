import React from "react"
import {Link} from 'react-router-dom'
import { dwnld, see, logo, cv } from '../static'
import styles from '../style'
import CustomDropDown from '../components/CustomDropDown';




function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-20 shadow-md border-b-2 border-gray-100 bg-primary z-10 select-none">

      <nav className="flex items-center ml-6 sm:ml-10 h-full justify-left sm:justify-between">

      <div className="flex flex-grow justify-evenly items-center">

      <div className=" ">
          <div className="hidden sm:flex sm:flex-row">
            <a href={cv} target="_blank">
            <button className={`${styles.cvButtons}`}>
              <div className={`${styles.buttonContentContainer}`}>
              <img src={see} alt="" className="w-6 h-auto mr-2" />
              <p>VIEW CV</p>
              </div>
            </button>
            </a>
            <a href={cv} download>
            <button className={`${styles.cvButtons}`}>
              <div className={`${styles.buttonContentContainer}`}>
              <img src={dwnld} alt="" className="w-5 h-6 mr-2" />
              <p>DOWNLOAD CV</p>
              </div>
            </button>
            </a>
          </div>
          <div className="sm:hidden flex flex-col ml-[-0.3rem]">
            <a href={cv} target="_blank">
            <button className={`${styles.cvButtonsMob}`}>
              <div className={`${styles.buttonContentContainer}`}>
              <img src={see} alt="" className="w-5 h-auto mr-1" />
              <p className="mr-4">CV</p>
              </div>
            </button>
            </a>
            <a href={cv} download>
            <button className={`${styles.cvButtonsMob}`}>
              <div className={`${styles.buttonContentContainer}`}>
              <img src={dwnld} alt="" className="w-4 h-5 mr-1" />
              <p className="mr-4">CV</p>
              </div>
            </button>
            </a>
          </div>
        </div>
        
        <div className="flex justify-end sm:justify-center ml-[-1.15rem] sm:ml-[5.85rem]">
        <img src={logo} alt="Ma.Dev logo" className="w-[100%] sm:w-[58%] ml-[1rem] sm:mx-auto" />
        </div>

        <div className="flex flex-grow justify-end mr-2">
        <CustomDropDown />
        </div>     
      
      </div>
      </nav>
      
    </div>
  );
}

export default Navbar;

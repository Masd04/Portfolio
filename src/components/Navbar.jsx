import React from "react"
import {Link} from 'react-router-dom'
import { dwnld, see, logo } from '../static'
import styles from '../style'




function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-20 shadow-md border-b-2 border-gray-100 bg-primary z-10 select-none">

      <nav className="flex items-center ml-6 sm:ml-10 h-full justify-left sm:justify-between">
        
        <img src={logo} alt="Ma.Dev logo" className="w-[70%] sm:w-[18%] ml-2 sm:ml-0"/>

        <div className=" ">
          <div className="hidden sm:flex sm:flex-row">
            <button className={`${styles.cvButtons}`}>
              <div className={`${styles.buttonContentContainer}`}>
              <img src={see} alt="" className="w-6 h-auto mr-2" />
              <p>VIEW CV</p>
              </div>
            </button>
            <button className={`${styles.cvButtons}`}>
              <div className={`${styles.buttonContentContainer}`}>
              <img src={dwnld} alt="" className="w-5 h-6 mr-2" />
              <p>DOWNLOAD CV</p>
              </div>
            </button>
          </div>
          <div className="sm:hidden flex flex-col ml-[-0.125rem]">
            <button className={`${styles.cvButtonsMob}`}>
              <div className={`${styles.buttonContentContainer}`}>
              <img src={see} alt="" className="w-5 h-auto mr-1" />
              <p className="mr-4">CV</p>
              </div>
            </button>
            <button className={`${styles.cvButtonsMob}`}>
              <div className={`${styles.buttonContentContainer}`}>
              <img src={dwnld} alt="" className="w-4 h-5 mr-1" />
              <p className="mr-4">CV</p>
              </div>
            </button>
          </div>
        </div>
        
      </nav>
      
    </div>
  );
}

export default Navbar;

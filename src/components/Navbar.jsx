import React from "react";
import {Link} from 'react-router-dom';
import { dwnld, see, logo } from '../static';




function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-20 shadow-md border-b-2 border-gray-100 bg-primary z-10 select-none">

      <nav className="flex items-center ml-6 sm:ml-10 h-full justify-center sm:justify-between">
        
        <img src={logo} alt="Ma.Dev logo" className="w-[75%] sm:w-[18%]"/>

        <div className=" ">
          <div className=" ">
            <button className="bg-yellow-400 rounded-3xl w-auto h-12 white font-bold font-nunito mx-5 px-4 scale-100 hover:scale-105">
              <div className="flex flex-row">
              <img src={see} alt="" className="w-6 h-auto mr-2"/>
              <p>VIEW CV</p>
              </div>
            </button>
            <button className="bg-yellow-400 rounded-3xl w-auto h-12 white font-bold font-nunito mx-5 px-4 scale-100 hover:scale-105">
              <div className="flex flex-row">
              <img src={dwnld} alt="" className="w-5 h-6 mr-2"/>
              <p>DOWNLOAD CV</p>
              </div>
            </button>
          </div>
        </div>
        
      </nav>
      
    </div>
  );
}

export default Navbar;

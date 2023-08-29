import React from "react";
import {Link} from 'react-router-dom';
import { logo } from '../static';




function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-20 shadow-md border-b-2 border-gray-100 bg-primary z-10 select-none">

      <nav className="flex items-center ml-6 sm:ml-10 h-full justify-center sm:justify-between">
        
        <img src={logo} alt="Ma.Dev logo" className="w-[75%] sm:w-[18%]"/>
        

        <div>
          <ul className="hidden sm:flex items-center sm:mr-20 space-x-10 text-sm">
            <li><Link to="/" className="text-white hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/docs" className="text-white hover:text-yellow-400">Docs</Link></li>
          </ul>
        </div>
        
      </nav>
      
    </div>
  );
}

export default Navbar;

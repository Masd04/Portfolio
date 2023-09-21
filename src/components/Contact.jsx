import React, { forwardRef } from 'react';
import styles from '../style';
import { git_pic, linkedin_pic, clickon } from '../static';

function Contact() {
  return (
   <>
    <div id='contact' className='mb-60'>

      <div className={`${styles.heading1} ml-1 mt-28 sm:ml-0`}>
        <h1>Kontakt</h1>
      </div>

      <div className={`${styles.contH1} mt-6 mb-10`}>
        <h1>davidmasekk@gmail.com</h1>
      </div>

      <div className={`flex flex-col sm:flex-row flex-wrap w-full items-center justify-evenly`}>

        <div className={`w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2`}>
          <div className="flex flex-col justify-center items-center border-2 border-white rounded-2xl h-[16rem] mx-2 sm:mx-0">
          
          <div className="mt-10">
          <a href="https://github.com/Masd04" target="_blank">
            <img src={git_pic} alt="" className="w-64 cursor-pointer scale-100 hover:scale-110" />
          </a>
          </div>

          <div className="flex mr-72">
            <img src={clickon} alt="" className="w-10" />
          </div>

          </div>
        </div>

        <div className={`w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2`}>
          <div className="flex flex-col justify-center items-center border-2 border-white rounded-2xl h-[16rem] mx-2 sm:mx-0">

          <div className="mt-10">
          <a href="https://www.linkedin.com/in/david-ma%C5%A1ek-aa2463258/" target="_blank">
            <img src={linkedin_pic} alt="" className="w-40 cursor-pointer scale-100 hover:scale-110" />
          </a>
          </div>

          <div className="flex mr-52">
            <img src={clickon} alt="" className="w-10" />
          </div>


          </div>
        </div>
      </div>

      </div>
      </>
  );
}

export default Contact;

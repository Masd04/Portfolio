import React, { useState } from 'react';
import i18n from './i18n';
import { gbflag, czflag } from '../static';

const CustomDropdown1 = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);   
    setSelectedLanguage(e.target.value);
}

  return (
    <div className="flex flex-col justify-center items-center">

    <div className="">
      <div className="w-10 h-10 bg-yellow-400 border border-gray-400 rounded-full flex items-center justify-center mt-0 ml-[0.1rem] sm:ml-2 mr-[0rem] sm:mr-0">
        {selectedLanguage === 'cz' && (
          <img src={czflag} alt="Czech Flag" className="w-5 sm:w-6 h-5 sm:h-6" />
        )}
        {selectedLanguage === 'en' && (
          <img src={gbflag} alt="GB Flag" className="w-5 sm:w-6 h-5 sm:h-6" />
        )}
      </div>
    </div>

    <div className="flex justify-center">
      <select
        value={selectedLanguage}
        onChange={chooseLanguage}
        className="w-[2.7rem] sm:w-[3rem] h-6 sm:h-7 bg-yellow-400 border border-gray-400 rounded-md p-0 sm:p-1 mt-[0.1rem] px-auto text-xs font-bold font-nunito text-black"
      >
        <option value="cz" className="text-black font-bold">CZ</option>
        <option value="en" className="text-black font-bold">EN</option>
      </select>
    </div>
    
    </div>
  );
};

export default CustomDropdown1;
import React, { useState } from 'react';
import i18n from './i18n';
import { gbflag, czflag } from '../static';

const CustomDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);   
    setSelectedLanguage(e.target.value);
}

  return (
    <div className="flex flex-row justify-end items-center">

    <div className="">
      <div className="w-10 h-10 bg-yellow-400 border border-gray-400 rounded-full flex items-center justify-center mt-0 mr-1 sm:mr-2">
        {selectedLanguage === 'cz' && (
          <img src={czflag} alt="Czech Flag" className="w-6 h-6" />
        )}
        {selectedLanguage === 'en' && (
          <img src={gbflag} alt="GB Flag" className="w-6 h-6" />
        )}
      </div>
    </div>
    <div className="flex justify-center">
      <select
        value={selectedLanguage}
        onChange={chooseLanguage}
        className="bg-yellow-400 border border-gray-400 rounded-md p-2 px-auto font-bold font-nunito text-black"
      >
        <option value="cz" className="text-black font-bold">Česky</option>
        <option value="en" className="text-black font-bold">English</option>
      </select>
      </div>
    </div>
  );
};

export default CustomDropdown;
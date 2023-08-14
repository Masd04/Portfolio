const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1: "font-poppins font-semibold xs:text-[53px] text-[45px] text-white xs:leading-[76.8px] leading-[66.8px] w-[95%] sm:w-full text-center select-none",
  heading2: "font-poppins font-semibold xs:text-[48px] text-[35px] text-white xs:leading-[76.8px] leading-[66.8px] w-[93%] sm:w-full text-center select-none",

  paragraph: "font-poppins font-normal text-[18px] leading-[30.8px]",

  spanBgTxt: "bg-black bg-opacity-50 rounded-lg px-2 py-1",
  spanBgTxt1: "bg-gray-400 bg-opacity-100 rounded-lg px-2 py-1 border-2 border-black",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  paddingY1: "sm:pb-1 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",


  xpH1: "text-2xl my-6 text-white text-left font-medium mx-5",
  proH1: "text-2xl my-4 text-white text-center font-medium mx-5",
  card_xp: "w-[95%] xs:w-1/2 ss:w-1/2 sm:w-[28%] lg:w-[28%] flex flex-col p-6 border-2 border-white mx-6 my-3 rounded-2xl",
  card_lang: "w-[95%] xs:w-[95%] ss:w-[95%] sm:w-[95%] lg:w-[100%] flex flex-col pb-2 border-2 border-white mx-auto my-3 rounded-2xl h-[21em]",
  carousel_xp: "w-[95%] xs:w-[95%] ss:w-[95%] sm:w-[95%] lg:w-[100%] flex flex-col p-0 border-2 border-white mx-auto my-3 rounded-2xl h-[24em]",
  carousel_pr: "w-[95%] xs:w-1/2 ss:w-1/2 sm:w-[28%] lg:w-[28%] flex flex-col p-6 border-2 border-white mx-6 my-3 rounded-2xl h-[24em]",
  paragraph_xp: "font-poppins font-normal text-[18px] leading-[30.8px] text-white text-left font-medium text-base mx-5",
  flexItem: 'flex flex-1',
  flexItem1: 'flex',

  contH1: "text-2xl my-4 text-white text-center font-medium mx-5",

  cardContent: 'flex flex-col justify-between h-full',
  dateWrapper: 'mt-auto',
  date: 'text-center text-white mb-5',
  link_pr: 'text-center text-white scale-100 hover:scale-110 hover:text-yellow-400',
  date_lang: 'text-center text-white mt-2',

  rotate_container: 'my-2 px-1 transform -rotate-90 origin-top-left',

  customDotsContainer: 'flex items-center justify-center mt-4',
  customDot: 'mx-1 w-4 h-4 rounded-full bg-gray-300', // Customize the size and appearance of the dots
  activeDot: 'bg-yellow-400',
  
};
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
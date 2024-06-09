import React, { useRef, useEffect, useState } from "react";

function CustomSlider({ storeimages }) {

    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleScroll = () => {
      const slider = sliderRef.current;
      const newIndex = Math.round(slider.scrollLeft / slider.clientWidth);
      setCurrentIndex(newIndex);
    };
  
    useEffect(() => {
      const slider = sliderRef.current;
      slider.addEventListener('scroll', handleScroll);
  
      return () => {
        slider.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    
  return (
    
    <div className="relative w-full h-[474px]">
      <div
        ref={sliderRef}
        className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth snap-x snap-mandatory"
      >
        {storeimages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-[474px] object-cover inline-block snap-center"
            style={{ width: '100%', height: '100%' }}
          />
        ))}

      </div>
      <div className="absolute rounded-lg bg-[#313131] opacity-[0.9] top-[14px] right-[20px] w-[16px] h-[30px]">
      </div>
      <button className="absolute top-4 right-4 z-[999]">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
  <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="white"/>
</svg>
      </button>
      <div className="absolute bottom-4 right-[2%] transform -translate-x-1/2 flex space-x-2">
        {storeimages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;

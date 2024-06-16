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

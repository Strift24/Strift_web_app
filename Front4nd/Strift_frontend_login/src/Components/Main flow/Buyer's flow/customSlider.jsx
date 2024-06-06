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

//     const [currentIndex, setCurrentIndex] = useState(0);
// const [isAnimating, setIsAnimating] = useState(false);

// const slideDuration = 300; // Duration of the slide animation in ms

// const goToNext = () => {
//   setIsAnimating(true);
//   setTimeout(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % storestoreimages.length);
//     setIsAnimating(false);
//   }, slideDuration); // Match this duration with CSS transition duration
// };

// const goToPrev = () => {
//   setIsAnimating(true);
//   setTimeout(() => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + storestoreimages.length) % storestoreimages.length
//     );
//     setIsAnimating(false);
//   }, slideDuration);
// };

// return (
//   <div className="relative w-full h-64 overflow-hidden rounded-lg">
//     <div className="absolute inset-0 flex transition-transform duration-300"
//          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//       {storestoreimages.map((storestoreimages, index) => (
//         <img key={index} src={storestoreimages} alt={`Slide ${index}`} className="w-full h-full object-cover flex-shrink-0" />
//       ))}
//     </div>
//     <button
//       onClick={goToPrev}
//       className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1"
//     >
//       Prev
//     </button>
//     <button
//       onClick={goToNext}
//       className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1"
//     >
//       Next
//     </button>
//   </div>
// );

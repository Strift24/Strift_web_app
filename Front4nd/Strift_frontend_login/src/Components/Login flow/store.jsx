import React from "react";
import { Link } from "react-router-dom";

function Store({ store, isSelected, onSelect }) {
  return (
    <main className="bg-white">
      <div
        id="main box"
        className="  w-full  p-4 gap-4 flex flex-col items-center justify-center"
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4 items-center">
            <div className="w-[62px] h-[62px] flex-shrink-0">
              <img
                className="rounded-lg w-full h-full shadow-gray object-cover"
                src={store.logo}
                alt="Logo"
              />
            </div>

            <div className="w-full flex flex-col justify-start  ">
              <div className="flex items-center gap-2 ">
                <div className="text-[#1E1E1D] whitespace-nowrap overflow-x-auto  text-[21px] max-w-full font-medium">
                  {store.name}
                </div>
                <div className="h-[11px] w-[13.09px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                  >
                    <path
                      d="M4.55 11.7202L3.4125 9.90328L1.1956 9.46628L1.44375 7.4173L0 5.86008L1.44375 4.31662L1.1956 2.25388L3.4125 1.81687L4.55 0L6.5478 0.846802L8.5603 0L9.6978 1.81687L11.9 2.25388L11.6518 4.31662L13.0956 5.86008L11.6518 7.4173L11.9 9.46628L9.6978 9.90328L8.5603 11.7202L6.5478 10.8734L4.55 11.7202ZM5.9206 7.74514L9.2603 4.64446L8.51655 3.97502L5.9206 6.39281L4.59375 5.09523L3.8353 5.79189L5.9206 7.74514Z"
                      fill="#2863D8"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex gap-2 items-center w-full justify-start">
                <div className="h-[20px] w-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.6665 15L10 12.4585L13.3335 15L12.021 10.896L15.354 8.521H11.2915L10 4.271L8.6875 8.521H4.625L7.9585 10.896L6.6665 15ZM10 18.479C8.83333 18.479 7.73616 18.2568 6.7085 17.8125C5.6805 17.3682 4.78116 16.7605 4.0105 15.9895C3.2395 15.2188 2.63183 14.3195 2.1875 13.2915C1.74316 12.2638 1.521 11.1667 1.521 10C1.521 8.81934 1.74316 7.71517 2.1875 6.6875C2.63183 5.65984 3.2395 4.764 4.0105 4C4.78116 3.236 5.6805 2.63184 6.7085 2.1875C7.73616 1.74317 8.83333 1.521 10 1.521C11.1807 1.521 12.2848 1.74317 13.3125 2.1875C14.3402 2.63184 15.236 3.236 16 4C16.764 4.764 17.3682 5.65984 17.8125 6.6875C18.2568 7.71517 18.479 8.81934 18.479 10C18.479 11.1667 18.2568 12.2638 17.8125 13.2915C17.3682 14.3195 16.764 15.2188 16 15.9895C15.236 16.7605 14.3402 17.3682 13.3125 17.8125C12.2848 18.2568 11.1807 18.479 10 18.479Z"
                      fill="#FFA600"
                    />
                  </svg>
                </div>
                <div>{store.rating}</div>
                <div className="h-[8px] w-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <path
                      d="M4 6.3916C3.3444 6.3916 2.78187 6.15827 2.3124 5.6916C1.84307 5.22493 1.6084 4.66107 1.6084 4C1.6084 3.3444 1.84173 2.78193 2.3084 2.3126C2.77507 1.84313 3.33893 1.6084 4 1.6084C4.6556 1.6084 5.21813 1.84313 5.6876 2.3126C6.15693 2.78193 6.3916 3.3444 6.3916 4C6.3916 4.6556 6.15693 5.21813 5.6876 5.6876C5.21813 6.15693 4.6556 6.3916 4 6.3916Z"
                      fill="#525252"
                    />
                  </svg>
                </div>
                <div className="text-[#525252] max-w-full text-[15px] font-normal">
                  {store.category}
                </div>
              </div>
            </div>
          </div>
          <button
            className={`w-[89px] h-[32px] flex-shrink-0 rounded-2xl ${
              isSelected ? "bg-blue-500 text-white" : "bg-black text-white"
            } `}
            onClick={() => onSelect(store.id)}
          >
            {isSelected ? "Following" : "Follow"}
          </button>
        </div>

        <div className="flex h-[165px] gap-[14px] p-[4px] flex-shrink-0 justify-start items-center overflow-x-auto ">
          {store.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={store.name}
              className="shadow-gray h-[156px] w-[156px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Store;

// <img
//             className="shadow-gray h-[156px] w-[156px] object-cover rounded-lg"
//             src="https://s3-alpha-sig.figma.com/img/4e3b/e898/c725b1eaf19e0f9d408d4fd1e3e3b5bd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YuU5Ui7Iu6KbfuGBMNthovVjXstRNedI0rsHEGA36ZCr~~kxJNivJYYyAZTOYonYh2wBDquH6qS-9HdwTkqN5iUAY0AHIhEfhd47xXpP5RrETEOuW2sLL2NS3dYHy9V~Y2ZO-AeP4q4DCVPgsbjD07KE1cP4Pz229X7Wiw9NTGuo2MpzKFx1WtYYfF1guJrmr9xgp6zWasfu~zUfVHYyS2ZBarTnnxOugCxrjlYsWTBdmJe1EzbrkhEGcFlvcFuv--ugn5NL2fTnFDflKX~YYKyXoOS12mrRahbP1sq6Wp09NOn5vR7N7O6EGoPK9H9TUNh5HvRN34SYOcXUkRncaA__"
//             alt=""
//           />
//           <img
//             className="shadow-gray h-[156px] w-[156px] object-cover rounded-lg"
//             src="https://s3-alpha-sig.figma.com/img/a8cb/1fc6/b73cf606f64f91304e26ac786d15dcbd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=grr8vIoHDM8Pwl7DCWNbLvlbxxuSQ5NpxME89KjaFbCXgZ3xdHOyal0DrMDyF3W~~mi~cbM1iIlUvjT2XRjuxzOe1GU-lX6f1ryTbe2tuK9iAqIot9yHTuBsKbeS9nJUUbFBcVLzk9KU-i9RfTlXerVLu52lLq914hg-tpLzmDsSqZuFRpJS3IEfJRR1HhjycUmmwU4Y0S~nWyMfsrqjQSESZ0GN5OV9XTRez0bFFL10DZVhbeOASqgnYB6T6PTrZIz9OzPLacLb90IfbPsbVCtepoFoQ70csh~PD5eZlDEoCtO0AxwdF~ygAnhjzd4SgsIBZgzQMaju0LIvtrgLsg__"
//             alt=""
//           />
//           <img
//             className="shadow-gray h-[156px] w-[156px] object-cover  rounded-lg"
//             src="https://s3-alpha-sig.figma.com/img/be80/be9a/3712916c75ac48725b3665c1fbadd55c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1F7Wg0XEAbKQ9P944Bf0nwOCqKfKhgBQOm5SNmL5eX-WopOQlfMwY7HmVVUnoEjqb6dDqHhCR0-3syb0jKPgJYUaF~DVopAzLG50afOM-1b4qVLNT-1kHH223xtm2Gk1vyNRACbB64ekWd6JHCTgXnFpPcRbFzRmWIh9AWeycwVsiZwdY~wn8pdXKaQRPr7MqCS0HW9cB~omMyLnflfxAR1~zboYTo4YTLWNfX0jUHFiSn~PCRNeMldLNK8CiM1jtpjVSJJ1EIfXg8G4jhik9IubGhHHGL~vdgXy~YMhvw74fY7qRN8lZZkN4Q~xE96kLJn3xOpq3r6flx9Sz6BrQ__"
//             alt=""
//           />
//           <img
//             className="shadow-gray h-[156px] w-[156px] object-cover rounded-lg"
//             src="https://s3-alpha-sig.figma.com/img/b634/f96d/200c5066bb1367e4a4875e8137cce61d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oBcpywdMlDvNDEn6-CXq86eCZvYlUXIgqP~HNsjdxoXhMr1I8LdlnNRTcdCtqTWKZID5t8YNnupRzssQJyR-APvYCl2q92xatMWRBEWb9zrsMlppwZ6r2g~wsb3Dj0onf0wS0VNVZHoHnMIMLGerSiZzC0eFPtMgY1PuWnLDRfXP8uqbfxUEV5NCLeDPTOyHCkZ1BbzsmXrP8iXtdU8srsox2mwZWJXba9sZslmDMISvwt1iujpIVCYpXRbZfFhMycFEu5kcBeksx4Jp9mNrjfGjH8gHc2-jFBFWx41xPxC7J8FNW8jZ1XKV~n2NJ9jaQBPlq0a7TK4xetRlbiieKA__"
//             alt=""
//           />

import React, { useState } from "react";
import CustomSlider from "./customSlider";

function Post({ storeData }) {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white flex-col gap-0 w-full h-auto mb-3">
      <div id="image slider" className="h-[474px] flex-shrink-0">
        <CustomSlider storeimages={storeData.images} />
      </div>

      <div className="py-1 px-3 flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <svg
                className="rounded-lg shadow-gray w-[57px] h-[54px] object-cover"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="66.000000pt"
                height="62.000000pt"
                viewBox="0 0 66.000000 62.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,62.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M196 464 c-10 -10 -16 -33 -16 -66 0 -38 -5 -54 -21 -67 -31 -25 -30
-88 0 -112 26 -21 90 -25 122 -9 16 9 19 7 19 -13 0 -12 5 -28 12 -35 17 -17
55 -15 66 4 6 11 11 13 16 5 12 -18 54 -13 66 8 5 11 10 38 10 61 0 27 7 51
20 67 26 33 26 77 0 103 -23 23 -113 29 -126 9 -4 -7 -11 2 -18 22 -8 26 -17
35 -37 37 -14 2 -31 -4 -38 -12 -11 -14 -15 -14 -28 -1 -18 19 -28 19 -47 -1z
m52 -57 c3 -13 -3 -17 -27 -17 -33 0 -39 8 -19 28 17 17 42 11 46 -11z m82 -6
c0 -30 -19 -45 -45 -35 -15 6 -21 45 -8 57 3 4 17 7 30 7 19 0 23 -5 23 -29z
m160 -36 c10 -12 7 -17 -16 -26 -28 -10 -109 -8 -121 4 -3 4 -3 13 0 22 9 21
119 21 137 0z m-209 -76 c16 -8 18 -13 8 -25 -17 -21 -128 -19 -136 2 -3 9 0
20 8 25 20 12 96 11 120 -2z m89 -34 c20 -25 8 -50 -25 -50 -24 0 -31 5 -33
24 -6 37 34 55 58 26z m80 -29 c0 -19 -30 -29 -46 -15 -22 18 -16 29 16 29 19
0 30 -5 30 -14z"
                  />
                </g>
              </svg>
            </div>
            <div className="font-[17px] font-medium flex-shrink-0 flex items-center gap-1">
              <div>{storeData.storeName}</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                >
                  <path
                    d="M4.53547 9.70695L3.62664 8.21963L1.8554 7.86188L2.05366 6.18455L0.900146 4.90978L2.05366 3.64628L1.8554 1.95768L3.62664 1.59993L4.53547 0.11261L6.13165 0.805818L7.73958 0.11261L8.64841 1.59993L10.4079 1.95768L10.2096 3.64628L11.3632 4.90978L10.2096 6.18455L10.4079 7.86188L8.64841 8.21963L7.73958 9.70695L6.13165 9.01374L4.53547 9.70695ZM5.63054 6.45293L8.29886 3.91465L7.70463 3.36663L5.63054 5.34589L4.57042 4.28366L3.96444 4.85396L5.63054 6.45293Z"
                    fill="#2863D8"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex items-center">
              <button onClick={handleLike} className="focus:outline-none">
                {liked ? (
                  <svg
                  className="bg-red-500 text-red-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="red"
                  >
                    <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                  </svg>
                ) : (
                  <svg
                  
                  className="bg-red-500 text-red-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="red"
                  >
                    <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                  </svg>
                )}
              </button>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 22V3.5C2 3.11667 2.15 2.77083 2.45 2.4625C2.75 2.15417 3.1 2 3.5 2H20.5C20.8833 2 21.2292 2.15417 21.5375 2.4625C21.8458 2.77083 22 3.11667 22 3.5V16.5C22 16.8833 21.8458 17.2292 21.5375 17.5375C21.2292 17.8458 20.8833 18 20.5 18H6L2 22ZM3.5 18.375L5.375 16.5H20.5V3.5H3.5V18.375ZM3.5 3.5V18.375V3.5Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-wrap flex items-center text-black font-[16px]">
          <div>{storeData.description}</div>
        </div>

        <div className="flex items-center justify-between text-[#646464] font-[11px]">
          <div className="flex gap-1">
            <div>{storeData.likes} people like this</div>
            <div>• {storeData.commentsCount} people talking about this</div>
          </div>
          <div>{storeData.time} ago</div>
        </div>
      </div>
    </div>
  );
}

export default Post;

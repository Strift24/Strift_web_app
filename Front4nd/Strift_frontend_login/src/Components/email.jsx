import React from "react";
import { Link } from "react-router-dom";

function Email() {
  return (
    <main className="h-screen w-full bg-white">
      <Link to="/otp">
        <button className="p-3">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 16">
              <g id="Group 18">
                <g id="arrow_back">
                  <mask
                    id="mask0_1856_9870"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="29"
                    height="29"
                  >
                    <rect
                      id="Bounding box"
                      x="0.599976"
                      y="0.699951"
                      width="28"
                      height="28"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_1856_9870)">
                    <path
                      id="arrow_back_2"
                      d="M14.5999 24.0333L5.2666 14.7L14.5999 5.36667L16.2624 7L9.7291 13.5333H23.9333V15.8667H9.7291L16.2624 22.4L14.5999 24.0333Z"
                      fill="black"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </Link>

      <div className="px-8 py-[90px] w-full flex-col gap-3 flex justify-start items-start text-black">
        <div className="text-lg font-medium">What’s your email</div>
        <input
          placeholder="email"
          className="w-full bg-[#E8E8E8] rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          name="email"
          id=""
        />
        <div
          className="text-sm text-neutral-500
"
        >
          We promise, we won’t spam your inbox.
        </div>
      </div>
      <Link to="/profileName">
        <div className="text-center">
          <button className="bg-black px-[36px] py-2 rounded-lg shadow-lg text-white">
            Continue
          </button>
        </div>
      </Link>
    </main>
  );
}

export default Email;

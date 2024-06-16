import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

function Phone() {
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setDisabled(e.target.value.length < 10);
  };

  async function handleContinue(event) {
    event.preventDefault();
    try {
      setTimeout(() => {
        //Write the Bakend part for sending the phone number to the database..
        const response = phone; // Take response from here in place of phone
        if (response) {
          console.log("Success");
          navigate("/profileName");
        } else {
          alert(
            "Some error occured while pushing your details,\nPlease try again"
          );
        }
      }, 1500);
    } catch (error) {
      console.log(error);
      alert("Some error occured, Please try again.");
    }
  }

  return (
    <main className="h-screen w-full bg-white">
      <Link to="/">
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
        <div className="text-lg font-medium">Enter your Phone Number:</div>
        <form className="w-full" onSubmit={handleContinue}>
          <InputMask
            mask="99999-99999"
            placeholder="98765-43210"
            className="w-full bg-[#E8E8E8] rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            name="phone"
            id="phone number"
            value={phone}
            onChange={handlePhoneChange}
          />
          <div
            className="text-sm pt-3 text-neutral-500
"
          >
            We promise, we won’t spam calls.
          </div>
          <div className="w-full absolute pb-2 bottom-6 px-4 left-1/2 transform -translate-x-1/2 translate-y-1/2  text-center">
          <button type="submit" disabled={disabled} className="w-full bg-black  py-2 rounded-lg shadow-lg text-white">
            Continue
          </button>
        </div>
        </form>
      </div>
    </main>
  );
}

export default Phone;

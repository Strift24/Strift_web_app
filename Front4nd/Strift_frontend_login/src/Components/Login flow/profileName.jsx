import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfileName() {
    
    const navigate = useNavigate();
    const [firstName , setFirstName] = useState("")
    const [secondName , setSecondName] = useState("")

    const [disabled , setDisabled] = useState(true)
    const firstNameChange = (e) =>{
        setFirstName(e.target.value)
        setDisabled(e.target.value.length < 1)
        console.log(e.target.value.length);
    }
    const firstSecondChange = (e) =>{
        setSecondName(e.target.value)
    }

    async function handleContinue(event) {
      event.preventDefault();

        try {
            setTimeout(() => {
                const response = firstName.length >= 3
            if (response) {
                console.log("success");
                navigate('/decidingUser')
            } else {
                if (firstName.length < 3) {
                    alert('Please enter a Valid Name.')
                } else {
                    alert("Some error occured while pushing your details,\nPlease try again")
                }
            }
            },1500)
        } catch (error) {
            alert("Some error occured while pushing your details,\nPlease try again")
        }
    }

  return (
    <main className="h-screen w-full bg-white">
      <Link to="/email">
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

      <div className=" px-8 py-[90px] w-full flex-col gap-3 flex justify-start items-start text-black">
        <div className="text-lg font-medium">What should we call you?</div>
        <form className="w-full" onSubmit={handleContinue}>
        <input
          className="w-full bg-[#E8E8E8] rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="first name"
          type="text"
          name="name"
          id=""
          value={firstName}
          required
          onChange={firstNameChange}
        />
        <input
          className="w-full mt-4 bg-[#E8E8E8] rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="last name"
          type="text"
          name="name"
          id=""
          value={secondName}
          onChange={firstSecondChange}
        />
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

export default ProfileName;

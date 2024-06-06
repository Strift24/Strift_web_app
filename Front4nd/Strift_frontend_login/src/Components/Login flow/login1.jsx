import React from "react";
import { useState } from "react";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import ProfileName from "./profileName";

function Login1() {
  const [ph, setPh] = useState("");
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <>
      <div className=" w-full flex justify-center items-center relative ">
        <h1 className=" text-white text-[70px] font-bold relative top-[210px] left-[7px]">
          {" "}
          [strift]{" "}
        </h1>
      </div>

      <div className="h-[45%]  absolute bottom-[0px] w-full">
        <div className="flex justify-center items-center gap-4 flex-col h-[50%] bg-black bg-opacity-[40%] backdrop-blur-lg rounded-t-3xl ">
          <section
            id="LoginPage"
            className=" h-screen flex items-center justify-center z-50"
          >
            <div>
              <div className="text-white flex flex-col gap-4 rounded-lg">
                {/* <>
                        <label htmlFor="ph" className='font-bold text-l text-white text-center'>
                            Enter your OTP
                        </label>
                        <OtpInput
                            className="otp-container" 
                            value={otp}
                            onChange={setOtp}
                            OTPLength={6}
                            otpType = "number"
                            disabled = {false}
                            autoFocus
                        ></OtpInput>
                        <button className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded "> 
                            <span>Verify OTP</span>
                        </button>
                    </> */}
                <>
                  <label
                    htmlFor=""
                    className="font-bold text-l text-white text-center"
                  ></label>

                  <PhoneInput
                    className="cursor-pointer bg-tranparent rounded-lg"
                    country={"in"}
                    value={ph}
                    onChange={setPh}
                    containerStyle={{
                      backgroundColor: "transparent",
                      zIndex: 9999,
                    }}
                    inputStyle={{
                      backgroundColor: "white", // or 'black' for black background
                      color: "black", // text color
                      fontWeight: 100,
                      borderColor: "transparent",
                      boxShadow: "none",
                      paddingLeft: "48px",
                      // borderRadius: "",
                    }}
                    searchStyle={{ backgroundColor: "black", zIndex: 9999 }}
                    dropdownStyle={{
                      borderTopLeftRadius: "10px", // Adjust the top-left border radius
                      borderTopRightRadius: "10px",
                      color: "black",
                      backgroundColor: "white",
                      top: "-180px", // Adjust this value to position the dropdown above the input field
                      maxHeight: "150px", // Limit dropdown height if needed
                      overflowY: "auto", // Enable scrolling if dropdown height exceeds maxHeight
                    }}
                    buttonStyle={{
                      backgroundColor: "white",
                    }}
                  />

                  <Link to="/otp">
                    <button className="z-50 cursor-pointer bg-black w-[338px] h-[56px] flex items-center px-8 gap-8 py-2.5 text-white text-xl font-normal rounded-xl ">
                      <svg
                        className="w-[23px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="
                        white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                      </svg>
                      <div>Continue with Phone</div>
                    </button>
                  </Link>
                </>
              </div>
            </div>
          </section>
        </div>

        <div className="z-[-1] h-[50%] bg-slate-200 rounded-t-xl flex flex-col gap-3 justify-center items-center  bg-opacity-[30%] backdrop-blur-lg">
          <Link to="/phone">
            <button
              onClick={handleClick}
              className="flex justify-center items-center text-xl z-50 font-semibold g-signin2 w-[338px] bg-white text-gray-800 rounded-md shadow-md p-2"
            >
              <img
                className="w-[20px] mr-[20px]"
                src="https://www.svgrepo.com/show/50809/google.svg"
                alt=""
              />
              <div className="mr-[12px]">Sign in with Google</div>
            </button>
          </Link>

          <div className="z-[99] text-xs text-center w-[338px] pt-2 text-white font-normal ">
            By continuing, you agree to our{" "}
            <span className="font-bold">Terms and Conditions</span>, and{" "}
            <span className="font-bold">Privacy Policy</span>.
          </div>
        </div>
      </div>
    </>
  );
}

export default Login1;

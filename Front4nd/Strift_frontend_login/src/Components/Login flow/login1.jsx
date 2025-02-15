import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Client, Account, OAuthProvider } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("6661d28600059451e965"); // Your project ID

const account = new Account(client);

function Login1() {
  const [phone, setPhone] = useState("+91");
  const [disabledContinue, setDisabledContinue] = useState(true);
  const navigate = useNavigate();
  
  
  const handlePhoneChange = (event) => {
    const value = event.target.value;
    // Allow only digits, backspaces, and the '+' sign
    const isValidInput = /^\+?[0-9\b]{0,12}$/.test(value);
    if (isValidInput || value === "") {
      setPhone(value);
      setDisabledContinue(value.length < 10);
    }    
    setDisabledContinue(value.length < 10);
  };
  
  
  async function handlePhoneContinue(event) {
    event.preventDefault();
    try {
      setTimeout(async () => {
        // Replace this with your actual backend API call
        // const success = await authenticatePhone(); // Call your backend API

        // Simulating the response
        const success = true; // Change this to the actual response from your backend API

        if (success) {
          console.log("Phone authentication successful");
          navigate("/otp");
        } else {
          alert(
            "Something went wrong during phone authentication.\nPlease try again later."
          );
        }
      }, 1500);
    } catch (error) {
      console.log("Error during phone authentication:", error);
      alert(
        "Something went wrong during phone authentication.\nPlease try again later."
      );
    }
    ``;
  }

  async function handleClick() {
    try {
      const res = await account.createOAuth2Session(
        "google",
        "http://localhost:5173/phone",
        "http://localhost:5173/"
      );
      // if else
      console.log(res);
    } catch (error) {
      console.error("Error during Google sign in:", error);
      alert(
        "Something went wrong during Google sign in. Please try again later."
      );
    }
  }

  return (
    <>
      <div className=" w-full flex justify-center items-center relative ">
        <h1 className=" text-white text-[70px] font-bold relative top-[210px] left-[7px]">
          {" "}
          [strift]{" "}
        </h1>
      </div>

      <div className="h-[50%]  absolute bottom-[0px] w-full">
        <div className="flex justify-center items-center gap-4 flex-col h-[50%] bg-black bg-opacity-[40%] backdrop-blur-lg rounded-t-3xl ">
          <section
            id="LoginPage"
            className=" h-screen flex items-center justify-center z-50"
          >
            <div>
                <form className="flex flex-col gap-4 items-center justify-center"  onSubmit={handlePhoneContinue}>
                  <input 
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+918764321012"
                  className= " cursor-pointer h-[56px] bg-[rgb(0,0,0,0.5)] rounded-lg text-white text-xl w-full py-2.5 px-[28px]" 
                  value={phone}
                  onChange={handlePhoneChange}
                  />
                  <button
                    className="z-50 cursor-pointer bg-black w-[338px] h-[56px] flex items-center px-8 gap-8 py-2.5 text-white text-xl font-normal rounded-xl "
                    type="submit"
                    disabled={disabledContinue}
                  >
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
                </form>
            </div>
          </section>
        </div>

        <div className="z-[-1] h-[50%] bg-slate-200 rounded-t-xl flex flex-col gap-3 justify-center items-center  bg-opacity-[30%] backdrop-blur-lg">
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

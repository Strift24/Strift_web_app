import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import OtpInput from "otp-input-react";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

//IMPORTANT
// theres some depreciation error with this otp react library so in future this may get effected**********************

function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  //For Continue otp
  const [disabled, setDisabled] = useState(false);

  const handleOtpContinue = () => {
    if (otp.length != 6) {
      alert("OTP verification failed. Please enter a valid OTP.");
      return;
    }

    try {
      setDisabled(true);

      // Simulate OTP verification backend part with a delay
      setTimeout(async () => {
        // Replace this with your actual backend API call to verify the OTP
        // const response = await verifyOtpFromBackend(otp); // Call your backend API

        // Simulating the response

        const otpVerificationSuccess = true; // Simulating OTP verification success

        if (otpVerificationSuccess) {
          console.log("OTP verification successful");
          navigate("/email");
        } else {
          console.log(otp.length);
          alert("Some error occured, Please Try again.");
          setDisabled(false);
        }
      }, 2000); // Delay of 2 seconds
    } catch (error) {
      console.error("Error:", error);
      alert("Some network error occured, Please try again.");
    }
  };

  //For Resend Otp
  const [resendFlow, setResendFlow] = useState(false);
  const [timer, setTimer] = useState(20);

  const handleResendOtp = () => {
    setResendFlow(true);
    setTimer(20);
  };

  useEffect(() => {
    let interval;

    if (resendFlow) {
      interval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setResendFlow(false);
            return 20;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [resendFlow, timer]);


  // For Calling function
  const [buttonText, setButtonText] = useState("Call me instead");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleCallClick = async () => {
    if (isVerifying) return; // Prevent multiple clicks

    setIsVerifying(true);
    setButtonText('Verifying, Please wait...');

    // Simulate verification process with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds

    setIsVerifying(false);
    setButtonText('Verification complete!'); // Assuming successful verification

    // Delay navigation after verification message for 2 seconds
    setTimeout(() => {
      navigate('/email'); // Navigate after delay
    }, 2000);
    
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div
        className="w-full h-screen bg-slate-200 bg-opacity-[30%] backdrop-blur-lg
"
      >
        <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col justify-center items-center">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="dialpad">
                <mask
                  id="mask0_1856_8592"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="37"
                  height="37"
                >
                  <rect
                    id="Bounding box"
                    width="37"
                    height="37"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_1856_8592)">
                  <path
                    id="dialpad_2"
                    d="M18.5 35.4584C17.6521 35.4584 16.9265 35.1568 16.3232 34.5535C15.7188 33.9491 15.4167 33.223 15.4167 32.3751C15.4167 31.5272 15.7188 30.801 16.3232 30.1967C16.9265 29.5934 17.6521 29.2917 18.5 29.2917C19.3479 29.2917 20.0741 29.5934 20.6784 30.1967C21.2817 30.801 21.5833 31.5272 21.5833 32.3751C21.5833 33.223 21.2817 33.9491 20.6784 34.5535C20.0741 35.1568 19.3479 35.4584 18.5 35.4584ZM9.25001 7.70841C8.40209 7.70841 7.67648 7.40625 7.07318 6.80191C6.46884 6.19861 6.16668 5.473 6.16668 4.62508C6.16668 3.77716 6.46884 3.05104 7.07318 2.44671C7.67648 1.8434 8.40209 1.54175 9.25001 1.54175C10.0979 1.54175 10.8235 1.8434 11.4268 2.44671C12.0312 3.05104 12.3333 3.77716 12.3333 4.62508C12.3333 5.473 12.0312 6.19861 11.4268 6.80191C10.8235 7.40625 10.0979 7.70841 9.25001 7.70841ZM9.25001 16.9584C8.40209 16.9584 7.67648 16.6562 7.07318 16.0519C6.46884 15.4486 6.16668 14.723 6.16668 13.8751C6.16668 13.0272 6.46884 12.301 7.07318 11.6967C7.67648 11.0934 8.40209 10.7917 9.25001 10.7917C10.0979 10.7917 10.8235 11.0934 11.4268 11.6967C12.0312 12.301 12.3333 13.0272 12.3333 13.8751C12.3333 14.723 12.0312 15.4486 11.4268 16.0519C10.8235 16.6562 10.0979 16.9584 9.25001 16.9584ZM9.25001 26.2084C8.40209 26.2084 7.67648 25.9068 7.07318 25.3035C6.46884 24.6991 6.16668 23.973 6.16668 23.1251C6.16668 22.2772 6.46884 21.551 7.07318 20.9467C7.67648 20.3434 8.40209 20.0417 9.25001 20.0417C10.0979 20.0417 10.8235 20.3434 11.4268 20.9467C12.0312 21.551 12.3333 22.2772 12.3333 23.1251C12.3333 23.973 12.0312 24.6991 11.4268 25.3035C10.8235 25.9068 10.0979 26.2084 9.25001 26.2084ZM27.75 7.70841C26.9021 7.70841 26.176 7.40625 25.5716 6.80191C24.9683 6.19861 24.6667 5.473 24.6667 4.62508C24.6667 3.77716 24.9683 3.05104 25.5716 2.44671C26.176 1.8434 26.9021 1.54175 27.75 1.54175C28.5979 1.54175 29.3241 1.8434 29.9284 2.44671C30.5317 3.05104 30.8333 3.77716 30.8333 4.62508C30.8333 5.473 30.5317 6.19861 29.9284 6.80191C29.3241 7.40625 28.5979 7.70841 27.75 7.70841ZM18.5 26.2084C17.6521 26.2084 16.9265 25.9068 16.3232 25.3035C15.7188 24.6991 15.4167 23.973 15.4167 23.1251C15.4167 22.2772 15.7188 21.551 16.3232 20.9467C16.9265 20.3434 17.6521 20.0417 18.5 20.0417C19.3479 20.0417 20.0741 20.3434 20.6784 20.9467C21.2817 21.551 21.5833 22.2772 21.5833 23.1251C21.5833 23.973 21.2817 24.6991 20.6784 25.3035C20.0741 25.9068 19.3479 26.2084 18.5 26.2084ZM27.75 26.2084C26.9021 26.2084 26.176 25.9068 25.5716 25.3035C24.9683 24.6991 24.6667 23.973 24.6667 23.1251C24.6667 22.2772 24.9683 21.551 25.5716 20.9467C26.176 20.3434 26.9021 20.0417 27.75 20.0417C28.5979 20.0417 29.3241 20.3434 29.9284 20.9467C30.5317 21.551 30.8333 22.2772 30.8333 23.1251C30.8333 23.973 30.5317 24.6991 29.9284 25.3035C29.3241 25.9068 28.5979 26.2084 27.75 26.2084ZM27.75 16.9584C26.9021 16.9584 26.176 16.6562 25.5716 16.0519C24.9683 15.4486 24.6667 14.723 24.6667 13.8751C24.6667 13.0272 24.9683 12.301 25.5716 11.6967C26.176 11.0934 26.9021 10.7917 27.75 10.7917C28.5979 10.7917 29.3241 11.0934 29.9284 11.6967C30.5317 12.301 30.8333 13.0272 30.8333 13.8751C30.8333 14.723 30.5317 15.4486 29.9284 16.0519C29.3241 16.6562 28.5979 16.9584 27.75 16.9584ZM18.5 16.9584C17.6521 16.9584 16.9265 16.6562 16.3232 16.0519C15.7188 15.4486 15.4167 14.723 15.4167 13.8751C15.4167 13.0272 15.7188 12.301 16.3232 11.6967C16.9265 11.0934 17.6521 10.7917 18.5 10.7917C19.3479 10.7917 20.0741 11.0934 20.6784 11.6967C21.2817 12.301 21.5833 13.0272 21.5833 13.8751C21.5833 14.723 21.2817 15.4486 20.6784 16.0519C20.0741 16.6562 19.3479 16.9584 18.5 16.9584ZM18.5 7.70841C17.6521 7.70841 16.9265 7.40625 16.3232 6.80191C15.7188 6.19861 15.4167 5.473 15.4167 4.62508C15.4167 3.77716 15.7188 3.05104 16.3232 2.44671C16.9265 1.8434 17.6521 1.54175 18.5 1.54175C19.3479 1.54175 20.0741 1.8434 20.6784 2.44671C21.2817 3.05104 21.5833 3.77716 21.5833 4.62508C21.5833 5.473 21.2817 6.19861 20.6784 6.80191C20.0741 7.40625 19.3479 7.70841 18.5 7.70841Z"
                    fill="white"
                  />
                </g>
              </g>
            </svg>

            <label
              htmlFor="otp"
              className="mt-3 font-normal text-lg text-white text-center"
            >
              Enter the verification code sent to
              <br />
              <span className="font-semibold">+91 9891666666</span>
            </label>

            <OtpInput
              id="otp"
              name="otp"
              className="otp-container mt-8 mb-4"
              value={otp}
              onChange={setOtp}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              inputMode="numeric"
            />
          </div>

          <button disabled={disabled} onClick={handleOtpContinue}>
            <div className="p-2 px-6 opacity-[0.8] mt-2 text-base text-white rounded-xl bg-black">
              Continue
            </div>
          </button>

          <div className="mr-[90px] mt-[20px]">
            <div className="text-[15px]  w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
              <div className="flex gap-2 flex-col items-center">
                <div className="w-full flex gap-1 flex-shrink-0 items-center">
                  Having issues?
                  {resendFlow ? (
                    <span> Resend in {timer}s.</span>
                  ) : (
                    <button
                      onClick={handleResendOtp}
                      className="flex items-center gap-[3px] "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                      >
                        <path
                          d="M5.79165 13.8396C4.36317 13.6625 3.17979 13.0396 2.24148 11.971C1.3027 10.9028 0.833313 9.64859 0.833313 8.20831C0.833313 7.42915 0.986785 6.68233 1.29373 5.96785C1.60067 5.25385 2.03748 4.63123 2.60415 4.09998L3.61352 5.10935C3.16491 5.51074 2.82562 5.97706 2.59565 6.50831C2.3652 7.03956 2.24998 7.60623 2.24998 8.20831C2.24998 9.2472 2.58054 10.165 3.24165 10.9616C3.90276 11.7587 4.75276 12.2458 5.79165 12.4229V13.8396ZM7.20831 13.8396V12.4229C8.2354 12.234 9.08233 11.7441 9.74911 10.9531C10.4164 10.1621 10.75 9.2472 10.75 8.20831C10.75 7.02776 10.3368 6.02428 9.5104 5.1979C8.68401 4.37151 7.68054 3.95831 6.49998 3.95831H6.44686L7.22602 4.73748L6.23435 5.72915L3.75519 3.24998L6.23435 0.770813L7.22602 1.76248L6.44686 2.54165H6.49998C8.08192 2.54165 9.42185 3.0906 10.5198 4.18852C11.6177 5.28644 12.1666 6.62637 12.1666 8.20831C12.1666 9.63678 11.6975 10.8853 10.7592 11.954C9.82041 13.0221 8.63679 13.6507 7.20831 13.8396Z"
                          fill="white"
                        />
                      </svg>
                      <span>Resend?</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <button
              disabled={isVerifying} // Disable button during verification
              onClick={handleCallClick}
              className="flex gap-2 items-center"
            >
              <svg
                className="w-[15px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="
                        white"
                viewBox="0 0 24 24"
              >
                <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
              </svg>

              <span className="text-[14px] text-white font-medium">
              {buttonText}
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Otp;

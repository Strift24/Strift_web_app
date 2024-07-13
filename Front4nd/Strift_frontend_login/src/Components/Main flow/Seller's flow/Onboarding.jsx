import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Onboarding() {
  
  const [storeName, setStoreName] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const [banner, setBanner] = useState(null);
  const [logo, setLogo] = useState(null);


  const handleStoreNameChange = (event) => {
    setStoreName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (storeName !== "" && bio !== "" && banner && logo) {
      // Handle form submission logic
      console.log("Store Name:", storeName);
      console.log("Bio:", bio);
      navigate("/label/welcomeOnboard");
    } else {
      alert("Please fill all the details.");
    }
  };

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBanner(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setBanner(null);
    }
    resetFileInput(event);
    // Reset the file input value
  };


  const handleLogoUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      setLogo(reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    setLogo(null);
  }
  resetFileInput(event);
  // Reset the file input value
};

const resetFileInput = (event) => {
  event.target.value = null;
};

  const uploadImage = async (file, type) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("type", type);

    try {
      // DO THE BACKEND STORING PART HERE
      // Handle the response data as needed
      // Send the image to the backend server
      // below is a demonstration of how to send the data...
      // const response = await fetch('http://localhost:3000/upload', { // Replace with your backend endpoint
      //     method: 'POST',
      //     body: formData,
      //   });
      //   // Check if the response is OK (status code 200-299)
      //   if (!response.ok) {
      //     throw new Error('Network response was not ok');
      //   }
      //   // Parse the JSON response
      //   const data = await response.json();
      //   console.log(data);
      //   // Handle the response data as needed (e.g., display a success message or update the UI)
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const removeBanner = () => {
    setBanner(null);
    // Optionally, make an API call to delete the image from the server
  };
  
  const removeLogo = () => {
    setLogo(null);
    // Optionally, make an API call to delete the image from the server
  };

  return (
    <div className="bg-white w-full h-screen relative">
      <div className="p-4 h-[80px] w-full flex items-center justify-center ">
        <div>
          {/* <Link to="/decidingUser"> */}
            <button
             onClick={() => navigate(-1)}
            className="">
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
          {/* </Link> */}
        </div>
        <div className="text-center text-[30px] font-medium w-full">
          Create a store
        </div>
      </div>
      <div className="h-[20vh] relative">
        <div
          className="flex items-center justify-center overflow-hidden h-full bg-[#D9D9D9]"
          onClick={() =>
            !banner && document.getElementById("banner-upload").click()
          }
        >
          {banner ? (
            <>
              <img
                src={banner}
                alt="BannerPreview"
                className="h-full w-full object-cover"
              />
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the file input
                  removeBanner();
                }}
              >
                &times;
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <path
                    d="M20.8084 31.075H23.4668V23.5125H31.0751V20.8083H23.4668V12.925H20.8084V20.8083H12.9251V23.5125H20.8084V31.075ZM22.0001 40.15C19.4945 40.15 17.1418 39.6688 14.9418 38.7063C12.7418 37.7438 10.8244 36.4451 9.18968 34.8104C7.55496 33.1757 6.25635 31.2583 5.29385 29.0583C4.33135 26.8583 3.8501 24.5056 3.8501 22C3.8501 19.4945 4.33135 17.134 5.29385 14.9188C6.25635 12.7035 7.5626 10.7785 9.2126 9.14376C10.8626 7.50903 12.78 6.21806 14.9647 5.27084C17.1494 4.32362 19.4945 3.85001 22.0001 3.85001C24.5057 3.85001 26.8661 4.32362 29.0814 5.27084C31.2966 6.21806 33.2216 7.50903 34.8563 9.14376C36.4911 10.7785 37.782 12.7035 38.7293 14.9188C39.6765 17.134 40.1501 19.4945 40.1501 22C40.1501 24.5361 39.6765 26.8889 38.7293 29.0583C37.782 31.2278 36.4911 33.1375 34.8563 34.7875C33.2216 36.4375 31.2966 37.7438 29.0814 38.7063C26.8661 39.6688 24.5057 40.15 22.0001 40.15Z"
                    fill="#707070"
                  />
                </svg>
                {/* <p className="text-black">Click to upload banner</p> */}
              </div>
            </>
          )}
          <input
            required
            type="file"
            id="banner-upload"
            className="hidden"
            onChange={handleBannerUpload}
          />
        </div>
        <div>
          <div
            onClick={() =>
              !logo && document.getElementById("logo-upload").click()
            }
            className="absolute bg-[#F0F0F0] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-lg shadow-gray w-[6rem] h-[6rem] object-cover flex items-center justify-center"
          >
            {logo ? (
              <>
                <img
                  src={logo}
                  alt="LogoPreview"
                  className="h-full w-full object-cover rounded-lg"
                />
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the file input
                    removeLogo();
                  }}
                >
                  &times;
                </button>
              </>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M26.25 13.8125V24.0312C26.25 24.6354 26.0313 25.1563 25.5938 25.5938C25.1563 26.0312 24.6355 26.25 24.0313 26.25H5.93754C5.31254 26.25 4.7865 26.0312 4.35941 25.5938C3.93233 25.1563 3.71879 24.6354 3.71879 24.0312V13.8125C3.07296 13.2917 2.66671 12.6667 2.50004 11.9375C2.33337 11.2083 2.36462 10.4792 2.59379 9.75L3.93754 5.5625C4.12504 5 4.4115 4.5625 4.79691 4.25C5.18233 3.9375 5.66671 3.78125 6.25004 3.78125H23.625C24.1875 3.78125 24.6823 3.9375 25.1094 4.25C25.5365 4.5625 25.8438 4.98958 26.0313 5.53125L27.4063 9.75C27.6355 10.4792 27.6667 11.2292 27.5 12C27.3334 12.7708 26.9167 13.375 26.25 13.8125ZM17.8125 12.8437C18.4584 12.8437 18.9896 12.6615 19.4063 12.2969C19.823 11.9323 20 11.4792 19.9375 10.9375L19.0938 5.59375H15.9375V10.7812C15.9375 11.3229 16.1146 11.8021 16.4688 12.2187C16.823 12.6354 17.2709 12.8437 17.8125 12.8437ZM11.9688 12.8437C12.5521 12.8437 13.0521 12.6406 13.4688 12.2344C13.8855 11.8281 14.0938 11.3438 14.0938 10.7812V5.59375H10.9063L10.0625 10.9687C9.97921 11.5104 10.125 11.9583 10.5 12.3125C10.875 12.6667 11.3646 12.8437 11.9688 12.8437ZM6.25004 12.8437C6.75004 12.8437 7.18754 12.6667 7.56254 12.3125C7.93754 11.9583 8.15629 11.5312 8.21879 11.0312L9.03129 5.59375H6.25004C6.12504 5.59375 6.01566 5.625 5.92191 5.6875C5.82816 5.75 5.77087 5.84375 5.75004 5.96875L4.40629 10.1875C4.15629 10.875 4.22921 11.4896 4.62504 12.0312C5.02087 12.5729 5.56254 12.8437 6.25004 12.8437ZM23.7188 12.8437C24.3855 12.8437 24.9167 12.5885 25.3125 12.0781C25.7084 11.5677 25.8021 10.9375 25.5938 10.1875L24.2813 5.9375C24.2605 5.8125 24.2084 5.72396 24.125 5.67187C24.0417 5.61979 23.9271 5.59375 23.7813 5.59375H20.9688L21.75 11.0312C21.8125 11.5312 22.0261 11.9583 22.3907 12.3125C22.7552 12.6667 23.198 12.8437 23.7188 12.8437Z"
                  fill="#707070"
                />
              </svg>
            )}
            <input
              type="file"
              required
              id="logo-upload"
              className="hidden"
              onChange={handleLogoUpload}
            />
          </div>
        </div>
      </div>
      <div className="mt-20 px-6">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-3">
          <input
            id="storeName"
            name="storeName"
            type="text"
            placeholder="What's your store's name?"
            className="shadow appearance-none border rounded w-full py-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={storeName}
            onChange={handleStoreNameChange}
          />
          <textarea
            id="bio"
            name="bio"
            placeholder="Bio"
            className="shadow appearance-none border rounded w-full py-2 pb-9 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={bio}
            onChange={handleBioChange}
          />

          <div className="w-full absolute pb-2 bottom-6 px-4 left-1/2 transform -translate-x-1/2 translate-y-1/2  text-center">
            <button
              type="submit"
              className="w-full bg-black py-2 rounded-lg shadow-lg text-white"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Onboarding;

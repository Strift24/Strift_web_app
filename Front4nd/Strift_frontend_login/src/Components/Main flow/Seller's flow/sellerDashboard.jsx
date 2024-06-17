import React, { useState } from "react";

function SellerDashboard() {
  const [banner, setBanner] = useState(null);
  const [logo, setLogo] = useState(null);

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBanner(reader.result);
        uploadImage(file, "banner");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogo(reader.result);
        uploadImage(file, "logo");
      };
      reader.readAsDataURL(file);
    }
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
    <div className="h-full bg-white">
      <div
        className="relative h-[20vh] w-full bg-gray-400 flex items-center justify-center"
        onClick={() => document.getElementById("banner-upload").click()}
      >
        {banner ? (
          <>
          <img src={banner} alt="Banner" className="h-full w-full object-cover" />
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
          <p className="text-white">Click to upload banner</p>
        )}
        <input
          type="file"
          id="banner-upload"
          className="hidden"
          onChange={handleBannerUpload}
        />
      </div>
      <div
        className="relative bg-gray-200 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-lg shadow-gray w-24 h-24 object-cover flex items-center justify-center mt-8"
        onClick={() => document.getElementById("logo-upload").click()}
      >
        {logo ? (
           <>
           <img src={logo} alt="Logo" className="h-full w-full object-cover rounded-lg" />
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
          <p className="text-gray-500">Click to upload logo</p>
        )}
        <input
          type="file"
          id="logo-upload"
          className="hidden"
          onChange={handleLogoUpload}
        />
      </div>
    </div>
  );
}

export default SellerDashboard;

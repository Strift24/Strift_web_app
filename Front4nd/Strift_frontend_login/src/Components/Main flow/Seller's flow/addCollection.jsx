import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import plus from "../../../assets/SellerAssets/plus.png";
import c725b1eaf19e0f9d408d4fd1e3e3b5bd from "../../../assets/discover page/c725b1eaf19e0f9d408d4fd1e3e3b5bd.png";
import FormPropsDateTimePickers from "../../resusableComponents/FormPropsDateTimePickers";
import dayjs from "dayjs";


function AddCollection() {
  const navigate = useNavigate();
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const [collectionTiming, setCollectionTiming] = useState(dayjs());
  const [coverImage, setCoverImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const dummyProducts = [
    {
      id: 1,
      name: "T-Shirt",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/99a1/5406/8b53d2900d9edce24e8eefc62ae88f33?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2XJVW6c7chYQrv3OvDzWkUzsJgI3sSz1TTqRT03M6pI8vvoUXOxknbHMohqq~gpoInscsf5XALix29mqY-1T-e7983hSff5kyBjxrYxFd5Sn-xHbYhIu1Rrbm7DZboNYkLwb6~RDPhDI9AJfNPyffBTcA4ZK0py7QxlIUJw76baCQTTEEm40mlJ9sG7gEtUEXiDzapfVtIPElB4R8m5wSL8WfcLk2NuTRGqCrlHO0kh~BqKhbi8wpX0Jn3aW5vKvm0UtmtXLdZml0nKEaKcjyHHpARZ5mMV6ichBk7wn7VaeLFbLCqNtAmZM79lmksAqQXkEYofbFxtr6GGI3NCsg__",
    },
    { id: 2, name: "Jeans", imageUrl: c725b1eaf19e0f9d408d4fd1e3e3b5bd },
    { id: 3, name: "Sneakers", imageUrl: c725b1eaf19e0f9d408d4fd1e3e3b5bd },
    { id: 4, name: "Sneakers", imageUrl: c725b1eaf19e0f9d408d4fd1e3e3b5bd },
    // Add more products as needed
  ];
  const [products, setProducts] = useState(
    dummyProducts ? dummyProducts : null
  );
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleDateChange = (date) => {
    setCollectionTiming(date);
  };

  useEffect(() => {}, [dummyProducts]); //  Replace the dummy products with the actual added products

  const handleContinue = () => {
    if (!collectionName.trim()) {
      setErrorMessage("Please fill in all details");
      setShowError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // Stop shaking after 500ms

      // Set a timeout to hide the error message after 3 seconds
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      // Proceed with adding the category
      // Your logic to add the category goes here
      console.log(collectionTiming ,  selectedProducts);
      console.log("Collection added successfully");
    }
  };

  const handleCoverImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setCoverImage(null);
    }
    resetFileInput(event);
    // Reset the file input value
  };

  const resetFileInput = (event) => {
    event.target.value = null;
  };
  
  const removeCoverImage = () => {
    setCoverImage(null);
    // Optionally, make an API call to delete the image from the server
  };
  

  const toggleProductSelection = (productId) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  return (
    <div className="bg-white h-screen ">
      <div className="relative">
        <div className="z-[99999] items-center bg-white  h-[70px] flex fixed w-full top-0 left-0 p-6">
            <button
            onClick={() => navigate(-1)}
            className="">
              <svg
                className="font-bold"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="white"
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
          <div className="text-[30px] mx-auto font-medium">
            Create collection
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full relative mt-[83px] justify-center items-center px-6">
        <div className="pb-4 w-full">
          <input
            id="collectionName"
            name="collectionName"
            type="text"
            required
            placeholder="Collection name"
            className="shadow appearance-none border rounded-lg h-[56px] w-full py-2 px-3 text-gray-900 leading-tight focus:outline-yellow-400 focus:shadow-outline"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
            autoFocus
          />
        </div>
        <div className="pb-4 w-full">
          <textarea
            id="collectionDescription"
            name="collectionDescription"
            required
            placeholder="Collection description"
            className="shadow appearance-none border rounded-lg h-auto min-h-[106px] w-full text-wrap px-3 py-2 text-gray-900 leading-tight focus:outline-yellow-400 focus:shadow-outline"
            value={collectionDescription}
            onChange={(e) => setCollectionDescription(e.target.value)}
            autoFocus
          />
        </div>

        <div className="pb-4 w-full ">
          <FormPropsDateTimePickers
            value={collectionTiming}
            onChange={handleDateChange}
          />
        </div>
        <div className="text-[22px] pb-1 mr-auto font-medium text-[#464646]">
          Add cover photo
        </div>
        <div className="pb-4 w-full">
        <div
          className="flex items-center overflow-hidden relative justify-center h-[156px] w-[65%] rounded-[5px] bg-[#D9D9D9]"
          onClick={() =>
            !coverImage && document.getElementById("coverImage-upload").click()
          }
        >
          {coverImage ? (
            <>
              <img
                src={coverImage}
                alt="coverImagePreview"
                className="h-full w-full object-cover"
              />
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the file input
                  removeCoverImage();
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
                {/* <p className="text-black">Click to upload coverImage</p> */}
              </div>
            </>
          )}
          <input
            required
            type="file"
            id="coverImage-upload"
            className="hidden"
            onChange={handleCoverImageUpload}
          />
        </div>
        </div>

        <div className="text-[22px] mr-auto font-medium text-[#464646]">
          Add products
        </div>
        <div className="w-full mt-1 mb-4 relative rounded-md shadow-sm ">
          <div className="absolute bottom-[18px] left-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="shadow appearance-none border rounded-lg h-[56px] w-full py-2 pl-10 pr-3 text-gray-900 leading-tight focus:outline-yellow-400 focus:shadow-outline bg-[#F8F8F8]"
            placeholder="Search"
          />
        </div>
        <div className="w-full flex mb-[100px] mt-1 items-center justify-start">
          <div className="  w-full rounded-lg flex-wrap gap-2 mx-auto flex items-center  ">
            <div className="w-[48%] h-[250px] bg-[#D9D9D9] rounded-lg flex relative items-center justify-center">
              <label
                htmlFor="coverUpload"
                className="cursor-pointer flex flex-col items-center"
              >
                <button onClick={() => navigate("/label/addProduct")}>
                  <div className="flex flex-col items-center">
                    <img src={plus} alt="" />
                  </div>
                </button>
              </label>
            </div>

            {/* Display existing products */}
            {products.map((product) => (
              <div
                key={product.id}
                className={`w-[48%] h-[250px] border-[1.5px]  border-stone-600 items-center justify-center rounded-lg flex flex-col  relative cursor-pointer overflow-x-auto ${
                  selectedProducts.includes(product.id) ? "opacity-70" : ""
                }`}
                onClick={() => toggleProductSelection(product.id)}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="text-black">{product.name}</div>

                {selectedProducts.includes(product.id) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-70">
                    <svg
                      className="w-8 h-8 font-extrabold text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full fixed pb-2 bottom-6 px-4 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center">
          <div
            className={`
                 transition-opacity duration-300 ease-in-out
                 ${showError ? "opacity-100" : "opacity-0"}
                 text-red-500 mb-4 text-base font-medium fixed  bottom-12 px-4 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center
               `}
          >
            {errorMessage}
          </div>
          <button
            className={`w-full bg-black py-2 rounded-lg shadow-lg text-white ${
              isShaking ? "animate-shake" : ""
            }`}
            onClick={handleContinue}
          >
            Add collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCollection;

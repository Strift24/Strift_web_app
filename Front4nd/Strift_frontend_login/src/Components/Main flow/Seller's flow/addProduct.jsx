import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [inventory, setInventory] = useState("");
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (event) => {
    // setDisabled(images ? false : true);
    event.preventDefault();
    if (price < 0 && discountedPrice < 0) {
      return alert("Please enter a valid price !!");
    }
    if (images.length < 1) {
      return alert("Please add a picture !!");
    }
    // Handle form submission logic here
    console.log({
      productName,
      productDescription,
      price,
      discount,
      inventory,
      isOutOfStock,
      selectedSizes,
      images,
    });
  };

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const toggleSize = (size) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size]
    );
  };

  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const imageUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPrice(isNaN(value) ? "" : value);
  };

  const handleDiscountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setDiscount(isNaN(value) ? "" : value);
  };

  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  return (
    <div className="bg-black h-screen">
      <div>
        <div className="bg-white h-screen">
          <div className="relative h-[550px] bg-[#D9D9D9]">
            <div className="flex justify-between items-center h-[12%] p-6">
              <div>
                <Link to="/label/onBoarding">
                  <button className="">
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
              </div>
              <div></div>
            </div>
            <div className="flex items-center justify-center h-[88%] relative">
              <input
                type="file"
                id="imageUpload"
                required
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {images.length === 0 ? (
                <label
                  htmlFor="imageUpload"
                  className="flex gap-1 flex-col items-center justify-center cursor-pointer absolute inset-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <path
                      d="M20.8084 31.075H23.4668V23.5125H31.0751V20.8083H23.4668V12.925H20.8084V20.8083H12.9251V23.5125H20.8084V31.075ZM22.0001 40.15C19.4945 40.15 17.1418 39.6688 14.9418 38.7063C12.7418 37.7438 10.8244 36.4451 9.18968 34.8104C7.55496 33.1757 6.25635 31.2583 5.29385 29.0583C4.33135 26.8583 3.8501 24.5056 3.8501 22C3.8501 19.4945 4.33135 17.134 5.29385 14.9188C6.25635 12.7035 7.5626 10.7785 9.2126 9.14376C10.8626 7.50903 12.78 6.21806 14.9647 5.27084C17.1494 4.32362 19.4945 3.85001 22.0001 3.85001C24.5057 3.85001 26.8661 4.32362 29.0814 5.27084C31.2966 6.21806 33.2216 7.50903 34.8563 9.14376C36.4911 10.7785 37.782 12.7035 38.7293 14.9188C39.6765 17.134 40.1501 19.4945 40.1501 22C40.1501 24.5361 39.6765 26.8889 38.7293 29.0583C37.782 31.2278 36.4911 33.1375 34.8563 34.7875C33.2216 36.4375 31.2966 37.7438 29.0814 38.7063C26.8661 39.6688 24.5057 40.15 22.0001 40.15Z"
                      fill="#707070"
                    />
                  </svg>
                  <span className="text-[#707070]">Click to Add Pictures</span>
                </label>
              ) : (
                <div className="w-full h-full flex flex-row items-stretch overflow-x-auto snap-x snap-mandatory">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 h-full w-full relative snap-center"
                    >
                      <img
                        src={image}
                        alt={`Uploaded ${index}`}
                        className="h-full w-full object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 px-2 text-sm"
                      >
                        &#10006;
                      </button>
                    </div>
                  ))}
                  <div className="flex-shrink-0 h-full w-full flex items-center justify-center snap-center">
                    <label
                      htmlFor="imageUpload"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                     <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 31 31" fill="none">
<path d="M14.6603 21.8938H16.5332V16.5656H21.8937V14.6604H16.5332V9.10627H14.6603V14.6604H9.10615V16.5656H14.6603V21.8938ZM15.4999 28.2875C13.7346 28.2875 12.077 27.9485 10.527 27.2703C8.97698 26.5922 7.62612 25.6773 6.47438 24.5255C5.32265 23.3738 4.40771 22.0229 3.72959 20.4729C3.05147 18.9229 2.7124 17.2653 2.7124 15.5C2.7124 13.7347 3.05147 12.0717 3.72959 10.511C4.40771 8.9502 5.32803 7.59395 6.49053 6.44221C7.65303 5.29048 9.0039 4.38093 10.5431 3.71357C12.0824 3.04621 13.7346 2.71252 15.4999 2.71252C17.2652 2.71252 18.9282 3.04621 20.489 3.71357C22.0497 4.38093 23.406 5.29048 24.5577 6.44221C25.7094 7.59395 26.619 8.9502 27.2864 10.511C27.9537 12.0717 28.2874 13.7347 28.2874 15.5C28.2874 17.2868 27.9537 18.9445 27.2864 20.4729C26.619 22.0014 25.7094 23.3469 24.5577 24.5094C23.406 25.6719 22.0497 26.5922 20.489 27.2703C18.9282 27.9485 17.2652 28.2875 15.4999 28.2875Z" fill="#707070"/>
</svg></div>
                      <span className="text-[#707070] text-base mt-3 font-medium">
                        Click to Add More Pictures
                      </span>
                      <span className="text-gray-700 text-sm font-semibold mt-1">
                        {images.length} picture{images.length !== 1 ? "s" : ""}{" "}
                        added
                      </span>
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute bottom-[-20px] flex items-center justify-center w-[57px] h-[54px] bg-white rounded-lg right-3 object-cover shadow-gray flex-shrink-0">
              <img src="" alt="logo" />
              {/*  Here take the logo image from the backend */}
            </div>
          </div>
          <div className="flex flex-col justify-center relative">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <h2 className="text-gray-700 p-6 text-xl font-bold mb-4">
                Enter product information
              </h2>

              <div className="mb-4 px-6">
                <input
                  id="productName"
                  name="productName"
                  type="text"
                  required
                  placeholder="Product name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div className="flex flex-col justify-center gap-2 mb-4  px-6">
                <div className="pl-2 text-gray-600 font-medium">
                  Select sizes available
                </div>
                <div className="flex space-x-8 justify-center">
                  {sizes.map((size) => (
                    <div
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={` cursor-pointer ${
                        selectedSizes.includes(size)
                          ? "text-black font-[600] text-[18px]"
                          : "text-gray-500 font-[300] text-[18px] "
                      } `}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4 px-6">
                <textarea
                  id="productDescription"
                  required
                  name="productDescription"
                  placeholder="Product description"
                  className="shadow appearance-none border rounded w-full py-2 pb-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </div>

              <div className="mb-4 px-6">
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Price"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={price}
                  onChange={handlePriceChange}
                />
              </div>

              <div className="mb-4 px-6">
                <input
                  min="0"
                  id="discount"
                  name="discount"
                  type="number"
                  placeholder="Discount (optional)"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={discount}
                  onChange={handleDiscountChange}
                />
              </div>

              <div className="mb-4 px-6">
                <input
                  required
                  id="inventory"
                  name="inventory"
                  type="text"
                  placeholder="Inventory"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={inventory}
                  onChange={(e) => setInventory(e.target.value)}
                />
              </div>

              <div className="mb-[120px] px-6 flex justify-between items-center">
                <div className="text-base text-[#2B2B2BB0]">
                  Mark as sold if out of stock
                </div>
                <input
                  id="isOutOfStock"
                  name="isOutOfStock"
                  type="checkbox"
                  className="mr-2 leading-tight w-4"
                  checked={isOutOfStock}
                  onChange={(e) => setIsOutOfStock(e.target.checked)}
                />
              </div>

              <div className="w-full rounded-t-xl px-8 p-3 bg-[rgba(255, 255, 255, 0.40)] backdrop-blur-[32px] h-[95px]  bottom-0 flex items-center fixed justify-between ">
                <div className="pt-2 text-[23px] font-normal">
                  <div className="">₹ {discount >= 0 && discountedPrice}</div>
                  <div className="pl-0 text-[14px] line-through">₹ {price}</div>
                </div>
                <button
                  disabled={disabled}
                  className="flex bg-black w-32 h-12 gap-4 shadow-lg px-4 items-center p-2 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M6.2438 24.8625C5.73755 24.8625 5.29224 24.675 4.90786 24.3C4.52349 23.925 4.3313 23.475 4.3313 22.95V8.52187C4.3313 7.99687 4.52349 7.54687 4.90786 7.17187C5.29224 6.79687 5.73755 6.60937 6.2438 6.60937H9.1688V6.32812C9.1688 5.12812 9.59067 4.11093 10.4344 3.27656C11.2782 2.44218 12.3 2.02499 13.5 2.02499C14.7 2.02499 15.7219 2.44218 16.5657 3.27656C17.4094 4.11093 17.8313 5.12812 17.8313 6.32812V6.60937H20.7563C21.2813 6.60937 21.7313 6.79687 22.1063 7.17187C22.4813 7.54687 22.6688 7.99687 22.6688 8.52187V22.95C22.6688 23.475 22.4813 23.925 22.1063 24.3C21.7313 24.675 21.2813 24.8625 20.7563 24.8625H6.2438ZM10.125 11.8969C10.4063 11.8969 10.636 11.8078 10.8141 11.6297C10.9922 11.4516 11.0813 11.2219 11.0813 10.9406V8.52187H9.1688V10.9406C9.1688 11.2219 9.25786 11.4516 9.43599 11.6297C9.61411 11.8078 9.8438 11.8969 10.125 11.8969ZM11.0813 6.60937H15.9188V6.32812C15.9 5.65312 15.661 5.08593 15.2016 4.62656C14.7422 4.16718 14.175 3.93749 13.5 3.93749C12.825 3.93749 12.2579 4.16718 11.7985 4.62656C11.3391 5.08593 11.1 5.65312 11.0813 6.32812V6.60937ZM16.875 11.8969C17.1563 11.8969 17.386 11.8078 17.5641 11.6297C17.7422 11.4516 17.8313 11.2219 17.8313 10.9406V8.52187H15.9188V10.9406C15.9188 11.2219 16.0079 11.4516 16.186 11.6297C16.3641 11.8078 16.5938 11.8969 16.875 11.8969Z"
                      fill="white"
                    />
                  </svg>
                  <h2 className="text-white text-lg font-medium">Save</h2>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

{
  /* <div className="inline-block w-full relative">
                    <label
                      htmlFor="imageUpload"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                        <span className="text-3xl text-gray-600">+</span>
                      </div>
                      <span className="text-[#707070] text-sm">
                        Click to Add More Pictures
                      </span>
                      <span className="text-gray-700 text-sm mt-1">
                        {images.length} picture{images.length !== 1 ? "s" : ""}{" "}
                        added
                      </span>
                    </label>
                  </div> */
}

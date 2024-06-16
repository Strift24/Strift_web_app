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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      productName,
      productDescription,
      price,
      discount,
      inventory,
      isOutOfStock,
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

  function WelcomeModal({ onClose }) {
    return (
      <div className="fixed inset-0 gap-5
       flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="text-white text-xl  font-semibold" >Welcome To [ strift ]</div>
        <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center">
          <p className="text-center text-xl mb-4">Now let's add some products 😎 </p>
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Ready!!
          </button>
        </div>
      </div>
    );
  }

  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const handleCloseModal = () => {
    setShowWelcomeModal(false);
  };

  return (
    <div className="bg-black h-screen">
      {showWelcomeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50">
          <WelcomeModal onClose={handleCloseModal} />
        </div>
      )}
      <div className={showWelcomeModal ? 'hidden' : 'block'}>
        <div className="bg-white h-screen">
          <div className="relative h-[550px] bg-[#D9D9D9]">
            <div className="flex justify-between items-center h-[17%] p-6">
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
            <div className="flex flex-col items-center justify-center h-[77%]">
              <input
                type="file"
                id="imageUpload"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label
                htmlFor="imageUpload"
                className="flex gap-1 flex-col items-center justify-center cursor-pointer"
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

                {images.length < 1 ? (
                  <span className="text-[#707070]">Click to Add Pictures</span>
                ) : (
                  <span className="text-[#707070]">
                    Click to Add More Pictures
                  </span>
                )}
              </label>
              {images.length > 0 && (
                <div className="mt-4 flex flex-col items-center justify-center overflow-x-auto">
                  <span className="text-gray-700">
                    {images.length} pictures added
                  </span>
                  <div className="flex overflow-auto w-full gap-2 mt-2">
                    {images.map((image, index) => (
                      <div key={index} className="relative flex-shrink-0">
                        <img
                          src={image}
                          alt={`Uploaded ${index}`}
                          className="h-[280px]  object-cover rounded-lg mb-2"
                        />
                        <button
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-0 right-0 bg-red-600 text-white rounded-full mr-1 mt-1 p-1 px-2 text-sm"
                        >
                          &#10006;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="absolute bottom-[-20px] flex items-center justify-center w-[57px] h-[54px] bg-white rounded-lg right-3 object-cover shadow-gray flex-shrink-0">
              <img src="" alt="logo" />
              {/*  Here take the logo image from the backend */}
            </div>
          </div>
          <div className="p-4 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg p-4">
              <h2 className="text-gray-700 text-xl font-bold mb-4">
                Enter product information
              </h2>

              <div className="mb-4">
                <input
                  id="productName"
                  name="productName"
                  type="text"
                  placeholder="Product name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div className="flex flex-col justify-center gap-2 mb-4 ">
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

              <div className="mb-4">
                <textarea
                  id="productDescription"
                  name="productDescription"
                  placeholder="Product description"
                  className="shadow appearance-none border rounded w-full py-2 pb-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  id="discount"
                  name="discount"
                  type="text"
                  placeholder="Discount (optional)"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  id="inventory"
                  name="inventory"
                  type="text"
                  placeholder="Inventory"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={inventory}
                  onChange={(e) => setInventory(e.target.value)}
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
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

              <div className="flex items-center justify-center mt-6 mb-6">
                <button
                  type="submit"
                  className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
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

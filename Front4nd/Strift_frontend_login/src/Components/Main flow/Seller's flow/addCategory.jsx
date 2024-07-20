import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import plus from "../../../assets/SellerAssets/plus.png";
import c725b1eaf19e0f9d408d4fd1e3e3b5bd from "../../../assets/discover page/c725b1eaf19e0f9d408d4fd1e3e3b5bd.png";

function AddCategory() {
  const navigate = useNavigate();
  const [categoryName, SetCategoryName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  // Adding dummy products currently to display
  const products = [
    {
      id: 116,
      name: "T-Shirt",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/99a1/5406/8b53d2900d9edce24e8eefc62ae88f33?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2XJVW6c7chYQrv3OvDzWkUzsJgI3sSz1TTqRT03M6pI8vvoUXOxknbHMohqq~gpoInscsf5XALix29mqY-1T-e7983hSff5kyBjxrYxFd5Sn-xHbYhIu1Rrbm7DZboNYkLwb6~RDPhDI9AJfNPyffBTcA4ZK0py7QxlIUJw76baCQTTEEm40mlJ9sG7gEtUEXiDzapfVtIPElB4R8m5wSL8WfcLk2NuTRGqCrlHO0kh~BqKhbi8wpX0Jn3aW5vKvm0UtmtXLdZml0nKEaKcjyHHpARZ5mMV6ichBk7wn7VaeLFbLCqNtAmZM79lmksAqQXkEYofbFxtr6GGI3NCsg__",
    },
    { id: 2, name: "Jeans", imageUrl: c725b1eaf19e0f9d408d4fd1e3e3b5bd },
    { id: 333, name: "Sneakers", imageUrl: c725b1eaf19e0f9d408d4fd1e3e3b5bd },
    { id: 964, name: "Sneakers", imageUrl: c725b1eaf19e0f9d408d4fd1e3e3b5bd },
  ];

  // const [products, setProducts] = useState(
  //   dummyProducts ? dummyProducts : null
  // );

  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {}, [products]); //  Replace the dummy products with the actual added products

  const handleContinue = () => {
    if (!categoryName.trim()) {
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

      console.log("Category added successfully");
      console.log(categoryName);
      console.log(selectedProducts);
    }
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
          <Link to="/label/onBoarding">
            <button className="">
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
          </Link>
          <div className="text-[30px] mx-auto font-medium">Create category</div>
        </div>
      </div>
      <div className="flex flex-col w-full relative mt-[83px] justify-center items-center px-6">
        <div className="pb-4 w-full">
          <input
            id="categoryName"
            name="categoryName"
            type="text"
            required
            placeholder="Category name"
            className="shadow appearance-none border rounded-lg h-[56px] w-full py-2 px-3 text-gray-900 leading-tight focus:outline-yellow-400 focus:shadow-outline"
            value={categoryName}
            onChange={(e) => SetCategoryName(e.target.value)}
            autoFocus
          />
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
                <button
                  onClick={() => navigate("/label/addProduct")}     
                  >
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
            Add category
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;

import React, { useState, useRef, useEffect } from "react";
import { Link , useNavigate  } from "react-router-dom";

function AddProduct() {

  const navigate = useNavigate()
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [inventory, setInventory] = useState("");
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [selected, setSelected] = useState({ categories: [], tags: [] });

  const handleSubmit = (event) => {
    console.log("hello");
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
      coverImage,
      selected,
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

  //////////////////////////////////////////////////////////////////////

  //                    IMAGES UPLOAD FUNCTIONS AND STATES

  const handleImageUpload = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    const imageUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    // Display images immediately
    setImages((prevImages) => [...prevImages, ...imageUrls]);

    // Upload files and get permanent URLs
    const permanentUrls = await Promise.all(selectedFiles.map(uploadFile));

    // Replace temporary URLs with permanent ones
    setImages((prevImages) =>
      prevImages.map((url, index) =>
        imageUrls.includes(url) ? permanentUrls[index] : url
      )
    );

    // Revoke temporary URLs to free memory
    imageUrls.forEach(URL.revokeObjectURL);
  };

  const uploadFile = async (file) => {
    n;
    // Implement your file upload logic here
    // Return the permanent URL from your server or cloud storage
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleCoverUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImage(reader.result);
        // Here you can also call your upload function to upload the image to the backend
        // uploadCover(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeCoverImage = () => {
    setCoverImage(null);
  };

  ////////////////////////////////////////////////////////////////////////////////////

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPrice(isNaN(value) ? "" : value);
  };

  const handleDiscountChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (isNaN(value)) {
      value = null;
    } else if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }
    // Update the state with the valid value
    setDiscount(value);
  };

  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  ////////////////////////////////////////////////////////////////////////////////////////

  /////////////

  // const [categories, setCategories] = useState([
  //   "Men",
  //   "Tshirt",
  //   "Shirt",
  //   "Bottoms",
  //   "Women",
  // ]);
  // const [tags, setTags] = useState([
  //   "Streetwear",
  //   "Tan",
  //   "Beige",
  //   "Jacket",
  //   "Vintage",
  // ]);
  // const [selectedCategories, setSelectedCategories] = useState([]);
  // const [selectedTags, setSelectedTags] = useState([]);
  // const [newCategory, setNewCategory] = useState("");
  // const [newTag, setNewTag] = useState("");
  // const [isAddingCategory, setIsAddingCategory] = useState(false);
  // const [isAddingTag, setIsAddingTag] = useState(false);

  // const toggleCategory = (category) => {
  //   setSelectedCategories((prev) =>
  //     prev.includes(category)
  //       ? prev.filter((c) => c !== category)
  //       : [...prev, category]
  //   );
  // };

  // const toggleTag = (tag) => {
  //   setSelectedTags((prev) =>
  //     prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
  //   );
  // };

  // const addNewCategory = () => {
  //   if (newCategory) {
  //     setCategories((prev) => [...prev, newCategory]);
  //     setSelectedCategories((prev) => [...prev, newCategory]);
  //     setNewCategory("");
  //     setIsAddingCategory(false);
  //   }
  // };

  // const addNewTag = () => {
  //   if (newTag) {
  //     setTags((prev) => [...prev, newTag]);
  //     setSelectedTags((prev) => [...prev, newTag]);
  //     setNewTag("");
  //     setIsAddingTag(false);
  //   }
  // };

  // const categoryInputRef = useRef(null);
  // const tagInputRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       isAddingCategory &&
  //       categoryInputRef.current &&
  //       !categoryInputRef.current.contains(event.target)
  //     ) {
  //       setIsAddingCategory(false);
  //       setNewCategory("");
  //     }
  //     if (
  //       isAddingTag &&
  //       inputRefs.current &&
  //       !inputRefs.current.contains(event.target)
  //     ) {
  //       setIsAddingTag(false);
  //       setNewTag("");
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isAddingCategory, isAddingTag]);

  // CATEGORIES AND TAGS

  //////////////////////////////////////////////////////////////////////////////

  const Item = ({ id, name, isSelected, onToggle, type }) => (
    <div
      className={`px-4 py-2 border ${
        type === "tag" ? "rounded-full" : "rounded-md"
      } cursor-pointer transition-colors ${
        isSelected
          ? "bg-gray-500 text-white"
          : type === "tag"
          ? "bg-white"
          : "bg-white"
      }`}
      onClick={() => onToggle(id)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && onToggle(id)}
      aria-pressed={isSelected}
    >
      {name}
    </div>
  );

  const [items, setItems] = useState({
    categories: [
      { id: "1", name: "Men" },
      { id: "2", name: "Tshirt" },
      { id: "3", name: "Shirt" },
      { id: "4", name: "Bottoms" },
      { id: "5", name: "Women" },
    ],
    tags: [
      { id: "1", name: "Streetwear" },
      { id: "2", name: "Tan" },
      { id: "3", name: "Beige" },
      { id: "4", name: "Jacket" },
      { id: "5", name: "Vintage" },
    ],
  });

  const [newItem, setNewItem] = useState({ categories: "", tags: "" });
  const [isAdding, setIsAdding] = useState({ categories: false, tags: false });

  const inputRefs = {
    categories: useRef(null),
    tags: useRef(null),
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      ["categories", "tags"].forEach((type) => {
        if (
          isAdding[type] &&
          inputRefs[type].current &&
          !inputRefs[type].current.contains(event.target)
        ) {
          setIsAdding((prev) => ({ ...prev, [type]: false }));
          setNewItem((prev) => ({ ...prev, [type]: "" }));
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isAdding]);

  const toggleItem = (type, name) => {
    setSelected((prev) => ({
      ...prev,
      [type]: prev[type].includes(name)
        ? prev[type].filter((item) => item !== name)
        : [...prev[type], name],
    }));
  };

  const addNewItem = (type) => {
    if (newItem[type].trim()) {
      const newName = newItem[type].trim();
      setItems((prev) => ({
        ...prev,
        [type]: [...prev[type], { id: Date.now().toString(), name: newName }],
      }));
      setSelected((prev) => ({
        ...prev,
        [type]: [...prev[type], newName],
      }));
      setNewItem((prev) => ({ ...prev, [type]: "" }));
      setIsAdding((prev) => ({ ...prev, [type]: false }));
    }
  };

  const renderSection = (type, title) => (
    <>
      <h3 className="text-xl text-[#464646] font-medium mb-3 mt-6">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {!isAdding[type] ? (
          <div
            className={`px-4 py-2 border ${
              type === "tags" ? "rounded-md" : "rounded-md"
            } cursor-pointer bg-gray-200 shadow-md`}
            onClick={() => setIsAdding((prev) => ({ ...prev, [type]: true }))}
            role="button"
            tabIndex={0}
            onKeyPress={(e) =>
              e.key === "Enter" &&
              setIsAdding((prev) => ({ ...prev, [type]: true }))
            }
          >
            + New
          </div>
        ) : (
          <div ref={inputRefs[type]}>
            <input
              type="text"
              value={newItem[type]}
              onChange={(e) =>
                setNewItem((prev) => ({ ...prev, [type]: e.target.value }))
              }
              onKeyPress={(e) => e.key === "Enter" && addNewItem(type)}
              className={`px-4 py-2 border ${
                type === "tags" ? "rounded-full" : "rounded-md"
              }`}
              autoFocus
            />
          </div>
        )}
        {items[type].map((item) => (
          <Item
            key={item.id}
            {...item}
            isSelected={selected[type].includes(item.name)}
            onToggle={() => toggleItem(type, item.name)}
            type={type === "tags" ? "tag" : "category"}
          />
        ))}
      </div>
    </>
  );

  ////////////////////////////////////////////////

  return (
    
    <div className="bg-white h-screen">
      <div className="relative h-[550px] bg-[#D9D9D9]">
        {/* ////// */}
        <div className="flex z-[99999] justify-between items-center text-white fixed top-0 left-0 p-6">
          {/* <Link to="/label/onBoarding"> */}

            <button
             onClick={() => navigate(-1)}
            >
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
          {/* </Link> */}
        </div>
        <div className="flex items-center justify-center h-full relative">
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
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 31 31"
                      fill="none"
                    >
                      <path
                        d="M14.6603 21.8938H16.5332V16.5656H21.8937V14.6604H16.5332V9.10627H14.6603V14.6604H9.10615V16.5656H14.6603V21.8938ZM15.4999 28.2875C13.7346 28.2875 12.077 27.9485 10.527 27.2703C8.97698 26.5922 7.62612 25.6773 6.47438 24.5255C5.32265 23.3738 4.40771 22.0229 3.72959 20.4729C3.05147 18.9229 2.7124 17.2653 2.7124 15.5C2.7124 13.7347 3.05147 12.0717 3.72959 10.511C4.40771 8.9502 5.32803 7.59395 6.49053 6.44221C7.65303 5.29048 9.0039 4.38093 10.5431 3.71357C12.0824 3.04621 13.7346 2.71252 15.4999 2.71252C17.2652 2.71252 18.9282 3.04621 20.489 3.71357C22.0497 4.38093 23.406 5.29048 24.5577 6.44221C25.7094 7.59395 26.619 8.9502 27.2864 10.511C27.9537 12.0717 28.2874 13.7347 28.2874 15.5C28.2874 17.2868 27.9537 18.9445 27.2864 20.4729C26.619 22.0014 25.7094 23.3469 24.5577 24.5094C23.406 25.6719 22.0497 26.5922 20.489 27.2703C18.9282 27.9485 17.2652 28.2875 15.4999 28.2875Z"
                        fill="#707070"
                      />
                    </svg>
                  </div>
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
          <h2 className="text-[#464646] px-6 mt-6 text-xl font-medium mb-4">
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
              autoFocus
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
              max="100"
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

          <div className="mb-4 px-6 flex justify-between items-center">
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

          <div className="mb-4  px-6 ">
            <div className="w-full ">
              <div className="mb-3 text-xl text-[#464646] font-medium">
                Add cover photo
              </div>

              <div className="w-[50%] h-[250px] bg-[#D9D9D9] rounded-lg flex items-center justify-center relative">
                {coverImage ? (
                  <div className="relative w-full h-full">
                    <img
                      src={coverImage}
                      alt="Cover"
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <button
                      onClick={removeCoverImage}
                      className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 px-2 text-sm"
                    >
                      &#10006;
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="coverUpload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <input
                      type="file"
                      id="coverUpload"
                      accept="image/*"
                      onChange={handleCoverUpload}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                      >
                        <path
                          d="M12.6603 19.8938H14.5332V14.5656H19.8937V12.6604H14.5332V7.10627H12.6603V12.6604H7.10615V14.5656H12.6603V19.8938ZM13.4999 26.2875C11.7346 26.2875 10.077 25.9485 8.52699 25.2703C6.97698 24.5922 5.62612 23.6773 4.47438 22.5255C3.32265 21.3738 2.40771 20.0229 1.72959 18.4729C1.05147 16.9229 0.712402 15.2653 0.712402 13.5C0.712402 11.7347 1.05147 10.0717 1.72959 8.51096C2.40771 6.9502 3.32803 5.59395 4.49053 4.44221C5.65303 3.29048 7.0039 2.38093 8.54313 1.71357C10.0824 1.04621 11.7346 0.712524 13.4999 0.712524C15.2652 0.712524 16.9282 1.04621 18.489 1.71357C20.0497 2.38093 21.406 3.29048 22.5577 4.44221C23.7094 5.59395 24.619 6.9502 25.2864 8.51096C25.9537 10.0717 26.2874 11.7347 26.2874 13.5C26.2874 15.2868 25.9537 16.9445 25.2864 18.4729C24.619 20.0014 23.7094 21.3469 22.5577 22.5094C21.406 23.6719 20.0497 24.5922 18.489 25.2703C16.9282 25.9485 15.2652 26.2875 13.4999 26.2875Z"
                          fill="#707070"
                        />
                      </svg>
                    </div>
                  </label>
                )}
              </div>
            </div>
          </div>

          <div className="px-6 mb-[140px]">
            {/* <h3 className="text-lg font-semibold mb-2">
                  Add to categories
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className={`px-4 py-2 border rounded-md cursor-pointer transition-colors 
                        ${ selectedCategories.includes(category)
                          ? "bg-gray-600 text-white"
                          : "bg-white"
                      }`}

                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                    </div>
                  ))}
                  {!isAddingCategory ? (
                    <div
                      className="px-4 py-2 border rounded-md cursor-pointer bg-gray-100"
                      onClick={() => setIsAddingCategory(true)}
                    >
                      + New
                    </div>
                  ) : (
                    <div ref={categoryInputRef}>
                      <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && addNewCategory()
                        }
                        className="px-4 py-2 border rounded-md"
                        autoFocus
                      />
                    </div>
                  )}
                </div>
                {isAddingCategory && (
                  <button
                    onClick={addNewCategory}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Add
                  </button>
                )}

                <h3 className="text-lg font-semibold mb-2 mt-6">Add tags</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {!isAddingTag ? (
                    <div
                      className="px-4 py-2 border rounded-full cursor-pointer bg-gray-100"
                      onClick={() => setIsAddingTag(true)}
                    >
                      + New
                    </div>
                  ) : (
                    <div ref={tagInputRef}>
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addNewTag()}
                        className="px-4 py-2 border rounded-full"
                        autoFocus
                      />
                    </div>
                  )}
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className={`px-4 py-2 border rounded-full cursor-pointer transition-colors ${
                        selectedTags.includes(tag)
                          ? "bg-gray-600 text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                {isAddingTag && (
                  <button
                    onClick={addNewTag}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Add
                  </button>
                )} */}

            {renderSection("categories", "Add to categories")}
            {renderSection("tags", "Add tags")}
          </div>

          <div className="w-full rounded-t-xl px-8 p-3 bg-[rgba(255, 255, 255, 0.40)] backdrop-blur-[32px] h-[95px]  bottom-0 flex items-center fixed justify-between ">
            <div className="pt-2 text-[23px] font-normal">
              <div className="font-semibold">
                ₹ {discount >= 0 && discountedPrice}
              </div>
              {discount > 0 ? (
                <div className=" text-[14px] font-medium line-through">
                  ₹ {price}
                </div>
              ) : null}
            </div>
            <button className="flex bg-black w-32 h-12 gap-4 shadow-lg px-4 justify-center items-center p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="white"
              >
                <path
                  d="M14.6603 21.8938H16.5332V16.5656H21.8937V14.6604H16.5332V9.10627H14.6603V14.6604H9.10615V16.5656H14.6603V21.8938ZM15.4999 28.2875C13.7346 28.2875 12.077 27.9485 10.527 27.2703C8.97698 26.5922 7.62612 25.6773 6.47438 24.5255C5.32265 23.3738 4.40771 22.0229 3.72959 20.4729C3.05147 18.9229 2.7124 17.2653 2.7124 15.5C2.7124 13.7347 3.05147 12.0717 3.72959 10.511C4.40771 8.9502 5.32803 7.59395 6.49053 6.44221C7.65303 5.29048 9.0039 4.38093 10.5431 3.71357C12.0824 3.04621 13.7346 2.71252 15.4999 2.71252C17.2652 2.71252 18.9282 3.04621 20.489 3.71357C22.0497 4.38093 23.406 5.29048 24.5577 6.44221C25.7094 7.59395 26.619 8.9502 27.2864 10.511C27.9537 12.0717 28.2874 13.7347 28.2874 15.5C28.2874 17.2868 27.9537 18.9445 27.2864 20.4729C26.619 22.0014 25.7094 23.3469 24.5577 24.5094C23.406 25.6719 22.0497 26.5922 20.489 27.2703C18.9282 27.9485 17.2652 28.2875 15.4999 28.2875Z"
                  fill="#11111"
                />
              </svg>
              <h2 className="text-white text-lg font-medium">Save</h2>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

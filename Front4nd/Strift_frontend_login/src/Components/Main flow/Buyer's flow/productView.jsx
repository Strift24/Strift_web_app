import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReviewList from "./reviewList";
import WriteReview from "./writeReview";
import { dummyReviews } from "./dummyReviews";

function ProductView() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const [reviews, setReviews] = useState(dummyReviews);
  //   const [selected, setSelected] = useState({ categories: [], tags: [] });

  const productData = {
    images: [
      "https://s3-alpha-sig.figma.com/img/75b6/a434/64cf36e531ce09eefdff356396bd0145?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNjjMvAOsKKFGLz7vkX9CdNqTG4pN-h-9~fGsDbn12NIsqOVW9aUuUsVLtrJKDv801yygUh1QBoWmeaHPYhcsKbLhLv~Ncgq10PkHkG9NkI-xDZ3NEokwGEWcGk-6lrQNMFOCmjzEIzqDXbYypujMB-p1cj9~p5scf3uvVe5NrItVxMZQ~n4TzjI-mHAAadwk0sDhUVgo1Pu5lIIfgbXBX5gH2G~ty3vuqU5jF3SfbMYN8NwAHu2dHEQMjMwkTC7LHLiVY8-m1fklV~ZCtV0rUT3GcDiMNjoqnM9BxqWuR5p9607Jnl6pXX20Vv0OLyvwA~u0h0mqF30hhk6WSQuMw__",
      "https://s3-alpha-sig.figma.com/img/75b6/a434/64cf36e531ce09eefdff356396bd0145?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNjjMvAOsKKFGLz7vkX9CdNqTG4pN-h-9~fGsDbn12NIsqOVW9aUuUsVLtrJKDv801yygUh1QBoWmeaHPYhcsKbLhLv~Ncgq10PkHkG9NkI-xDZ3NEokwGEWcGk-6lrQNMFOCmjzEIzqDXbYypujMB-p1cj9~p5scf3uvVe5NrItVxMZQ~n4TzjI-mHAAadwk0sDhUVgo1Pu5lIIfgbXBX5gH2G~ty3vuqU5jF3SfbMYN8NwAHu2dHEQMjMwkTC7LHLiVY8-m1fklV~ZCtV0rUT3GcDiMNjoqnM9BxqWuR5p9607Jnl6pXX20Vv0OLyvwA~u0h0mqF30hhk6WSQuMw__",
      "https://s3-alpha-sig.figma.com/img/75b6/a434/64cf36e531ce09eefdff356396bd0145?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNjjMvAOsKKFGLz7vkX9CdNqTG4pN-h-9~fGsDbn12NIsqOVW9aUuUsVLtrJKDv801yygUh1QBoWmeaHPYhcsKbLhLv~Ncgq10PkHkG9NkI-xDZ3NEokwGEWcGk-6lrQNMFOCmjzEIzqDXbYypujMB-p1cj9~p5scf3uvVe5NrItVxMZQ~n4TzjI-mHAAadwk0sDhUVgo1Pu5lIIfgbXBX5gH2G~ty3vuqU5jF3SfbMYN8NwAHu2dHEQMjMwkTC7LHLiVY8-m1fklV~ZCtV0rUT3GcDiMNjoqnM9BxqWuR5p9607Jnl6pXX20Vv0OLyvwA~u0h0mqF30hhk6WSQuMw__",
    ],
    logo: "https://s3-alpha-sig.figma.com/img/75b6/a434/64cf36e531ce09eefdff356396bd0145?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNjjMvAOsKKFGLz7vkX9CdNqTG4pN-h-9~fGsDbn12NIsqOVW9aUuUsVLtrJKDv801yygUh1QBoWmeaHPYhcsKbLhLv~Ncgq10PkHkG9NkI-xDZ3NEokwGEWcGk-6lrQNMFOCmjzEIzqDXbYypujMB-p1cj9~p5scf3uvVe5NrItVxMZQ~n4TzjI-mHAAadwk0sDhUVgo1Pu5lIIfgbXBX5gH2G~ty3vuqU5jF3SfbMYN8NwAHu2dHEQMjMwkTC7LHLiVY8-m1fklV~ZCtV0rUT3GcDiMNjoqnM9BxqWuR5p9607Jnl6pXX20Vv0OLyvwA~u0h0mqF30hhk6WSQuMw__",
    storeName: "blurng",
    productName: "UNCONDITIONAL Tee",
    description: `This tee has pink colour print on the back says "UNCONDITIONAL",

      - 100% cotton
      - Weight - 230GSM
      - Screen+Puff print,
      - Machine Reverse wash`,
    price: 899,
    discount: 10,
    comments: [],
    rating: 3.9,
    sizesAvailable: ["S", "M", "L", "XL"],
  };
  const discountedPrice =
    productData.price -
    (productData.discount > 0
      ? (productData.price * productData.discount) / 100
      : 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(
      productData.productName,
      selectedSize ,
      discountedPrice
      //   selectedSize,
    );
  };

  const toggleSize = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const handleNewReview = (newReview) => {
    const reviewToAdd = {
      id: reviews.length + 1,
      userName: "Current User",
      userImage: "https://randomuser.me/api/portraits/lego/1.jpg",
      ...newReview,
      timestamp: new Date(),
    };
    setReviews([reviewToAdd, ...reviews]);
  };

  //   const toggleItem = (type, name) => {
  //     setSelected((prev) => ({
  //       ...prev,
  //       [type]: prev[type].includes(name)
  //         ? prev[type].filter((item) => item !== name)
  //         : [...prev[type], name],
  //     }));
  //   };

  ////////////////////////////////////////////////

  return (
    <div className="bg-white h-screen">
      <div className="relative h-[550px] bg-[#D9D9D9]">
        {/* ////// */}
        <div className="flex z-[99999] justify-between items-center text-white fixed top-0 left-0 p-6">
          {/* <Link to="/label/onBoarding"> */}

          <button onClick={() => navigate(-1)}>
            <svg
              className="font-bold"
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
        <div className="flex items-center justify-center h-full relative">
          <div className="w-full h-full flex flex-row items-stretch overflow-x-auto snap-x snap-mandatory">
            {productData.images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-full w-full relative snap-center"
              >
                <img
                  src={image}
                  alt={index}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-[-20px] flex items-center justify-center w-[57px] h-[54px] bg-white rounded-lg right-3 object-cover shadow-gray flex-shrink-0">
            <img
              className="object-cover rounded-lg"
              src={productData.logo}
              alt="logo"
            />
            {/*  Here take the logo image from the backend */}
          </div>
        </div>
        <div className="flex flex-col justify-center relative">
          <div className="w-full max-w-lg">
            <div className="px-6">
              <div className=" text-[27px] w-full pt-4 px-1 pb-1 text-black font-[500] leading-[-0.165px]">
                {productData.productName}
              </div>
            </div>
            <div className=" px-6">
              <div className="text-[20px] w-full py-2 px-1 text-black font-[500] leading-[-0.165px]">
                ₹ {productData.price}
              </div>
            </div>
            <h1 className="px-6 text-black text-[18px] font-medium">
              Choose your size:
            </h1>
            <div className="flex flex-col justify-center gap-2 py-2 text-black px-6">
              <div className="flex space-x-8 justify-start px-1">
                {productData.sizesAvailable.map((size) => (
                  <div
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`cursor-pointer ${
                      selectedSize === size
                        ? "text-black font-[600] text-[18px]"
                        : "text-gray-600 font-[400] text-[18px]"
                    }`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{ whiteSpace: "pre-line" }}
              className=" px-6 shadow appearance-none w-full font-[500]  text-black py-4 pb-6 leading-tight"
            >
              {productData.description}
            </div>
            <div className=" px-6 appearance-non w-full h-1 py-1"></div>

            <div className="mb-4 flex w-full justify-between px-6 items-center">
              <div className="text-[23px] leading-[-0.165px] font-[500]">
                Review & Ratings
              </div>
              {productData.rating == null ? (
                <span className="text-[18px] text-black font-medium">
                  Not rated
                </span>
              ) : (
                <div className="flex gap-2 justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M8.99977 20.2501L13.5 16.8191L18.0002 20.2501L16.2283 14.7097L20.7279 11.5035H15.2435L13.5 5.76597L11.7281 11.5035H6.24374L10.744 14.7097L8.99977 20.2501ZM13.5 24.9468C11.925 24.9468 10.4438 24.6468 9.05647 24.047C7.66867 23.4471 6.45457 22.6268 5.41417 21.5859C4.37332 20.5455 3.55297 19.3314 2.95312 17.9436C2.35327 16.5563 2.05334 15.0751 2.05334 13.5001C2.05334 11.9062 2.35327 10.4156 2.95312 9.02824C3.55297 7.64089 4.37332 6.43152 5.41417 5.40012C6.45457 4.36872 7.66867 3.55309 9.05647 2.95324C10.4438 2.35339 11.925 2.05347 13.5 2.05347C15.0939 2.05347 16.5845 2.35339 17.9719 2.95324C19.3592 3.55309 20.5686 4.36872 21.6 5.40012C22.6314 6.43152 23.447 7.64089 24.0469 9.02824C24.6467 10.4156 24.9466 11.9062 24.9466 13.5001C24.9466 15.0751 24.6467 16.5563 24.0469 17.9436C23.447 19.3314 22.6314 20.5455 21.6 21.5859C20.5686 22.6268 19.3592 23.4471 17.9719 24.047C16.5845 24.6468 15.0939 24.9468 13.5 24.9468Z"
                      fill="#FFA600"
                    />
                  </svg>
                  <div className="text-[40px] font-[300] leading-[-0.165px]">
                    {productData.rating}
                  </div>
                </div>
              )}
            </div>

            <div className=" mb-4 px-6">
              <WriteReview onSubmit={handleNewReview} />
            </div>
            <div className="mb-[100px]">
              <ReviewList reviews={reviews} />
            </div>

            {/* Buying button */}

            {selectedSize ? (
              <div className="w-full rounded-t-xl px-8 p-3 bg-[rgba(255, 255, 255, 0.40)] backdrop-blur-[32px] h-[95px]  bottom-0 flex items-center fixed justify-between ">
                <div className="pt-2 text-[23px] font-normal">
                  <div className="font-semibold">₹ {discountedPrice}</div>
                  {productData.discount > 0 ? (
                    <div className=" text-[14px] font-medium line-through">
                      ₹ {productData.price}
                    </div>
                  ) : null}
                </div>
                <button
                  onClick={handleSubmit}
                  className="flex bg-black w-32 h-12 gap-4 shadow-lg px-4 justify-center items-center p-2 rounded-lg"
                >
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
                  <h2 className="text-white text-lg font-medium">Add</h2>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductView;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Store from "./store";
import c725b1eaf19e0f9d408d4fd1e3e3b5bd from '../../assets/discover page/c725b1eaf19e0f9d408d4fd1e3e3b5bd.png'
import search from '../../assets/discover page/search.png'



function Discover() {
  const navigate = useNavigate();

  //For seaching
  const [searching, setSearching] = useState(false);

  const handleSearchClick = () => {
    setSearching(true);
  };

  const handleSearchClose = () => {
    setSearching(false);
  };

  //For selecting stores

  const [selectedStores, setSelectedStores] = useState([]);

  const storesData = [
    {
      id: "jaywalkin",
      name: "Jaywalking IN",
      logo: c725b1eaf19e0f9d408d4fd1e3e3b5bd,
      rating: 4.9,
      category: "Streetwear",
      images: [
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
       
      ],
    },
    {
      id: "bluorng",
      name: "bluorng",
      logo: c725b1eaf19e0f9d408d4fd1e3e3b5bd,

      rating: 4.4,
      category: "High Fashion",
      images: [
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
       
      ],
    },
    {
      id: "Evergreen Thrift",
      name: "Evergreen Thrift",
      logo: c725b1eaf19e0f9d408d4fd1e3e3b5bd,
      rating: 4.6,
      category: "Thrift Store",
      images: [
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
       
      ],
    },
    {
      id: "Cosset Clothing",
      name: "Cosset Clothing",
      logo: c725b1eaf19e0f9d408d4fd1e3e3b5bd,
      rating: 4.9,
      category: "Sustainable Fashion",
      images: [
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
       
      ],
    },
    {
      id: "7.10store",
      name: "7.10store",
      logo: c725b1eaf19e0f9d408d4fd1e3e3b5bd,
      rating: 4.7,
      category: "Sneakers",
      images: [
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
        c725b1eaf19e0f9d408d4fd1e3e3b5bd,
       
      ],
    },
  ];

  const handleSelect = (storeid) => {
    setSelectedStores((prevSelectedStores) => {
      if (prevSelectedStores.includes(storeid)) {
        return prevSelectedStores.filter((id) => id !== storeid);
      } else {
        return [...prevSelectedStores, storeid];
      }
    });
  };

  async function handleContinue() {
    try {
      //Make the backend code
      setTimeout(() => {
        const response = selectedStores.length >= 3;
        if (response) {
          console.log("success");
          navigate("/buyer/home");
        } else {
          alert("Some error occucred, Try again.");
        }
      }, 1000);
    } catch (error) {
      alert("Some error occucred.");
    }
  }

  return (
    <>
      <div className="bg-white h-screen w-full relative">
        <div className="w-full flex flex-col items-center justify-center">
          { !searching ? (
            <div className="fixed z-50 bg-white h-[80px] top-0 Header flex items-center w-full justify-between  p-[27px]">
              <h1 className="font-medium text-[36px]">discover</h1>
              <button id="search" onClick={handleSearchClick}>
                <img src={search} alt="" />
              </button>
            </div>
          ) : (
            <div className="fixed z-50 bg-white h-[80px] top-0 Header flex items-center w-full justify-between p-[27px]">
              <input
                type="text" 
                placeholder="Search stores"
                className="w-full p-3 border text-base rounded bg-[#2C2C2C] text-white"
                // Add additional onChange handler as needed for searching functionality
              />
              <button
                onClick={handleSearchClose}
                className="ml-2 p-3 bg-black text-white rounded"
              >
                Close
              </button>
            </div>
          )}
          <div className="pt-[100px] pb-3 To_choose  flex-shrink-0 px-[27px]  text-[20px]">
            Choose five or more accounts below, to help us curate your
            personalised feed.
          </div>

          <div className="flex flex-col gap-2 mb-[50px] px-[27px]">
            {storesData.map((store) => (
              <Store
                key={store.id}
                store={store}
                isSelected={selectedStores.includes(store.id)}
                onSelect={handleSelect}
              />
            ))}
          </div>

          <div className="fixed bottom-[10px] w-full flex justify-center">
            <button
              onClick={handleContinue}
              className={` px-[36px] py-2 rounded-3xl shadow-lg ${
                selectedStores.length >= 3
                  ? "bg-black text-white cursor-pointer animate-floatUp"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed hidden"
              } `}
              disabled={selectedStores.length < 3}
              style={{
                animation:
                  selectedStores.length >= 3 ? "floatUp 0.6s ease-in" : "none",
              }}
            >
              Continue ({selectedStores.length})
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;

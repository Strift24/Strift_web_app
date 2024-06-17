import React from 'react'
import { Link } from 'react-router-dom';

function WelcomeOnboard() {

    function WelcomeModal({ onClose }) {
        return (
          <div
            className="fixed inset-0 gap-5
           flex flex-col items-center justify-center bg-black bg-opacity-50"
          >
            <div className="text-white text-xl  font-semibold">
              Welcome To [ strift ]
            </div>
            <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center">
              <p className="text-center text-xl mb-4">
                Now let's add some products 😎{" "}
              </p>
              <Link to="/label/addProduct">
              <button
                onClick={onClose}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Ready!!
              </button>
              </Link>
            </div>
          </div>
        );
      }


    return (
        <div className='bg-black h-screen'>
            <div className="fixed inset-0 bg-black bg-opacity-50">
          <WelcomeModal />
        </div>
        </div>
    )
}

export default WelcomeOnboard

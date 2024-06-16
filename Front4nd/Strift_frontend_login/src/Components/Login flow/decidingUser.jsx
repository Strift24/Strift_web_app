import React from 'react'
import { useNavigate } from 'react-router-dom'

function DecidingUser() {
    const navigate = useNavigate()
    function handleBuyer() {
        // Handle Backend promise and callbacks
        navigate('/buyer/discover')
    } 

    function handleLabel() {
        // Handle Backend promise and callbacks
        navigate('/label/onBoarding')
    }

    return (
        <div className='h-screen bg-[rgb(0,0,0,0.4)]'>
            <div className='flex flex-col items-center h-[100%] gap-4 justify-center px-6'>
                <button onClick={handleBuyer} className='text-white p-3 bg-blue-500 font-semibold rounded-xl shadow-md w-full hover:bg-blue-800 z-50'>Continue as a Buyer</button>
                <button onClick={handleLabel} className='text-white p-3 bg-purple-600 rounded-xl font-semibold w-full shadow-md hover:bg-purple-800 z-50'>Continue as a Label</button>
            </div>
        </div>
    )
}

export default DecidingUser

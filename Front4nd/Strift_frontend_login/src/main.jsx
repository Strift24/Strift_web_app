import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login1 from './Components/login1.jsx'
import Otp from './Components/otp.jsx'
import Email from './Components/email.jsx'
import ProfileName from './Components/profileName.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Login1 />} />
      <Route path='otp' element={<Otp />} />
      <Route path='email' element={<Email />} />
      <Route path='profileName' element={<ProfileName />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

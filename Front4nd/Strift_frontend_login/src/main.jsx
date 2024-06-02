import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login1 from './Components/Login flow/login1.jsx'
import Otp from './Components/Login flow/otp.jsx'
import Email from './Components/Login flow/email.jsx'
import ProfileName from './Components/Login flow/profileName.jsx'
import Discover from './Components/Login flow/discover.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Login1 />} />
      <Route path='otp' element={<Otp />} />
      <Route path='email' element={<Email />} />
      <Route path='profileName' element={<ProfileName />} />
      <Route path='discover' element={<Discover/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

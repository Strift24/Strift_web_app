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
import Phone from './Components/Login flow/phone.jsx'
import HomeView from "./Components/Main flow/Buyer's flow/homeView.jsx"
import ShopView from "./Components/Main flow/Buyer's flow/shopView.jsx"
import Cart from "./Components/Main flow/Buyer's flow/cart.jsx"
import Profile from "./Components/Main flow/Buyer's flow/profile.jsx"
import ProductView from "./Components/Main flow/Buyer's flow/productView.jsx"
import Post from './Components/Main flow/Buyer\'s flow/post.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      
      <Route path='' element={<Login1 />} />
      <Route path='otp' element={<Otp />} />
      <Route path='email' element={<Email />} />
      <Route path='phone' element={<Phone />} />
      <Route path='profileName' element={<ProfileName />} />
      <Route path='discover' element={<Discover/>}/>
      <Route path='post' element={<Post/>}/>

      <Route path='buyer'>
        <Route path='home' element={<HomeView />} />
        <Route path='shop' element={<ShopView />} />
        <Route path='product' element={<ProductView />} />
        <Route path='cart' element={<Cart />} />
        <Route path='profile' element={<Profile />} />
      </Route>


    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

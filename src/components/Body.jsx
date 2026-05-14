import React from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { useDispatch,useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react'

function Body() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const location = useLocation();
  const userData=useSelector((store)=>store.user)
  const fetchUser=async()=>{
    if(userData) return;
    try{
      const res=await axios.get(BASE_URL+"/profile",{
        withCredentials: true
      });
      dispatch(addUser(res.data))
    }
    catch(err){
        console.log(err)
    }
  };


  useEffect(()=>{
      fetchUser();
  },[]);

 return (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">

    {location.pathname !== "/" && <NavBar />}

    <div className="flex-grow">
      <Outlet />
    </div>

    <Footer />

  </div>
)
}

export default Body
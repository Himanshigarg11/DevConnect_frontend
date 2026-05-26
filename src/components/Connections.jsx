import React, { useState,useEffect } from "react";
import {
  FaUserFriends,
  FaSearch,
  FaMapMarkerAlt,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import { BASE_URL } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
   const dispatch = useDispatch();
   const connections=useSelector((store)=>store.connections)
    const [search, setSearch] = useState("");

  const fetchConnection=async ()=>{
   try{
       const res=await axios.get(BASE_URL+"/user/connections",{withCredentials:true})
       dispatch(addConnections(res.data.data))
  
   }
   catch(err){
       console.log(err)
   }

  }

  useEffect(()=>{
    fetchConnection();
  },[])


  const filteredConnections=connections.filter((user)=>
     `${user.firstName} ${user.lastName}`
    .toLowerCase()
    .includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white px-4 py-10 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              My Connections
            </h1>

            <p className="text-gray-400 mt-2 text-lg">
              People you've connected with on DevConnect
            </p>

          </div>

          {/* Search */}
          <div className="relative w-full md:w-[350px]">

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search connections..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-indigo-500 transition"
            />

            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

          </div>

        </div>

        {/* Connections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
            {filteredConnections.length === 0? (

    <div className="col-span-full text-center py-20">

      <h2 className="text-3xl font-bold text-gray-300">
        No Connections Found
      </h2>

      <p className="text-gray-500 mt-3">
        Start connecting with developers on DevConnect 🚀
      </p>

    </div>

  ) : (
         filteredConnections.map((user) => (

  <div
    key={user._id}
    className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-xl hover:border-indigo-500/40 hover:shadow-indigo-500/10 transition-all duration-300"
  >

    {/* Top Section */}
    <div className="flex items-start gap-4">

      {/* Profile Image */}
      <img
        src={user.photoURL}
        alt="profile"
        className="w-20 h-20 rounded-2xl object-cover border-2 border-indigo-500"
      />

      {/* User Info */}
      <div className="flex-1 min-w-0">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold truncate">
            {user.firstName} {user.lastName}
          </h2>

          <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>

        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-400 mt-1 text-sm">

          <FaMapMarkerAlt className="text-indigo-400" />

          <span>
            {user.location || "Developer"}
          </span>

        </div>

        {/* About */}
        <p className="text-gray-300 text-sm mt-3 line-clamp-2 leading-relaxed">

          {user.about}

        </p>

      </div>

    </div>

    {/* Skills */}
    <div className="flex flex-wrap gap-2 mt-5">

      {user.skills?.slice(0, 4).map((skill, index) => (

        <div
          key={index}
          className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
        >

          {skill}

        </div>

      ))}

    </div>

    {/* Email */}
    <div className="flex items-center gap-2 mt-5 text-gray-400 text-sm">

      <FaEnvelope className="text-indigo-400" />

      <span className="truncate">
        {user.emailID}
      </span>

    </div>

    {/* Buttons */}
    <div className="flex gap-3 mt-6">

      {/* Message */}
      <Link
        to={"/chat/" + user._id}
        className="flex-1"
      >

        <button className="w-full h-11 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold hover:opacity-90 transition-all duration-300">

          Message

        </button>

      </Link>

      {/* View Profile */}
      <button className="h-11 px-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 font-medium">

        Profile

      </button>

    </div>

  </div>

))
        )}

        </div>

      </div>

    </div>
  );
};

export default Connections;
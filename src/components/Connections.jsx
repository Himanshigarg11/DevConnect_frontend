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

            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              My Connections
            </h1>

            <p className="text-gray-400 mt-2 text-lg">
              People you've connected with on DevTinder
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
        Start connecting with developers on DevTinder 🚀
      </p>

    </div>

  ) : (
          filteredConnections.map((user) => (

            <div
              key={user._id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >

              {/* Top */}
              <div className="flex items-center gap-4">

                <img
                  src={user.photoURL}
                  alt="profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
                />

                <div>

                  <h2 className="text-2xl font-bold">
                    {user.firstName} {user.lastName}
                  </h2>

                  <div className="flex items-center gap-2 text-gray-400 mt-1">

                    <FaMapMarkerAlt />

                    <span>{user.location}</span>

                  </div>

                </div>

              </div>

              {/* About */}
              <p className="text-gray-300 mt-5 leading-relaxed">
                {user.about}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-5">

                {user.skills.map((skill, index) => (

                  <div
                    key={index}
                    className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                  >

                    {skill}

                  </div>

                ))}

              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mt-6 text-gray-400">

                <FaEnvelope />

                <span className="text-sm">
                  {user.emailID}
                </span>

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-7">

                <button className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold hover:scale-[1.02] transition-all duration-300">

                  Message

                </button>

                <button className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition">

                  <FaUserFriends />

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
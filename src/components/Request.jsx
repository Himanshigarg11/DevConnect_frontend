import React, { useState,useEffect } from "react";
import {
  FaUserClock,
  FaSearch,
  FaCheck,
  FaTimes,
  FaMapMarkerAlt,
} from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addRequests,removeRequests } from "../utils/requestSlice";

const Request = () => {

const [search, setSearch] = useState("");
const dispatch = useDispatch();
const requests = useSelector(store => store.requests);

const reviewRequest=async(status,_id)=>{
  try{
      const res=await axios.post(
      BASE_URL+"/request/review/"+status+"/"+_id,
      {},{withCredentials:true})
 
      dispatch(removeRequests(_id))
      console.log(res.data)
     
  }
  catch(err){
      console.log(err);
   console.log(err.response);
   console.log(err.message);
  }
}

  const fetchRequests=async()=>{
    try{
          const res=await axios.get(BASE_URL+"/user/requests",{withCredentials:true})
          dispatch(addRequests(res.data.data))
          console.log(res.data)
          console.log(res.data.data)
    }catch(err){
         console.log(err)
    }
  }

useEffect(()=>{
  fetchRequests();
},[]);

const filteredRequests=requests.filter((user)=>(
   `${user.fromUserId.firstName} ${user.fromUserId.lastName}`
    .toLowerCase()
    .includes(search.toLowerCase())
))

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
              Connection Requests
            </h1>

            <p className="text-gray-400 mt-2 text-lg">
              People who want to connect with you
            </p>

          </div>

          {/* Search */}
          <div className="relative w-full md:w-[350px]">

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search requests..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-indigo-500 transition"
            />

            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

          </div>

        </div>

        {/* Requests Grid */}
      {
  filteredRequests.length === 0 ? (

    <div className="flex flex-col items-center justify-center py-24 text-center">

      <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">

        <FaUserClock className="text-4xl text-indigo-400" />

      </div>

      <h2 className="text-3xl font-bold text-white">

        No Requests Found

      </h2>

      <p className="text-gray-400 mt-3 max-w-md">

        You currently don't have any connection requests
        or no users matched your search.

      </p>

    </div>

  ) : (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {filteredRequests.map((user) => (

        <div
          key={user.fromUserId._id}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:scale-[1.02] transition-all duration-300"
        >

              {/* Top */}
              <div className="flex items-center gap-4">

                <img
                  src={user.fromUserId.photoURL || "https://static.vecteezy.com/system/resources/previews/046/409/821/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg"}
                  alt="profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
                />

                <div>

                  <h2 className="text-2xl font-bold">
                    {user.fromUserId.firstName} {user.fromUserId.lastName}
                  </h2>

                  <div className="flex items-center gap-2 text-gray-400 mt-1">

                    <FaMapMarkerAlt />

                   <span>{user.fromUserId.location || "India"}</span>

                  </div>

                </div>

              </div>

              {/* About */}
              <p className="text-gray-300 mt-5 leading-relaxed">
                {user.fromUserId.about}
              </p>

              <div className="flex flex-wrap gap-3 mt-5">

  {
    user.fromUserId.skills?.length > 0 ? (

      user.fromUserId.skills.map((skill, index) => (

        <div
          key={index}
          className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
        >

          {skill}

        </div>

      ))

    ) : (

      <div className="bg-white/5 text-gray-400 px-4 py-2 rounded-full text-sm">

        No skills added

      </div>

    )
  }

</div>

              {/* Status */}
              <div className="mt-6 flex items-center gap-3 text-yellow-400">

                <FaUserClock />

                <span className="text-sm font-medium">
                  Pending Request
                </span>

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-7">

                {/* Accept */}
                <button onClick={() => reviewRequest("accepted", user._id)} className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 font-semibold hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">

                  <FaCheck />

                  Accept

                </button>

                {/* Reject */}
                <button onClick={() => reviewRequest("rejected", user._id)} className="flex-1 h-12 rounded-2xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">

                  <FaTimes />

                  Reject

                </button>

              </div>

            </div>

          ))}

        </div>

  )}


      </div>

    </div>
  );
};

export default Request;
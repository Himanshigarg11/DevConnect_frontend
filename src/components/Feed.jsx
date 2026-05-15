import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import UserCard from "./UserCard";
import { FaFire, FaUsers } from "react-icons/fa";

const Feed = () => {

  const feed = useSelector((store) => store.feed);

  const dispatch = useDispatch();

  const getFeed = async () => {

    try {

      if (feed) return;

      const res = await axios.get(
        BASE_URL + "/feed",
        { withCredentials: true }
      );

      dispatch(addFeed(res?.data));

    }
    catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    getFeed();

  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white relative overflow-hidden px-4 py-10">

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
       <div className="mb-14">

          <div>

            <div className="flex items-center gap-3 mb-4">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">

                <FaFire className="text-2xl text-white" />

              </div>

              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">

                Developer Feed

              </h1>

            </div>

            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">

              Discover developers, explore skills, and build meaningful
              connections with people who match your interests.

            </p>

          </div>
          </div>

        {/* Feed Content */}
        {

          feed?.length > 0 ? (

           <div className="flex justify-center items-center min-h-[70vh]">

              <div className="animate-fadeIn">

                <UserCard user={feed[0]} />

              </div>

            </div>

          ) : (

            <div className="flex flex-col items-center justify-center py-28 text-center">

              <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">

                <FaUsers className="text-5xl text-indigo-400" />

              </div>

              <h2 className="text-4xl font-bold text-white">

                No Developers Found

              </h2>

              <p className="text-gray-400 mt-4 max-w-xl text-lg leading-relaxed">

                There are currently no developers available in your feed.
                Check back later for more profiles.

              </p>

            </div>

          )

        }

      </div>

    </div>

  );

};

export default Feed;
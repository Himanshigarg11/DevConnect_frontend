import React from "react";
import {
  FaUser,
  FaVenusMars,
  FaCode,
  FaHeart,
  FaTimes,
} from "react-icons/fa";

const UserCard = ({ user }) => {

  const {
    firstName,
    lastName,
    age,
    gender,
    about,
    skills,
    photoUrl,
  } = user;

  return (

    <div className="w-[380px]">

      <div className="relative bg-[#111827]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.25)]">

        {/* Top Gradient */}
        <div className="h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative">

          <div className="absolute inset-0 bg-black/20"></div>

        </div>

        {/* Profile Image */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2">

          <img
            src={
              photoUrl ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="user"
            className="w-36 h-36 rounded-full object-cover border-[6px] border-[#111827] shadow-2xl"
          />

        </div>

        {/* Content */}
        <div className="pt-16 px-6 pb-6 text-center text-white">

          {/* Name */}
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">

            {firstName} {lastName}

          </h2>

          {/* Age + Gender */}
          <div className="flex justify-center gap-3 mt-5 flex-wrap">

            <div className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">

              <FaUser />

              {age} Years

            </div>

            <div className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 capitalize">

              <FaVenusMars />

              {gender}

            </div>

          </div>

          {/* About */}
          <div className="mt-4 bg-white/5 border border-white/5 rounded-3xl px-5 py-4">

            <p className="text-gray-300 leading-relaxed text-sm">

              {about || "No bio available"}

            </p>

          </div>

          {/* Skills */}
          <div className="mt-7">

            <div className="flex items-center justify-center gap-2 mb-4 text-indigo-300 font-semibold">

              <FaCode />

              Skills

            </div>

            <div className="flex flex-wrap justify-center gap-3">

              {
                skills?.length > 0 ? (

                  skills.map((skill, index) => (

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

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">

            {/* Ignore */}
            <button className="flex-1 h-14 rounded-2xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-semibold">

              <FaTimes />

              Ignore

            </button>

            {/* Interested */}
            <button className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-indigo-500/20">

              <FaHeart />

              Interested

            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default UserCard;
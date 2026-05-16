import React, { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser } from "../utils/userSlice";
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender?.toLowerCase() || "");
  const [photoUrl, setPhotoUrl] = useState(user.photoURL || "");
  const [about, setAbout] = useState(user.about || "");
  const [skills, setSkills] = useState(
    Array.isArray(user.skills) ? user.skills.join(", ") : user.skills || "",
  );

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const handleEdit = async () => {
    try {
      setError("");
      setSuccess("");
      const res = await axios.patch(
        BASE_URL + "/profile",
        {
          firstName,
          lastName,
          age: Number(age),
          gender,
          photoURL: photoUrl,
          about,
          skills: skills
            .split(",")
            .map((s) => s.trim())
            .filter((s) => s !== ""),
        },
        { withCredentials: true },
      );
      dispatch(addUser(res.data.data));
      setSuccess("Profile updated successfully ✅");
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {

  setSuccess("");

  setError(
    err?.response?.data?.message || 
    err?.response?.data || 
    "Something went wrong"
  );

  console.log(err);

}
  };

 return (
  <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 px-4 py-10 relative overflow-hidden text-white">

    {/* Glow Effects */}
    <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>

    <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

    {/* Main Container */}
    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      {/* LEFT SIDE */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-8">

          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-full shadow-lg shadow-indigo-500/30">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

          </div>

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">

            Edit Profile

          </h1>

        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-8">

          <img
            src={
              photoUrl ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
            className="w-32 h-32 rounded-full border-[5px] border-indigo-500 object-cover shadow-2xl hover:scale-105 transition-all duration-300"
          />

        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>

              <label className="text-sm text-gray-300 mb-2 block">
                First Name
              </label>

              <input
                type="text"
                placeholder="Enter first name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

            </div>

            <div>

              <label className="text-sm text-gray-300 mb-2 block">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Enter last name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

            </div>

          </div>

          {/* Age + Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>

              <label className="text-sm text-gray-300 mb-2 block">
                Age
              </label>

              <input
                type="number"
                 min="18"
                max="90"
                placeholder="Enter age"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

            </div>

            <div>

              <label className="text-sm text-gray-300 mb-2 block">
                Gender
              </label>

             <select
  className="w-full bg-white/5 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition appearance-none"
  value={gender}
  onChange={(e) => setGender(e.target.value)}
>

  <option className="bg-slate-900 text-white" value="">
    Select
  </option>

  <option className="bg-slate-900 text-white" value="male">
    Male
  </option>

  <option className="bg-slate-900 text-white" value="female">
    Female
  </option>

  <option className="bg-slate-900 text-white" value="other">
    Other
  </option>

</select>

            </div>

          </div>

          {/* Photo URL */}
          <div>

            <label className="text-sm text-gray-300 mb-2 block">
              Profile Photo URL
            </label>

            <input
              type="text"
              placeholder="Paste image URL"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />

          </div>

          {/* About */}
          <div>

            <label className="text-sm text-gray-300 mb-2 block">
              About
            </label>

            <textarea
              placeholder="Write about yourself..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 h-28 outline-none resize-none focus:border-indigo-500 transition"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>

          </div>

          {/* Skills */}
          <div>

            <label className="text-sm text-gray-300 mb-2 block">
              Skills
            </label>

            <input
              type="text"
              placeholder="React, NodeJS, MongoDB"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />

          </div>

          {/* Error */}
          {
            error && (
              <p className="text-red-400 text-sm font-medium">
                {error}
              </p>
            )
          }

          {/* Success */}
          {
            success && (
              <p className="text-green-400 text-sm font-medium">
                {success}
              </p>
            )
          }

          {/* Button */}
          <button
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-500/20"
            onClick={handleEdit}
          >

            Save Profile

          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center lg:sticky lg:top-10">

        <div className="hover:scale-[1.02] transition-all duration-500">

          <UserCard
            user={{
              firstName,
              lastName,
              age,
              gender,
              photoUrl,
              about,
              skills: skills.split(","),
            }}
          />

        </div>

      </div>

    </div>

  </div>
);
};

export default EditProfile;

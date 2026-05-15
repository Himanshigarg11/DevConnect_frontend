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
  const [gender, setGender] = useState(user.gender || "");
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
    setError(err?.response?.data?.message || "Something went wrong");

      console.log(err);
    }
  };

  return (
    <div className="min-h-screen px-4 py-10">
      {/* MAIN CONTAINER */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT SIDE - FORM */}
        <div className="bg-base-100/80 backdrop-blur-md border border-base-300 rounded-3xl shadow-2xl p-6 md:p-8 hover:shadow-primary/20 transition-all duration-500">
          {/* HEADING */}
          <h1 className="text-3xl font-bold text-center text-primary mb-6">
            Edit Profile
          </h1>

          {/* PROFILE IMAGE */}
          <div className="flex justify-center mb-6">
            <img
              src={
                photoUrl ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="profile"
              className="w-24 h-24 rounded-full border-4 border-primary object-cover shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

          {/* INPUTS */}
          <div className="space-y-5">
            {/* FIRST NAME */}
            <div>
              <label className="font-semibold text-sm block mb-2">
                First Name
              </label>

              <input
                type="text"
                placeholder="Enter first name"
                className="input input-bordered w-full rounded-xl focus:input-primary transition-all duration-300"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="font-semibold text-sm block mb-2">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Enter last name"
                className="input input-bordered w-full rounded-xl focus:input-primary transition-all duration-300"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* AGE + GENDER */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-sm block mb-2">Age</label>

                <input
                  type="number"
                  placeholder="Age"
                  className="input input-bordered w-full rounded-xl focus:input-primary"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div>
                <label className="font-semibold text-sm block mb-2">
                  Gender
                </label>

                <select
                  className="select select-bordered w-full rounded-xl focus:select-primary"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* PHOTO URL */}
            <div>
              <label className="font-semibold text-sm block mb-2">
                Photo URL
              </label>

              <input
                type="text"
                placeholder="Paste image URL"
                className="input input-bordered w-full rounded-xl focus:input-primary"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>

            {/* ABOUT */}
            <div>
              <label className="font-semibold text-sm block mb-2">About</label>

              <textarea
                placeholder="Write about yourself..."
                className="textarea textarea-bordered w-full h-24 rounded-xl focus:textarea-primary"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </div>

            {/* SKILLS */}
            <div>
              <label className="font-semibold text-sm block mb-2">Skills</label>

              <input
                type="text"
                placeholder="React, NodeJS, MongoDB"
                className="input input-bordered w-full rounded-xl focus:input-primary"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>

            {/* ERROR */}
            {error && (
              <p className="text-red-500 text-center font-semibold">{error}</p>
            )}

            {success && (
              <div role="alert" className="alert alert-success mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span>{success}</span>
              </div>
            )}

            {/* BUTTON */}
            <button
              className="btn btn-primary w-full rounded-xl text-base hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              onClick={handleEdit}
            >
              Save Profile
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - LIVE PREVIEW */}
        <div className="flex justify-center lg:sticky lg:top-24">
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

import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      setError("Please accept Terms & Conditions");
      return;
    }
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailID: email,
          age: Number(age),
          photoURL,
          password,
          about:bio,
         skills: skills
  .split(",")
  .map((skill) => skill.trim())
  .filter(
    (skill) =>
      /^[A-Za-z+#. ]+$/.test(skill) && skill !== ""
  ),
        },
        { withCredentials: true },
      );
      setSuccess("Account is created successfully!!");
      setTimeout(()=>{
        setSuccess("")
      },3000)
    } catch (err) {
      setSuccess("");
      setError(err?.response?.data || "something went wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 flex justify-center px-4 py-16 relative overflow-hidden text-white">
      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
        {/* Heading */}
        <div className="text-center">
          <div className="flex justify-center mb-5">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-5 rounded-full shadow-lg shadow-indigo-500/30">
              <FaCode className="text-4xl text-white" />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Create Account
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Join DevTinder and connect with developers worldwide
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* First Name */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                First Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pl-14 outline-none focus:border-indigo-500 transition"
                />

                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Last Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pl-14 outline-none focus:border-indigo-500 transition"
                />

                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email Address
            </label>

            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pl-14 outline-none focus:border-indigo-500 transition"
              />

              <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Age</label>

            <div className="relative">
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pl-14 outline-none focus:border-indigo-500 transition"
              />

              <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Profile Photo URL
            </label>

            <div className="relative">
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Paste profile image URL"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pl-14 outline-none focus:border-indigo-500 transition"
              />

              <FaGithub className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pl-14 pr-14 outline-none focus:border-indigo-500 transition"
              />

              <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Bio</label>

            <textarea
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell something about yourself..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition resize-none"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Skills</label>

            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="React, NodeJS, MongoDB..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="checkbox checkbox-primary"
            />

            <p className="text-sm text-gray-400">
              I agree to the Terms & Conditions
            </p>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Success Message */}
          {success && <p className="text-green-400 text-sm">{success}</p>}

          {/* Signup Button */}
          <button
            type="submit"
            onClick={handleSignup}
            disabled={loading}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Bottom */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

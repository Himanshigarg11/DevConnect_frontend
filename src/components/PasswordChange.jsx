import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash, FaShieldAlt } from "react-icons/fa";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
const PasswordChange = () => {
  // these useState for eye
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  // these useState for input box
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const ChangePassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/password",
        {
          currentPassword,
          newPassword,
        },
        {
          withCredentials: true,
        },
      );
      setSuccess("Password updated successfully");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 flex items-center justify-center px-4 relative overflow-hidden text-white">
      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        {/* Top Icon */}
        <div className="flex justify-center">
          <div className="bg-indigo-500/20 p-5 rounded-full border border-indigo-500/30">
            <FaShieldAlt className="text-4xl text-indigo-300" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Change Password
          </h1>

          <p className="text-gray-400 mt-2">Secure your DevConnect account</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          {/* Current Password */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Current Password
            </label>

            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                placeholder="Enter current password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pr-14 outline-none focus:border-indigo-500 transition"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showCurrent ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              New Password
            </label>

            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter new password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pr-14 outline-none focus:border-indigo-500 transition"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showNew ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pr-14 outline-none focus:border-indigo-500 transition"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Password Rules */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-gray-400 space-y-2">
            <p>• Password should contain at least 8 characters</p>

            <p>• Include uppercase and lowercase letters</p>

            <p>• Include at least one special character</p>
          </div>

          {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

          {success && (
            <p className="text-green-400 text-sm font-medium">{success}</p>
          )}

          {/* Submit Button */}
          <button
            onClick={ChangePassword}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            <div className="flex items-center justify-center gap-3">
              <FaLock />
              Update Password
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;

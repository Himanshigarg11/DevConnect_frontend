import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaMoon,
  FaBell,
  FaLock,
  FaTrash,
  FaUserShield,
  FaGlobe,
  FaEye,
} from "react-icons/fa";

const Settings = () => {
  const user = useSelector((store) => store.user);

  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [showEmail, setShowEmail] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white px-4 py-10 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Settings
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            Manage your DevConnect account and preferences.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT PROFILE CARD */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-2xl h-fit">

            <div className="flex flex-col items-center text-center">

              <img
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg shadow-indigo-500/30"
              />

              <h2 className="text-3xl font-bold mt-5">
                {user?.firstName} {user?.lastName}
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                {user?.emailID}
              </p>

              <Link to="/profile" className="mt-6 btn bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white rounded-2xl px-8 hover:scale-105 transition">
                Edit Profile
              </Link>

            </div>

            {/* Account Stats */}
            <div className="mt-10 space-y-4">

              <div className="bg-white/5 rounded-2xl px-5 py-4 flex justify-between items-center">
                <span className="text-gray-300">
                  Profile Visibility
                </span>

                <span className="text-green-400 font-medium">
                  Public
                </span>
              </div>

              <div className="bg-white/5 rounded-2xl px-5 py-4 flex justify-between items-center">
                <span className="text-gray-300">
                  Account Status
                </span>

                <span className="text-indigo-400 font-medium">
                  Active
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT SETTINGS */}
          <div className="lg:col-span-2 space-y-8">

            {/* Preferences */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

              <h2 className="text-3xl font-bold mb-8">
                Preferences
              </h2>

              <div className="space-y-7">

                {/* Dark Mode */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="bg-indigo-500/20 p-4 rounded-2xl">
                      <FaMoon className="text-indigo-300 text-2xl" />
                    </div>

                    <div>

                      <h3 className="font-semibold text-lg">
                        Dark Mode
                      </h3>

                      <p className="text-gray-400 text-sm">
                        Enable dark theme interface
                      </p>

                    </div>

                  </div>

                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />

                </div>

                {/* Notifications */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="bg-pink-500/20 p-4 rounded-2xl">
                      <FaBell className="text-pink-300 text-2xl" />
                    </div>

                    <div>

                      <h3 className="font-semibold text-lg">
                        Notifications
                      </h3>

                      <p className="text-gray-400 text-sm">
                        Receive match and message alerts
                      </p>

                    </div>

                  </div>

                  <input
                    type="checkbox"
                    className="toggle toggle-secondary"
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                  />

                </div>

                {/* Online Status */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="bg-green-500/20 p-4 rounded-2xl">
                      <FaGlobe className="text-green-300 text-2xl" />
                    </div>

                    <div>

                      <h3 className="font-semibold text-lg">
                        Online Status
                      </h3>

                      <p className="text-gray-400 text-sm">
                        Show when you're online
                      </p>

                    </div>

                  </div>

                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    checked={onlineStatus}
                    onChange={() => setOnlineStatus(!onlineStatus)}
                  />

                </div>

                {/* Private Profile */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="bg-yellow-500/20 p-4 rounded-2xl">
                      <FaUserShield className="text-yellow-300 text-2xl" />
                    </div>

                    <div>

                      <h3 className="font-semibold text-lg">
                        Private Profile
                      </h3>

                      <p className="text-gray-400 text-sm">
                        Hide profile from strangers
                      </p>

                    </div>

                  </div>

                  <input
                    type="checkbox"
                    className="toggle toggle-warning"
                    checked={privateProfile}
                    onChange={() =>
                      setPrivateProfile(!privateProfile)
                    }
                  />

                </div>

                {/* Show Email */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="bg-cyan-500/20 p-4 rounded-2xl">
                      <FaEye className="text-cyan-300 text-2xl" />
                    </div>

                    <div>

                      <h3 className="font-semibold text-lg">
                        Show Email
                      </h3>

                      <p className="text-gray-400 text-sm">
                        Let connections see your email
                      </p>

                    </div>

                  </div>

                  <input
                    type="checkbox"
                    className="toggle toggle-info"
                    checked={showEmail}
                    onChange={() => setShowEmail(!showEmail)}
                  />

                </div>

              </div>
            </div>

            {/* Security */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

              <h2 className="text-3xl font-bold mb-8">
                Security
              </h2>

              <div className="space-y-5">

                <Link to="/password-change" className="btn btn-outline border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:border-indigo-500 rounded-2xl w-full justify-start h-14 text-lg">

                  <FaLock />

                  Change Password

                </Link>

                <button className="btn btn-outline border-red-500 text-red-400 hover:bg-red-500 hover:text-white rounded-2xl w-full justify-start h-14 text-lg">

                  <FaTrash />

                  Delete Account

                </button>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
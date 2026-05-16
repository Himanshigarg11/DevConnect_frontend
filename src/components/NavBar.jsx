import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { clearFeed } from "../utils/feedSlice";
import { FaUserClock } from "react-icons/fa";
import axios from "axios";
const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true },
      );
      dispatch(removeUser());
      dispatch(clearFeed())
      return navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="w-full px-1 md:px-14 py-6 flex items-center justify-between">
        {/* LEFT SIDE */}
        <Link
          to={user ? "/feed" : "/login"}
          className="flex items-center gap-4 group"
        >
          <div className="text-3xl">👩‍💻</div>

          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition duration-300">
            DevTinder
          </h1>
        </Link>

        {/* RIGHT SIDE */}
        {user && (
          <div className="dropdown dropdown-end">
            {/* USER INFO */}
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-4 cursor-pointer hover:bg-white/5 px-3 py-2 rounded-2xl transition-all duration-300"
            >
              <p className="text-gray-200 font-medium hidden md:block">
                Welcome, {user.firstName}
              </p>

              <div className="avatar">
                <div className="w-14 rounded-full border-2 border-indigo-400 shadow-lg shadow-indigo-500/20">
                  <img
                    alt="profile"
                    src={
                      user.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                  />
                </div>
              </div>
            </div>

            {/* DROPDOWN */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-3 shadow-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl w-56 text-gray-200"
            >
              <li className="mb-1">
                <Link
                  to="/"
                  className="rounded-xl hover:bg-indigo-500/20 hover:text-indigo-300"
                >
                  🖥️ Home
                </Link>
              </li>

              <li className="mb-1">
                <Link to="/connections" 
                 className="rounded-xl hover:bg-indigo-500/20 hover:text-indigo-300">🤝 Friends</Link>
              </li>

               <li className="mb-1">
                <Link to="/request"
                 className="rounded-xl hover:bg-indigo-500/20 hover:text-indigo-300">📩 Requests</Link>
              </li>

              <li className="mb-1">
                <Link
                  to="/profile"
                  className="rounded-xl hover:bg-indigo-500/20 hover:text-indigo-300"
                >
                  👤 Profile
                </Link>
              </li>

              <li className="mb-1">
                <Link
                  to="/settings"
                  className="rounded-xl hover:bg-indigo-500/20 hover:text-indigo-300"
                >
                  ⚙️ Settings
                </Link>
              </li>

              <li>
                <a
                  onClick={handleLogout}
                  className="rounded-xl hover:bg-red-500/20 hover:text-red-400"
                >
                  🚪 Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

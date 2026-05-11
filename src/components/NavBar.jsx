import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import axios from "axios";
const NavBar = () => {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout=async()=>{
    try{
      const res=await axios.post(BASE_URL+"/logout",{},
        {withCredentials:true});
        dispatch(removeUser())
        return navigate("/login")
    }
    catch(err){
      console.log(err)
    }
  }

  return (

    <div className="navbar bg-base-300 shadow-sm px-4">

      {/* Left Side */}
      <div className="flex-1">

        <Link to="/" className="btn btn-ghost text-2xl font-bold text-white">
          👩‍💻 DevTinder
        </Link>

      </div>

      {/* Right Side */}
      <div className="flex items-center">

        {user && (

          <div className="dropdown dropdown-end mr-4">

            {/* User Info + Avatar */}
            <div className="flex items-center gap-3">

              <p className="text-gray-200 font-medium">
                Welcome, {user.firstName}
              </p>

              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >

                <div className="w-11 rounded-full border border-gray-600">

                  <img
                    alt="profile"
                    src={user.photoURL}
                  />

                </div>

              </div>

            </div>

            {/* Dropdown */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >

              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <a>Settings</a>
              </li>

              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>

            </ul>

          </div>

        )}

      </div>

    </div>
  );
};

export default NavBar;
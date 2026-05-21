import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate,Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailID,setEmailId]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("")
  const name = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleLogin=async()=>{
    try{
        const res=await axios.post(BASE_URL+"/login",{
          emailID, password,
        },{withCredentials:true});
       dispatch(addUser(res.data.data))
        return navigate("/feed")
      }
        catch(err){
            setError(err?.response?.data|| "something went wrong")
             console.log(err.response.data);
        }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 flex justify-center items-center px-4 py-10 relative overflow-hidden text-white">

    {/* Glow Effects */}
    <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>

    <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

    {/* Main Card */}
    <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">

      {/* Heading */}
      <div className="flex items-center justify-center gap-3 mb-4">

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-full shadow-lg shadow-indigo-500/30">

          <FaLock className="text-1xl text-white" />

        </div>

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">

          Login

        </h1>

      </div>

      <p className="text-gray-400 text-center mb-8 text-lg">
        Welcome back to DevConnect
      </p>

      {/* Email */}
      <div className="mb-5">

        <label className="block text-gray-300 mb-2">
          Email Address
        </label>

        <div className="relative">

          <MdEmail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          <input
            type="email"
            value={emailID}
            placeholder="Enter your email"
            autoComplete="off"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-white outline-none focus:border-indigo-500 transition-all duration-300"
            onChange={(e) => setEmailId(e.target.value)}
          />

        </div>

      </div>

      {/* Password */}
      <div className="mb-5">

        <label className="block text-gray-300 mb-2">
          Password
        </label>

        <div className="relative">

          <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Enter your password"
            autoComplete="new-password"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-14 text-white outline-none focus:border-indigo-500 transition-all duration-300"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >

            {showPassword ? <FaEyeSlash /> : <FaEye />}

          </button>

        </div>

      </div>

      {/* Error */}
      {
        error && (
          <p className="text-red-400 text-sm mb-5">
            {error}
          </p>
        )
      }

      {/* Login Button */}
      <button
        className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-500/20"
        onClick={handleLogin}
      >

        Login

      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-7">

        <div className="flex-1 h-[1px] bg-white/10"></div>

        <span className="text-gray-500 text-sm">
          OR
        </span>

        <div className="flex-1 h-[1px] bg-white/10"></div>

      </div>

      {/* Register */}
      <p className="text-center text-gray-400">

        Don’t have an account?

        <Link
          to="/signup"
          className="text-indigo-400 ml-2 hover:text-indigo-300 font-semibold"
        >

          Register

        </Link>

      </p>

    </div>

  </div>
);
};

export default Login;

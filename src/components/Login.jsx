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
  const [emailID,setEmailId]=useState("himanshigarg1115@gmail.com");
  const [password,setPassword]=useState("Himanshi@11");
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
    <div className="min-h-screen flex items-center justify-center px-4 pb-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="w-full max-w-sm">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-7 shadow-[0_0_35px_rgba(99,102,241,0.25)]">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-white">Login</h1>

            <p className="text-gray-400 mt-2 text-sm">
              Welcome back to DevTinder
            </p>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-300 mb-2">Email ID</label>

            <div className="relative">
              <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

              <input
                type="email"
                value={emailID}
                placeholder="Enter your email"
                autoComplete="off"
                className="w-full bg-slate-800 border border-gray-700 rounded-xl py-3 pl-11 pr-4 text-white outline-none focus:border-indigo-500 transition-all duration-300"
                onChange={(e)=>
                  setEmailId(e.target.value)
                }
              />
      
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Password</label>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter your password"
                autoComplete="new-password"
                className="w-full bg-slate-800 border border-gray-700 rounded-xl py-3 pl-11 pr-11 text-white outline-none focus:border-indigo-500 transition-all duration-300"
                onChange={(e)=>{setPassword(e.target.value)}}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <p className="text-red-500">{error}</p><br></br>
          {/* Button */}
          <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
             onClick={handleLogin}>
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-[1px] bg-gray-700"></div>

            <span className="text-gray-500 text-sm">OR</span>

            <div className="flex-1 h-[1px] bg-gray-700"></div>
          </div>

          {/* Register */}
          <p className="text-center text-gray-400 text-sm">
            Don’t have an account?
            <Link to="/signup" className="text-indigo-400 ml-2 cursor-pointer hover:text-indigo-300">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

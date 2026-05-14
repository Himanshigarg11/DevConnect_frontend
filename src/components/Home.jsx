import {useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import axios from "axios";

export default function Home() {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout=async()=>{
    try{
      const res=await axios.post(BASE_URL+"/logout",{},
        {withCredentials:true});
        dispatch(removeUser())
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🧑‍💻</div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            DevTinder
          </h1>
        </div>

        <div className="hidden md:flex gap-4">
          <Link to="/login">
            <button onClick={handleLogout} className="btn btn-ghost text-white hover:bg-white/10 rounded-xl px-6">
              Login
            </button>
          </Link>

          <Link to="/signup">

            <button onClick={handleLogout} className="btn btn-primary rounded-xl px-6 shadow-lg shadow-primary/30 hover:scale-105 transition-all duration-300">
              Signup
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm mb-6 backdrop-blur-md">
            🚀 Connect with developers worldwide
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Swipe.
            <br />
            Match.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Build Together.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-10">
            DevTinder helps developers connect, collaborate, and build amazing
            projects together. Meet frontend, backend, AI, and full-stack
            developers from around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link to="/login">
              <button onClick={handleLogout} className="btn btn-primary btn-lg rounded-2xl px-10 shadow-2xl shadow-primary/30 hover:scale-105 transition-all duration-300">
                Login
              </button>
            </Link>

            <a href="/signup">
              <button className="btn btn-outline btn-lg rounded-2xl px-10 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                Create Account
              </button>
            </a>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-8 mt-14">
            <div>
              <h2 className="text-3xl font-bold text-indigo-400">50K+</h2>
              <p className="text-gray-400">Developers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-400">120+</h2>
              <p className="text-gray-400">Countries</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400">10K+</h2>
              <p className="text-gray-400">Matches Made</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>

          {/* MAIN CARD */}
          <div className="relative bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 w-[340px] shadow-2xl hover:scale-105 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
              alt="developer"
              className="w-full h-[360px] object-cover rounded-[1.5rem]"
            />

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Alex, 24</h2>
                <div className="badge badge-primary badge-lg">Frontend</div>
              </div>

              <p className="text-gray-300 mt-3 leading-relaxed">
                React developer passionate about animations, UI design, and
                building modern web apps.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">NodeJS</div>
                <div className="badge badge-outline">MongoDB</div>
                <div className="badge badge-outline">Tailwind</div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-4 mt-8">
                <button className="btn flex-1 rounded-xl border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300">
                  Ignore
                </button>

                <button className="btn btn-primary flex-1 rounded-xl hover:scale-105 transition-all duration-300">
                  Interested
                </button>
              </div>
            </div>
          </div>

          {/* FLOATING SMALL CARD */}
          <div className="hidden lg:block absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl animate-bounce">
            <p className="text-sm text-gray-300">🔥 New Match</p>
            <h3 className="font-semibold text-lg">Backend Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

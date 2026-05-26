import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaPaperPlane,
  FaArrowLeft,
  FaPhoneAlt,
  FaVideo,
  FaEllipsisV,
} from "react-icons/fa";

const PremiumChat = () => {
  const { getUserId } = useParams();

  console.log(getUserId);

  const [message, setMessage] = useState("");

  // Dummy selected user
  const selectedUser = {
    name: "Jiyansh Kalra",
    image: "https://i.pravatar.cc/150?img=15",
    online: true,
  };

  const messages = [
    {
      sender: "other",
      text: "Hey Himanshi 👋",
      time: "10:30 PM",
    },
    {
      sender: "me",
      text: "Hello!!",
      time: "10:31 PM",
    },
    {
      sender: "other",
      text: "How's DevConnect going?",
      time: "10:32 PM",
    },
    {
      sender: "me",
      text: "Working on Premium Chat UI 😎",
      time: "10:33 PM",
    },
  ];

  return (
    <div className="h-screen bg-[#050816] text-white flex flex-col overflow-hidden">

      {/* TOP HEADER */}

      <div
        className="h-[80px] border-b border-white/10
        bg-[#0b1120] flex items-center justify-between
        px-4 md:px-8"
      >

        {/* LEFT */}

        <div className="flex items-center gap-4">

          <button className="md:hidden text-lg">
            <FaArrowLeft />
          </button>

          <div className="relative">

            <img
              src={selectedUser.image}
              alt=""
              className="w-12 h-12 md:w-14 md:h-14
              rounded-full object-cover border-2 border-indigo-500"
            />

            {selectedUser.online && (
              <div
                className="absolute bottom-0 right-0
                w-3 h-3 bg-green-400 rounded-full
                border border-[#0b1120]"
              ></div>
            )}
          </div>

          <div>
            <h2 className="font-semibold text-lg md:text-xl">
              {selectedUser.name}
            </h2>

            <p className="text-green-400 text-sm">
              Online
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4 text-gray-300">

          <button
            className="w-10 h-10 rounded-full
            bg-white/5 hover:bg-white/10
            flex items-center justify-center transition"
          >
            <FaPhoneAlt />
          </button>

          <button
            className="w-10 h-10 rounded-full
            bg-white/5 hover:bg-white/10
            flex items-center justify-center transition"
          >
            <FaVideo />
          </button>

          <button
            className="w-10 h-10 rounded-full
            bg-white/5 hover:bg-white/10
            flex items-center justify-center transition"
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>

      {/* CHAT AREA */}

      <div
        className="flex-1 overflow-y-auto
        px-4 md:px-10 py-6
        bg-gradient-to-b from-[#050816] to-[#0b1120]
        space-y-6"
      >

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "me"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[85%] md:max-w-[55%]
              px-5 py-4 rounded-3xl
              shadow-lg backdrop-blur-md
              ${
                msg.sender === "me"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 rounded-br-md"
                  : "bg-white/5 border border-white/10 rounded-bl-md"
              }`}
            >

              <p className="text-sm md:text-base leading-relaxed">
                {msg.text}
              </p>

              <p
                className={`text-[11px] mt-2 text-right
                ${
                  msg.sender === "me"
                    ? "text-gray-200"
                    : "text-gray-400"
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* INPUT SECTION */}

      <div
        className="p-4 md:p-5 border-t border-white/10
        bg-[#0b1120]"
      >

        <div
          className="flex items-center gap-3
          bg-white/5 border border-white/10
          rounded-2xl px-4 py-3"
        >

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none
            text-sm md:text-base placeholder:text-gray-400"
          />

          <button
            className="bg-gradient-to-r from-indigo-500
            to-purple-500 hover:scale-105
            transition duration-300
            p-3 rounded-xl shadow-lg"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumChat;
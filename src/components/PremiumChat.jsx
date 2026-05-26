import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaSearch,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";

const PremiumChat = () => {
  const { getUserId } = useParams();

  console.log(getUserId);

  const [selectedChat, setSelectedChat] = useState(true);

  const chats = [
    {
      id: 1,
      name: "Radhika Sharma",
      lastMessage: "Hey how are you?",
      online: true,
      image:
        "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 2,
      name: "Doraemon Kimchi",
      lastMessage: "Anime time 😂",
      online: false,
      image:
        "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      name: "Jiyansh Kalra",
      lastMessage: "Let's build something cool 🚀",
      online: true,
      image:
        "https://i.pravatar.cc/150?img=15",
    },
  ];

  const messages = [
    {
      sender: "other",
      text: "Hey Himanshi 👋",
    },
    {
      sender: "me",
      text: "Hello!!",
    },
    {
      sender: "other",
      text: "How's DevConnect going?",
    },
    {
      sender: "me",
      text: "Working on Premium Chat UI 😎",
    },
  ];

  return (
    <div className="h-screen bg-[#050816] text-white flex overflow-hidden">

      {/* LEFT SIDEBAR */}

      <div
        className={`${
          selectedChat ? "hidden md:flex" : "flex"
        } md:flex flex-col w-full md:w-[340px]
        border-r border-white/10 bg-[#0b1120]`}
      >

        {/* HEADER */}

        <div className="p-5 border-b border-white/10">

          <h1
            className="text-3xl font-bold
            bg-gradient-to-r from-indigo-400 to-purple-500
            bg-clip-text text-transparent"
          >
            Messages
          </h1>

          {/* SEARCH */}

          <div
            className="mt-4 flex items-center
            bg-white/5 rounded-2xl px-4 py-3"
          >
            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search chats..."
              className="bg-transparent outline-none px-3 w-full"
            />
          </div>
        </div>

        {/* CHAT LIST */}

        <div className="flex-1 overflow-y-auto p-3 space-y-3">

          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className="flex items-center gap-4 p-3 rounded-2xl
              cursor-pointer hover:bg-white/5 transition duration-300"
            >

              {/* IMAGE */}

              <div className="relative">

                <img
                  src={chat.image}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />

                {chat.online && (
                  <div
                    className="absolute bottom-1 right-1
                    w-3 h-3 bg-green-400 rounded-full
                    border border-black"
                  ></div>
                )}
              </div>

              {/* TEXT */}

              <div className="flex-1">

                <h2 className="font-semibold text-lg">
                  {chat.name}
                </h2>

                <p className="text-sm text-gray-400 truncate">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT SECTION */}

      <div
        className={`${
          selectedChat ? "flex" : "hidden"
        } flex-1 flex-col`}
      >

        {/* TOP BAR */}

        <div
          className="h-[80px] border-b border-white/10
          flex items-center justify-between px-6 bg-[#0b1120]"
        >

          <div className="flex items-center gap-4">

            {/* MOBILE BACK */}

            <button
              className="md:hidden"
              onClick={() => setSelectedChat(null)}
            >
              <FaArrowLeft />
            </button>

            <img
              src="https://i.pravatar.cc/150?img=32"
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h2 className="font-semibold text-lg">
                Radhika Sharma
              </h2>

              <p className="text-sm text-green-400">
                Online
              </p>
            </div>
          </div>
        </div>

        {/* MESSAGES */}

        <div
          className="flex-1 overflow-y-auto p-5 space-y-4
          bg-gradient-to-b from-[#050816] to-[#0b1120]"
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
                className={`max-w-[75%] px-5 py-3 rounded-2xl
                text-sm md:text-base
                ${
                  msg.sender === "me"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}

        <div className="p-4 border-t border-white/10 bg-[#0b1120]">

          <div
            className="flex items-center gap-3
            bg-white/5 rounded-2xl px-4 py-3"
          >

            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-transparent outline-none"
            />

            <button
              className="bg-gradient-to-r from-indigo-500
              to-purple-500 p-3 rounded-xl
              hover:scale-105 transition"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumChat;
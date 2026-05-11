import React from "react";

const UserCard = ({ user }) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    about,
    skills,
    photoUrl,
  } = user;

  return (
    <div className="flex justify-center mt-10">
      <div className="card w-80 bg-base-100 shadow-2xl border border-base-300">
        
        {/* Image */}
        <figure className="pt-5">
          <img
            src={
              photoUrl ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="user"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary"
          />
        </figure>

        {/* Body */}
        <div className="card-body items-center text-center">
          
          {/* Name */}
          <h2 className="card-title text-2xl font-bold text-primary">
            {firstName} {lastName}
          </h2>

          {/* Age + Gender */}
          <div className="flex gap-2">
            <div className="badge badge-secondary">
              Age: {age}
            </div>

            <div className="badge badge-accent capitalize">
              {gender}
            </div>
          </div>

          {/* About */}
          <p className="text-sm text-gray-400 mt-2">
            {about}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {skills?.map((skill, index) => (
              <span key={index} className="badge badge-outline">
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="card-actions mt-5 w-full flex justify-between">
            <button className="btn btn-outline btn-error w-[48%]">
              Ignore
            </button>

            <button className="btn btn-primary w-[48%]">
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
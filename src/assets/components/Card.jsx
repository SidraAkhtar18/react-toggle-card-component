import React, { useState } from "react";

const Card = ({ name, username, age, occupation, image }) => {
  // add clicked usestate
  const [clicked, setClicked] = useState(false);

return (
    <div className="flex flex-col items-center bg-gradient-to-br from-indigo-900 to-blue-500  rounded-2xl shadow-lg p-6 w-100 text-center text-white hover:shadow-2xl transition duration-300">
        
        <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white mb-4 shadow-md"
        />

        <h2 className="text-xl font-bold mb-1">{name}</h2>
        <p className="text-sm text-purple-100 mb-1">@{username}</p>
        <p className="text-sm mb-1">Age: <span className="font-semibold">{age}</span></p>
        <p className="text-sm mb-4">Occupation: <span className="font-semibold">{occupation}</span></p>

        <button
            onClick={() => setClicked(!clicked)}
            className={`mt-auto font-semibold px-4 py-2 rounded-full transition duration-200 shadow ${
                clicked
                    ? "bg-green-500 text-white hover:bg-white-600"
                    : "bg-white text-purple-600 hover:bg-purple-100"
            }`}
        >
            {clicked ? "✅ Friend Added" : "➕ Add Friend"}
        </button>
    </div>
);
};

export default Card;

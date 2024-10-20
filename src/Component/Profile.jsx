// src/Component/Profile.jsx
import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
        {/* Welcome Heading */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome to your profile
        </h1>

        {/* Profile Info */}
        <div className="text-left">
          <p className="text-lg text-gray-800 mb-4">
            <strong>Name:</strong> John Doe
          </p>
          <p className="text-lg text-gray-800 mb-4">
            <strong>Email:</strong> johndoe@example.com
          </p>
          <p className="text-lg text-gray-800 mb-4">
            <strong>Phone:</strong> +123 456 7890
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

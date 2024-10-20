import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const navigate = useNavigate();

  const handleEmailOtpSubmit = () => {
    // Simulate OTP verification logic for email
    if (emailOtp === "1234") {
      alert("Email OTP Verified");
    } else {
      alert("Invalid Email OTP");
    }
  };

  const handleMobileOtpSubmit = () => {
    // Simulate OTP verification logic for mobile
    if (mobileOtp === "5678") {
      // Navigate to the Profile page upon successful mobile OTP verification
      navigate("/profile");
    } else {
      alert("Invalid Mobile OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Email OTP Section */}
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Verify Email OTP
        </h2>
        <input
          type="text"
          value={emailOtp}
          onChange={(e) => setEmailOtp(e.target.value)}
          placeholder="Enter Email OTP"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleEmailOtpSubmit}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
        >
          Verify Email OTP
        </button>

        {/* Mobile OTP Section */}
        <h2 className="text-xl font-semibold text-gray-800 text-center mt-6 mb-4">
          Verify Mobile OTP
        </h2>
        <input
          type="text"
          value={mobileOtp}
          onChange={(e) => setMobileOtp(e.target.value)}
          placeholder="Enter Mobile OTP"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleMobileOtpSubmit}
          className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
        >
          Verify Mobile OTP
        </button>
      </div>
    </div>
  );
};

export default Otp;

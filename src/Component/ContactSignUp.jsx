import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaUsers } from "react-icons/fa";
import auth2 from "../assets/auth2.jpg";
const ContactSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companyName: "",
    companyEmail: "",
    employeeSize: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Form submission logic
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white p-6">
      {/* Left Section - Some Text */}
      <div className="md:w-1/2 flex flex-col justify-center items-start p-10 bg-white rounded-lg">
        <img src={auth2} />
      </div>

      {/* Right Section - Signup Form */}
      <div className="md:w-1/2 flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white  rounded-lg p-8 w-[450px] h-[510px] border-2 border-blue-500  flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Sign Up
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Lorem Ipsum is simply dummy text.
            </p>

            {/* Name Input with Icon */}
            <div className="mb-4 relative">
              <FaUser className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Phone Input with Icon */}
            <div className="mb-4 relative">
              <FaPhone className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Company Name Input with Icon */}
            <div className="mb-4 relative">
              <FaUser className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full pl-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your company name"
                required
              />
            </div>

            {/* Company Email Input with Icon */}
            <div className="mb-4 relative">
              <FaEnvelope className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="email"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                className="w-full pl-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your company email"
                required
              />
            </div>

            {/* Employee Size Input with Icon */}
            <div className="mb-4 relative">
              <FaUsers className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="number"
                name="employeeSize"
                value={formData.employeeSize}
                onChange={handleChange}
                className="w-full pl-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the number of employees"
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4 text-sm text-gray-600 text-center">
              <label htmlFor="terms">
                By clicking on proceed you wil accept our
                <br />
                <a href="#" className="text-blue-500">
                  Terms <span className="text-black">&</span> Conditions
                </a>
                .
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300"
          >
            proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSignUp;

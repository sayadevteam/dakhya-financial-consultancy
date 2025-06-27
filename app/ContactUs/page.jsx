"use client";

import { Oswald } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaRegCommentDots,
} from "react-icons/fa";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
});

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you! Your message has been sent successfully.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#131314] text-gray-800 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
        <div className="bg-[#131314] w-full relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="flex justify-center items-center h-screen px-8">
            <div className="">
              <div className="">
                <div className="">
                  <div className="absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110 hover:scale-110 transition-all duration-500"></div>

                  <div className="text-center ">
                    <div className=" justify-center ">
                      <Image
                        src="/visa.png"
                        alt="Visa Card"
                        width={800}
                        height={180}
                        className="object-contain "
                      />
                    </div>
                  </div>
                  <div className="mt-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-gray-400">
                      <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-500"></div>
                      <span>Or reach us directly</span>
                      <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-500"></div>
                    </div>
                    <div className="mt-4 space-y-2 text-gray-300">
                      <p>dakhyafinancialconsultancy@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        
          <div className=" text-white flex items-center justify-center px-8 py-12">
            <div className="w-full max-w-lg">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4 ">Contact Us</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"></div>
                <p className="text-gray-300 text-lg">
                  Get in touch with us. We'd love to hear from you and help with
                  your financial needs.
                </p>
              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-5 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                  />
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email Address"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-5 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                  />
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-5 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

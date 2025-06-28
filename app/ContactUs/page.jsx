"use client";

import { Oswald } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
});

const ContactUsPage = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage(null);

    if (!form.current) {
      setSubmitStatus("error");
      setErrorMessage("Form reference is missing");
      setIsSubmitting(false);
      return;
    }

    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_USER_ID
    ) {
      setSubmitStatus("error");
      setErrorMessage(
        "EmailJS configuration is missing. Please check environment variables."
      );
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_USER_ID,
        }
      )
      .then(
        () => {
          setSubmitStatus("success");
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          setSubmitStatus("error");
          setErrorMessage(error.text || "Failed to send message");
          console.error("EmailJS error:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#131314] text-gray-800 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
        <div className="bg-[#131314] w-full relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:flex justify-center items-center h-screen px-8 relative">
            {/* Glossy glow */}
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-white/20 via-blue-300/10 to-transparent blur-2xl opacity-40 animate-pulse z-0" />
            <div className="relative z-10 animate-float">
              <Image
                src="/MoneyStack.png"
                alt="Money Stack"
                width={800}
                height={800}
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="flex lg:hidden justify-center items-center py-8 px-4 relative">
            <div className="w-full max-w-md relative">
              {/* Glossy glow */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-white/20 via-blue-200/10 to-transparent blur-2xl animate-pulse opacity-40"></div>
              </div>

              <div className="text-center relative z-10 animate-float">
                <Image
                  src="/MoneyStack.png"
                  alt="Money Stack"
                  width={400}
                  height={400}
                  className="object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-white flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-lg">
            <div className="text-center mb-12">
              <h1 className="text-5xl text-white font-bold mb-4">
                Contact <span className="text-[#71A9F7]">Us</span>
              </h1>
              <div className="w-24 h-1 bg-white rounded-full mx-auto mt-6 mb-6"></div>
              <p className="text-gray-300 text-lg">
                Get in touch with us. We'd love to hear from you and help with
                your financial needs.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="hidden"
                name="from_email"
                value={formData.user_email}
              />

              <div className="relative group">
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-5 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  placeholder="Your Email Address"
                  required
                  readOnly
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-5 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                />
              </div>

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

              {submitStatus === "success" && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500">
                  {errorMessage || "Failed to send message. Please try again."}
                </p>
              )}

              <button
                type="submit"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

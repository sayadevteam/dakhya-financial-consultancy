"use client";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsAppButton = () => {
  const phoneNumber = "918104635797";
  const message = "Hi I am interested in your services. Can I get more information regarding the same?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/send/?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <div className="relative">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 right-6 z-50
          p-4 rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20
          hover:bg-gradient-to-r hover:from-green-600 hover:to-green-400
          hover:shadow-lg
          transition-all duration-300 ease-in-out
          group
        "
        aria-label="Contact us on WhatsApp"
      >
        <IoLogoWhatsapp
          className="
            w-6 h-6 text-white
            group-hover:scale-110
            transition-transform duration-300
          "
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;

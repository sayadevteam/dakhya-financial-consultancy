"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import services from "../../data/services";

const ContactUsPage = ({ selectedService }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone_no: "",
    service_info: "",
    message: "",
  });

  useEffect(() => {
    // Handle prop-based selectedService (from homepage)
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        service_info: `${selectedService.title}: ${selectedService.description}`,
      }));

      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    // Handle query parameter for standalone /ContactUs route
    // else {
    //   const selectedServiceParam = searchParams.get("selectedService");
    //   if (selectedServiceParam) {
    //     try {
    //       const { title, description } = JSON.parse(decodeURIComponent(selectedServiceParam));
    //       const matchedService = services.find(
    //         (service) => service.title === title && service.description === description
    //       );

    //       if (matchedService) {
    //         setFormData((prev) => ({
    //           ...prev,
    //           service_info: `${matchedService.title}: ${matchedService.description}`,
    //         }));

    //         setTimeout(() => {
    //           const contactSection = document.getElementById("contact");
    //           if (contactSection) {
    //             contactSection.scrollIntoView({ behavior: "smooth" });
    //           }
    //         }, 100);
    //       }
    //     } catch (error) {
    //       console.error("Error parsing selectedService:", error);
    //     }
    //   }
    // }
  }, [selectedService, searchParams]);

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

    if (!form.current) {
      toast.error("Form reference missing.");
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
      .then(() => {
        toast.success("Your query has been sent successfully!");
        setFormData({
          user_name: "",
          user_email: "",
          phone_no: "",
          service_info: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Failed to send message");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-[#131314] text-gray-800 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
        <div className="bg-[#131314] w-full relative">
          <div className="hidden lg:flex justify-center items-center h-screen px-8 relative">
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
        </div>
        <div className="text-white flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-lg">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">
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
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                placeholder="Your Email Address"
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="tel"
                name="phone_no"
                value={formData.phone_no}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <textarea
                name="service_info"
                value={formData.service_info}
                onChange={handleInputChange}
                placeholder="Service Info"
                required
                rows="3"
                className="w-full h-45 bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can I help you?"
                required
                rows="5"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl transition-all hover:scale-105 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Query"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
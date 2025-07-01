"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import services from "../../data/services";
import { useSearchParams } from "next/navigation";

const ContactUsPage = ({ selectedService }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactMethod, setContactMethod] = useState("");
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone_no: "",
    service_info: "",
    message: "",
  });

  useEffect(() => {
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
    } else {
      const selectedServiceParam = searchParams.get("selectedService");
      if (selectedServiceParam) {
        try {
          const { title, description } = JSON.parse(decodeURIComponent(selectedServiceParam));
          const matchedService = services.find(
            (service) => service.title === title && service.description === description
          );

          if (matchedService) {
            setFormData((prev) => ({
              ...prev,
              service_info: `${matchedService.title}: ${matchedService.description}`,
            }));

            setTimeout(() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }
        } catch (error) {
          console.error("Error parsing selectedService:", error);
        }
      }
    }
  }, [selectedService, searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactMethodChange = (value) => {
    setContactMethod(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      toast.error("Form reference missing.");
      setIsSubmitting(false);
      return;
    }

    if (contactMethod === "dark") {
      // Email option
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
          setContactMethod("");
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send message");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else if (contactMethod === "light") {
      // WhatsApp option
      const phoneNumber = "918104635797"; // Same phone number as in WhatsAppButton
      const message = `Name: ${formData.user_name}\nEmail: ${formData.user_email}\nPhone: ${formData.phone_no}\nService: ${formData.service_info}\nMessage: ${formData.message}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      try {
        window.open(whatsappLink, "_blank", "noopener,noreferrer");
        toast.success("Redirecting to WhatsApp with your query!");
        setFormData({
          user_name: "",
          user_email: "",
          phone_no: "",
          service_info: "",
          message: "",
        });
        setContactMethod("");
      } catch (error) {
        console.error("Error opening WhatsApp link:", error);
        toast.error("Failed to open WhatsApp");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // No contact method selected
      toast.error("Please select a contact method");
      setIsSubmitting(false);
    }
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
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all text-bold"
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

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl transition-all hover:scale-105 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Query"}
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border border-gray-700 shadow-2xl max-w-lg mx-auto rounded-2xl p-6">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl font-semibold text-gray-100">
                      Send Query via
                    </AlertDialogTitle>
                    <Select
                      onValueChange={handleContactMethodChange}
                      value={contactMethod}
                    >
                      <SelectTrigger className="w-[180px] bg-gray-800 border-gray-600 text-white rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white border-gray-700 rounded-lg">
                        <SelectItem
                          value="light"
                          className="flex items-center gap-2 hover:bg-gray-700"
                        >
                          <FaWhatsapp className="text-green-500" /> WhatsApp
                        </SelectItem>
                        <SelectItem
                          value="dark"
                          className="flex items-center gap-2 hover:bg-gray-700"
                        >
                          <FaEnvelope className="text-blue-500" /> Email
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="mt-4">
                    <AlertDialogCancel className="bg-gray-700 text-white border-gray-600 hover:bg-gray-600 rounded-lg px-4 py-2 cursor-pointer">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-4 py-2 cursor-pointer"
                      onClick={sendEmail}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
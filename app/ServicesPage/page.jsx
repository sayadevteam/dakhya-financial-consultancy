"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import services from "../../data/services";

const ServicesSection = ({ setSelectedService }) => {
  const router = useRouter();

  const handleAvailService = (title, description) => {
    if (setSelectedService) {
      // If used in homepage, set state and scroll
      setSelectedService({ title, description });
    // } else {
    //   // If used as standalone page, navigate to ContactUs
    //   router.push(
    //     `/ContactUs?selectedService=${encodeURIComponent(
    //       JSON.stringify({ title, description })
    //     )}`
    //   );
    }
  };

  return (
    <div
      id="services"
      className="relative py-20 bg-gradient-to-b from-[#131314] to-[#131314] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-white mb-9 relative">
              <span className="text-[#71A9F7]">Our</span> Services
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full"></div>
            </h2>
          </div>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Comprehensive financial solutions tailored to meet your unique needs
            and objectives.
            <span className="text-blue-400 font-semibold">
              {" "}
              At Dakhya Financial Consultancy
            </span>
            , we believe your business deserves more than just advice.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
  <AlertDialog key={index}>
    <AlertDialogTrigger asChild>
      <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/15 cursor-pointer overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 blur-3xl`}></div>
          <div className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-3`}></div>
        </div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} p-[1px]`}>
            <div className="w-full h-full rounded-3xl bg-transparent"></div>
          </div>
        </div>
        
        
        
        <div className="relative z-10">
          {/* Enhanced icon container */}
          <div className="mb-6">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
              {React.cloneElement(service.icon, {
                size: "28",
                className: "text-white drop-shadow-sm",
              })}
            </div>
            {/* Service category badge */}
            
          </div>
          
          {/* Enhanced title */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-500">
            {service.title}
          </h3>
          
          {/* Enhanced description */}
          <p className="text-gray-300 leading-relaxed text-base mb-6 group-hover:text-gray-200 transition-colors duration-500">
            {service.description}
          </p>
          
          {/* Call-to-action section */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center text-sm text-white group-hover:text-gray-300 transition-colors duration-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Click to explore
            </div>
            
          </div>
        </div>
      </div>
    </AlertDialogTrigger>
    
    <AlertDialogContent className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border border-gray-700 shadow-2xl max-w-lg mx-auto rounded-2xl">
      <AlertDialogHeader className="text-center pb-6">
        {/* Service icon in dialog */}
        <div className="flex justify-center mb-4">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl`}>
            {React.cloneElement(service.icon, {
              size: "32",
              className: "text-white",
            })}
          </div>
        </div>
        
        <AlertDialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          {service.title}
        </AlertDialogTitle>
        
        <AlertDialogDescription className="text-gray-300 text-lg leading-relaxed">
          Ready to get started with <span className="font-semibold text-white">{service.title}</span>? 
          Click "Get Started" to proceed to our contact form with this service pre-selected.
        </AlertDialogDescription>
        
        {/* Service highlights */}
        <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">What you get:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Professional Service</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Quick Response</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Expert Support</span>
          </div>
        </div>
      </AlertDialogHeader>
      
      <AlertDialogFooter className="flex-col sm:flex-row gap-3 pt-6">
        <AlertDialogCancel className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white border-gray-600 hover:border-gray-500 transition-all duration-200 cursor-pointer">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cancel
        </AlertDialogCancel>
        
        <AlertDialogAction 
          className={`w-full sm:w-auto bg-gradient-to-r ${service.gradient} hover:scale-105 transition-all duration-300 shadow-lg font-semibold cursor-pointer`}
          onClick={() => handleAvailService(service.title, service.description)}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          Get Started
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
))}
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
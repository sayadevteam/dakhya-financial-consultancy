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
                    <div className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                        <div
                          className={`w-full h-full rounded-2xl bg-gradient-to-r ${service.gradient} opacity-20`}
                        ></div>
                      </div>
                      <div className="relative z-10">
                        <div
                          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {React.cloneElement(service.icon, {
                            size: "24",
                            className: "text-white",
                          })}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Do you want to avail {service.title}?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Click "Avail Service" to proceed to our contact form
                        with this service pre-selected.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() =>
                          handleAvailService(service.title, service.description)
                        }
                      >
                        Avail Service
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
"use client";

import Image from "next/image";
import React, { useRef } from "react";
import {
  FaMoneyBillWave,
  FaDollarSign,
  FaBalanceScale,
  FaChartLine,
  FaSeedling,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMoneyBillWave />,
    title: "Profitability Improvement",
    description:
      "We help you earn more by spending smarter—realigning costs, boosting margins, and ensuring every rupee contributes to your success, not just your expenses.",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: <FaDollarSign />,
    title: "Working Capital Financing Support",
    description:
      "Running low on cash shouldn't mean slowing down. We unlock your working capital, ensuring smooth day-to-day operations and less worry over liquidity.",
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: <FaBalanceScale />,
    title: "Debt Management & Structuring",
    description:
      "Debt shouldn't feel like a burden. We guide you to smarter, stress-free borrowing—restructured, optimized, and aligned with your business goals.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: <FaChartLine />,
    title: "Business Financial Analysis",
    description:
      "Numbers tell a story—we help you read it right. Clear insights, honest answers, and practical recommendations to drive better decisions and future-ready strategies.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: <FaSeedling />,
    title: "Startup Cost Management",
    description:
      "Starting out? We help you plan every rupee wisely, avoid costly mistakes, and build a strong financial foundation for your big vision.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: <FaUserTie />,
    title: "Personalized Financial Advisory",
    description:
      "We don't do one-size-fits-all. You get honest, hands-on guidance tailored to your business, because we believe in walking the path with you.",
    gradient: "from-indigo-500 to-blue-600",
  },
];

const ServicesSection = () => {
  return (
    <div id="services" className="relative py-20 bg-gradient-to-b from-[#131314] to-[#131314] text-white overflow-hidden">
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
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
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
              ))}
            </div>
          </div>

          
          
        </div>
        
        <div className="mt-16 text-center ">
          <div className="inline-flex items-center gap-4">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

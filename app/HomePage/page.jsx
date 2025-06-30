"use client";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import React, { useState, useEffect } from "react";
// import Preloader from '@/components/Preloader' // Uncomment when ready

const HomePage = () => {
  const [counts, setCounts] = useState({ clients: 0, years: 0, success: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Check if preloader should show (first visit only)
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedSite");

    if (hasVisited) {
      // User has already visited, skip preloader
      setShowPreloader(false);
      setPreloaderComplete(true);
      setIsLoaded(true);
    } else {
      // First visit, show preloader
      sessionStorage.setItem("hasVisitedSite", "true");

      // Simulate preloader duration (adjust as needed)
      const preloaderTimer = setTimeout(() => {
        setShowPreloader(false);
        setPreloaderComplete(true);
        setIsLoaded(true);
      }, 3000); // 3 seconds - adjust based on your preloader duration

      return () => clearTimeout(preloaderTimer);
    }
  }, []);

  // Counting animation effect
  useEffect(() => {
    if (!preloaderComplete || !isLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate clients count to 500
          let clientCount = 0;
          const clientInterval = setInterval(() => {
            clientCount += 10;
            if (clientCount >= 500) {
              clientCount = 500;
              clearInterval(clientInterval);
            }
            setCounts((prev) => ({ ...prev, clients: clientCount }));
          }, 50);

          // Animate years count to 15
          let yearCount = 0;
          const yearInterval = setInterval(() => {
            yearCount += 2;
            if (yearCount >= 15) {
              yearCount = 15;
              clearInterval(yearInterval);
            }
            setCounts((prev) => ({ ...prev, years: yearCount }));
          }, 100);

          // Animate success rate to 98
          let successCount = 0;
          const successInterval = setInterval(() => {
            successCount += 2;
            if (successCount >= 98) {
              successCount = 98;
              clearInterval(successInterval);
            }
            setCounts((prev) => ({ ...prev, success: successCount }));
          }, 60);
        }
      },
      { threshold: 0.1 }
    );

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const statsElement = document.getElementById("statistics");
      if (statsElement) observer.observe(statsElement);
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [hasAnimated, preloaderComplete, isLoaded]);

  // Show preloader if it's the first visit
  if (showPreloader) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black">
        <Preloader />
      </div>
    );
  }

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-t from-[#131314] to-55% "
    >
      {/* Video Background with Black Tint */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover min-h-screen -z-10"
      >
        <source src="/office2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black opacity-50 bg-gradient-to-b -z-10"></div>

      {/* Navbar - positioned above everything */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Content Overlay */}
      <div className="relative max-w-7xl mx-auto w-full flex items-center px-4 py-10">
        <div
          className="flex-1 pr-16"
          style={{
            animation: preloaderComplete
              ? "fadeInLeft 1s ease-out forwards"
              : "none",
            opacity: preloaderComplete ? 1 : 0,
            transform: preloaderComplete
              ? "translateX(0)"
              : "translateX(-50px)",
          }}
        >
          <h1
            className="text-6xl font-bold text-[#71A9F7] mb-4 leading-tight"
            style={{
              animation: preloaderComplete
                ? "fadeInUp 1s ease-out 0.5s both"
                : "none",
              opacity: preloaderComplete ? 1 : 0,
            }}
          >
            Strategic
            <br />
            <span className="text-white">Financial</span>
            <br />
            <span className="text-white">Consulting</span>
          </h1>

          <p
            className="text-gray-200 text-lg mb-12 leading-relaxed max-w-lg"
            style={{
              animation: preloaderComplete
                ? "fadeInUp 1s ease-out 0.8s both"
                : "none",
              opacity: preloaderComplete ? 1 : 0,
            }}
          >
            At Dakhya Financial Consultancy, we don&apos;t just work with
            numbers—we partner with you to shape a stronger financial future.
            Whether you&apos;re starting up or scaling up, our expert guidance
            on profitability, cash flow, debt, and cost control helps you grow
            with confidence, clarity, and complete peace of mind.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            style={{
              animation: preloaderComplete
                ? "fadeInUp 1s ease-out 1.1s both"
                : "none",
              opacity: preloaderComplete ? 1 : 0,
            }}
          >
            
            {["about"].map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className="border-2 border-gray-300 text-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer text-sm sm:text-base"
              >
                Learn More
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;

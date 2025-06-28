"use client"
import { motion } from "framer-motion";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden z-50 flex items-center justify-center">
      <div className="relative">
        {/* Orbiting particles */}
        {/* <motion.div 
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/40"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 45}deg) translateY(-40px)`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div> */}

        {/* Main content container */}
        <motion.div 
          className="flex flex-col items-center gap-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo container */}
          <div className="relative">
            {/* Ripple effects */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-8 border-primary/20"
                animate={{
                  scale: [1, 2],
                  opacity: [0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6
                }}
              />
            ))}

            {/* Glowing background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Logo */}
            <motion.img
              src="/DakhyabgCopy.png"
              alt="preloader logo"
              className="w-40 h-40 relative z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                rotateY: [0, 360],
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotateY: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </div>

          {/* Loading text */}
          {/* <motion.div 
            className="text-primary/60 text-lg font-medium"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading...
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })

const FeatureCard = ({ icon, title, description, delay = 0, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: -15 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -15,
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className="relative group cursor-pointer perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1E53]/30 via-[#1C1E53]/20 to-black/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-110"></div>

      <div className="relative bg-white/5 backdrop-blur-xl border border-[#1C1E53]/30 rounded-2xl p-8 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1E53]/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1C1E53] via-[#1C1E53]/80 to-black"></div>

        <motion.div
          className="relative z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ delay: delay + 0.3, duration: 0.6, type: "spring" }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#1C1E53] to-black rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#1C1E53]/50 transition-shadow duration-300">
            <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
              <Image
                src={icon || "/placeholder.svg"}
                alt={title}
                width={32}
                height={32}
                className="w-8 h-8 filter brightness-0 invert"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-white mb-4 relative z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: delay + 0.4, duration: 0.5 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-300 leading-relaxed relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
        >
          {description}
        </motion.p>

        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#1C1E53]/20 to-black/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  )
}

const MissionPoint = ({ text, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100, scale: 0.5 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.5 }}
      transition={{ duration: 0.7, delay, ease: "easeOut", type: "spring", stiffness: 120 }}
      whileHover={{
        x: 15,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="flex items-center gap-5 mb-6 group cursor-pointer"
    >
      <motion.div
        className="relative w-8 h-8 flex-shrink-0"
        whileHover={{ scale: 1.3, rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1E53] to-black rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1E53] to-black rounded-full animate-pulse"></div>
        <div className="relative w-full h-full bg-gradient-to-r from-[#1C1E53] to-black rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: delay + 0.5, duration: 0.8 }}
            />
          </svg>
        </div>
      </motion.div>

      <motion.span
        className="text-gray-300 font-semibold text-lg group-hover:text-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
      >
        {text}
      </motion.span>
    </motion.div>
  )
}

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 30, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute  rounded-full blur-2xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}

export default function AboutSection() {
  const headerRef = useRef(null)
  const missionRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: "/images/multiple-users-silhouette.png",
      title: "Profitability Enhancement and Cost Optimization",
      description: "Leverage certified professionals with decades of experience to uncover impactful cost-saving opportunities. Optimize pricing, enhance margins, and streamline operations for better returns.",
    },
    {
      icon: "/images/shield.png",
      title: "Comprehensive Financial Management",
      description: "Receive guidance on restructuring debt, financing working capital, and budgeting effectively. Improve cash flow, minimize financial stress, and achieve stability through proven strategies.",
    },
    {
      icon: "/images/trend.png",
      title: "Tailored Advisory for Growth",
      description: "Utilize industry-specific strategies, custom dashboards, and reporting tools to ensure measurable success. Implement scalable solutions for SMEs and achieve long-term growth with confidence.",
    },
    {
      icon: "/images/handshake.png",
      title: "Founder-Centric Support",
      description: "Develop meaningful relationships through personalized consultations and strategic input. Receive hands-on support tailored to your business, helping you achieve your financial goals.",
    },
  ]

  const missionPoints = [
    "Personalized financial strategies tailored to your goals",
    "Expert market analysis with cutting-edge insights",
    "Comprehensive risk management solutions",
  ]

  return (
    <div
      className={`${montserrat.className} relative min-h-screen bg-[#131314] py-24 px-4 overflow-hidden`}
    >
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 100 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={headerInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative inline-block"
          >
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              About Dakhya
              <br />
              <span className="text-5xl md:text-6xl text-white">
                Consultancy
              </span>
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#1C1E53]/20 via-black/20 to-[#1C1E53]/20 blur-2xl rounded-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 w-32 bg-white mx-auto mb-10 rounded-full"
          />

          <motion.p
            className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1 }}
          >
            We are a team of{" "}
            <span className="text-transparent bg-gradient-to-l from-[#48484f] to-white bg-clip-text font-semibold">
              experienced financial professionals
            </span>{" "}
            dedicated to helping businesses and individuals navigate complex financial landscapes with confidence and
            precision.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, x: -100 }}
            animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#1C1E53]/40 to-black/40 rounded-full blur-2xl"></div>

            <motion.h3
              className="text-5xl font-bold text-white mb-10 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-[#48484f] to-gray-400 bg-clip-text">Mission</span>
              
            </motion.h3>

            <motion.div
              className="relative bg-white/5 backdrop-blur-xl border border-[#1C1E53]/20 rounded-2xl p-8 mb-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={missionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C1E53]/10 to-transparent rounded-2xl"></div>
              <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                To empower businesses with practical, personalized financial solutions that drive sustainable growth, unlock cash flow, and reduce financial stress enabling entrepreneurs and enterprises to make confident decisions, create lasting value, and thrive in every stage of their journey.
              </p>
            </motion.div>

            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <MissionPoint key={index} text={point} delay={0.2} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={missionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
           
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={0.2}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
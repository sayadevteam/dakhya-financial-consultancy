"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: "#C9DAF1" }}
      >
        <Image src={icon || "/placeholder.svg"} alt={title} width={24} height={24} className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-[#1C1E53] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

const MissionPoint = ({ text, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex items-center gap-3 mb-4"
    >
      <div className="w-6 h-6 bg-[#1C1E53] rounded-full flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </motion.div>
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
      title: "Expert Team",
      description: "Certified professionals with decades of experience",
    },
    {
      icon: "/images/shield.png",
      title: "Trusted Advisor",
      description: "Reliable guidance you can count on",
    },
    {
      icon: "/images/trend.png",
      title: "Proven Results",
      description: "Track record of successful outcomes",
    },
    {
      icon: "/images/handshake.png",
      title: "Partnership",
      description: "Long-term relationships built on trust",
    },
  ]

  const missionPoints = ["Personalized financial strategies", "Expert market analysis", "Risk management solutions"]

  return (
    <div className={`${montserrat.className} bg-gray-50 py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1E53] mb-6">About Dakhya Consultancy</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We are a team of experienced financial professionals dedicated to helping businesses and individuals
            navigate complex financial landscapes with confidence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, x: -50 }}
            animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-[#1C1E53] mb-6">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              To empower our clients with strategic financial insights and personalized solutions that drive sustainable
              growth and long-term success. We believe in building lasting relationships based on trust, transparency,
              and exceptional results.
            </p>

            <div className="space-y-1">
              {missionPoints.map((point, index) => (
                <MissionPoint key={index} text={point} delay={0.2 + index * 0.1} />
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
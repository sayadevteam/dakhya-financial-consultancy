'use client';
import React from 'react';
import { FaMoneyBillWave, FaDollarSign, FaBalanceScale, FaChartLine, FaSeedling, FaUserTie, FaChartBar, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: <FaMoneyBillWave />,
    title: 'Profitability Improvement',
    description: 'We help you earn more by spending smarter—realigning costs, boosting margins, and ensuring every rupee contributes to your success, not just your expenses.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Working Capital Financing Support',
    description: 'Running low on cash shouldn’t mean slowing down. We unlock your working capital, ensuring smooth day-to-day operations and less worry over liquidity.',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Debt Management & Structuring',
    description: 'Debt shouldn’t feel like a burden. We guide you to smarter, stress-free borrowing—restructured, optimized, and aligned with your business goals.',
  },
  {
    icon: <FaChartLine />,
    title: 'Business Financial Analysis',
    description: 'Numbers tell a story—we help you read it right. Clear insights, honest answers, and practical recommendations to drive better decisions and future-ready strategies.',
  },
  {
    icon: <FaSeedling />,
    title: 'Startup Cost Management',
    description: 'Starting out? We help you plan every rupee wisely, avoid costly mistakes, and build a strong financial foundation for your big vision.',
  },
  {
    icon: <FaUserTie />,
    title: 'Personalized Financial Advisory',
    description: 'We don’t do one-size-fits-all. You get honest, hands-on guidance tailored to your business, because we believe in walking the path with you.',
  },
  // {
  //   icon: <FaChartBar />,
  //   title: 'SME & Growth-Stage Support',
  //   description: 'Your growth journey matters to us. From setup to scale-up, we offer right-sized strategies, support, and insights that grow with your business.',
  // },
  // {
  //   icon: <FaHeart />,
  //   title: 'Founder-Focused Approach',
  //   description: 'We listen like a friend, think like a CFO, and act like a partner. Your dream becomes our mission—we’re with you, every step of the way.',
  // },
];

const ServicesSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <div className="py-16 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1E53] mb-6">Our Services</h2>
          <p className="text-gray-600 text-xl max-w-4xl mx-auto text-wrap break-words">
            Comprehensive financial solutions tailored to meet your unique needs and objectives. At Dakhya Financial Consultancy, we believe your business deserves more than just advice.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                ref={ref}
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="mb-4">
                  <span className="bg-blue-100 p-2 rounded inline-block" style={{ color: '#1C1E53' }}>
                    {React.cloneElement(service.icon, { size: '24' })}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#1C1E53] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
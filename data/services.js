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

export default services;
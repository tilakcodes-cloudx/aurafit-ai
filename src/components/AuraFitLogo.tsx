import { motion } from "framer-motion";

const AuraFitLogo = ({ size = 40, className = "" }: { size?: number; className?: string }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    className={className}
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(183, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(264, 100%, 50%)" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle cx="32" cy="32" r="28" fill="none" stroke="url(#logoGrad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="140 36" filter="url(#glow)" />
    <motion.path
      d="M36 16l-10 18h10l-4 14 10-18H32l4-14z"
      fill="url(#logoGrad)"
      filter="url(#glow)"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.svg>
);

export default AuraFitLogo;

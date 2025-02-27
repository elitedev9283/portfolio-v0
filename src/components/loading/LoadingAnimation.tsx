import { motion } from "framer-motion";
import { 
  Cpu, 
  Database, 
  Server, 
  Terminal,
  Brain,
  Code,
  Settings,
  Network,
  Layers,
  Monitor,
  HardDrive,
  Cloud,
  Laptop,
  GitBranch,
  Key,
  Shield,
  Binary,
  Webhook
} from "lucide-react";

export function LoadingAnimation() {
  const circles = Array.from({ length: 3 });
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const circleAnimation = {
    hidden: { 
      scale: 0,
      opacity: 0 
    },
    show: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 1],
      transition: {
        duration: 1.2,
        ease: "easeOut",
        repeat: Infinity,
      },
    },
  };

  // Add tech stack icons with Lucide components
  const techIcons = [
    { Icon: Brain, x: "20%", y: "30%" }, // AI/ML
    { Icon: Cpu, x: "80%", y: "60%" }, // OS/Hardware
    { Icon: Code, x: "25%", y: "70%" }, // Programming Languages
    { Icon: Terminal, x: "40%", y: "20%" }, // OS/Programming
    { Icon: Server, x: "60%", y: "75%" }, // OS/Networking
    { Icon: Database, x: "15%", y: "45%" }, // Data/AI
    { Icon: Cloud, x: "85%", y: "40%" }, // Cloud/AI
    { Icon: Laptop, x: "50%", y: "15%" }, // General Computing
    { Icon: GitBranch, x: "30%", y: "85%" }, // Version Control
    { Icon: Binary, x: "75%", y: "80%" }, // Programming
    { Icon: Webhook, x: "10%", y: "65%" }, // Networking
    { Icon: Network, x: "90%", y: "30%" }, // Networking
    { Icon: Layers, x: "45%", y: "90%" }, // AI/ML
    { Icon: Monitor, x: "35%", y: "40%" }, // OS/Hardware
    { Icon: HardDrive, x: "55%", y: "50%" }, // OS/Hardware
    { Icon: Key, x: "20%", y: "80%" }, // Security/OS
    { Icon: Shield, x: "80%", y: "20%" }, // Security
    { Icon: Settings, x: "10%", y: "10%" } // Configuration/OS
  ];

  const iconAnimation = {
    animate: {
      y: ["0%", "-20%", "0%"],
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.2, 1],
      rotate: [-5, 5, -5],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Stars background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_rgba(0,0,0,0)_70%)]" />
      
      {/* Floating tech icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: tech.x, top: tech.y }}
          animate={iconAnimation.animate}
          transition={{
            ...iconAnimation.transition,
            delay: index * 0.1, // Reduced delay for smoother overall animation
          }}
        >
          <tech.Icon className="w-16 h-16 text-blue-400/50" strokeWidth={1} />
        </motion.div>
      ))}

      {/* Main loading animation */}
      <div className="flex gap-4 z-10">
        {circles.map((_, i) => (
          <motion.div
            key={i}
            variants={circleAnimation}
            className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"
            style={{
              filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.6))",
            }}
          />
        ))}
      </div>

      {/* Space-themed background elements */}
      <motion.div
        className="absolute w-[150%] h-[150%] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
} 
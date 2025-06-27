import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsappFloatingButton = () => {
  return (
    <motion.a
      href="https://wa.me/601123448311"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed left-4 bottom-6 z-[100] bg-[#25D366] rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-[#1ebe57] transition-colors"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
      animate={{
        y: [0, -15, 0], // bounce up and down
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <FaWhatsapp size={32} color="#fff" />
    </motion.a>
  );
};

export default WhatsappFloatingButton;
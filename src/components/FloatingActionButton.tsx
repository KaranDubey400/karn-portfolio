
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed top-6 right-6 z-40 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center gap-2 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Download className="w-5 h-5 group-hover:animate-bounce" />
      <span className="font-medium">Resume</span>
    </motion.button>
  );
};

export default FloatingActionButton;

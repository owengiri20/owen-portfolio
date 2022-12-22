import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";
const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};

export const SimpleMotion = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

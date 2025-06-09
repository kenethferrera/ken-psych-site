import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', duration: 0.7 }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
} 
"use client";
import { motion, useCycle } from 'framer-motion';
import { useEffect } from 'react';

const shapes = [
  'M60,20 Q100,40 80,80 Q60,120 20,100 Q-20,80 0,40 Q20,0 60,20 Z',
  'M60,40 Q100,60 80,100 Q60,140 20,120 Q-20,100 0,60 Q20,20 60,40 Z',
  // Add more shapes for smoother morphing if desired
];

export default function MorphingBackground() {
  const [current, cycle] = useCycle(0, 1);

  useEffect(() => {
    const interval = setInterval(() => cycle(), 4000);
    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <motion.svg
      width="400"
      height="400"
      viewBox="0 0 120 160"
      className="fixed top-[-80px] right-[-80px] z-0 pointer-events-none opacity-30"
    >
      <motion.path
        d={shapes[current]}
        fill="#6c2eb7"
        animate={{ d: shapes[(current + 1) % shapes.length] }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      />
    </motion.svg>
  );
} 
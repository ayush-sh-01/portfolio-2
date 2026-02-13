"use client";

import { MotionValue, useTransform, motion } from "framer-motion";
import { useState } from 'react';
import { useMotionValueEvent } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: Intro (0% - Fades out by 15%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 1], [0, -50, -50]);
  const [showIntro, setShowIntro] = useState(true);

  // Section 2: "I build digital experiences" (Starts ~25%, Peaks ~30%, Ends ~45%)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.30, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

  // Section 3: "Bridging design and engineering" (Starts ~55%, Peaks ~60%, Ends ~75%)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.60, 0.65, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

    useMotionValueEvent(scrollYProgress, "change", (value) => {
  if (value > 0.15) {
  setShowIntro(false);
} else {
  setShowIntro(true);
}
});
  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center">
      {/* Section 1 - Center */}
      {showIntro && (
  <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center">
    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
      Ayush Sharma
    </h1>
    <p className="text-xl md:text-2xl text-gray-400 uppercase tracking-widest">
      FULL STACK DEVELOPER
    </p>
  </motion.div>
)}

      {/* Section 2 - Left Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute w-full px-10 md:px-20 text-left"
      >
        <h2 className="text-5xl md:text-7xl font-semibold text-white max-w-2xl leading-tight">
          I Build secure and <br />
          <span className="text-blue-500">Database-driven applications.</span>
        </h2>
      </motion.div>

      {/* Section 3 - Right Aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute w-full px-10 md:px-20 text-right flex justify-end"
      >
         <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-semibold text-white leading-tight">
            Integrating backend <br />
            with <span className="text-purple-500">modern frontend.</span>
            </h2>
         </div>
      </motion.div>
    </div>
  );
}

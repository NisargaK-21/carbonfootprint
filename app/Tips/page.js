"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Tips() {
  const [data] = useState(() => {
    const saved = localStorage.getItem("carbonResult");
    return saved ? JSON.parse(saved) : null;
  });

  if (!data) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-[#2D6A4F] p-6 flex justify-center items-center text-black">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full"
      >
        <h2 className="text-3xl font-bold text-[#2D6A4F] mb-4">
          Your Carbon Footprint
        </h2>

        <p className="text-2xl font-semibold text-gray-700 mb-6">
          {data.total.toFixed(2)} kg CO₂
        </p>

        <h2 className="text-2xl font-bold text-[#2D6A4F] mb-3">
          Recommended Tips
        </h2>

        <ul className="space-y-3">
          {data.tips.map((tip, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="p-3 bg-[#e9f7ef] rounded-xl border border-[#2D6A4F]/30"
            >
              🌿 {tip}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

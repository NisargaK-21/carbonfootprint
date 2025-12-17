"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function Tips() {
  const [data] = useState(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem("carbonResult");
    return saved ? JSON.parse(saved) : null;
  });

  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      left: (i * 3.33) % 100,
      top: (i * 5.26) % 100,
      duration: 4 + (i % 4),
      delay: (i % 6) * 0.3,
      size: 1 + (i % 3)
    })), []
  );

  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }


  const impactLevel = data.total < 100 ? 'low' : data.total < 300 ? 'medium' : 'high';
  const impactColors = {
    low: { from: 'from-green-500', to: 'to-emerald-500', text: 'text-green-400' },
    medium: { from: 'from-yellow-500', to: 'to-orange-500', text: 'text-yellow-400' },
    high: { from: 'from-red-500', to: 'to-orange-500', text: 'text-red-400' }
  };
  const colors = impactColors[impactLevel];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      

      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"
      />


      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute bg-green-400/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size * 2}px`,
            height: `${particle.size * 2}px`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}


      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-4xl w-full"
        >
          
 
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            >
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="inline-block mb-6"
            >
              <div className="text-7xl">🌍</div>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your Carbon Footprint
            </motion.h2>


            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className={`text-6xl md:text-7xl font-black bg-gradient-to-r ${colors.from} ${colors.to} bg-clip-text text-transparent mb-4`}>
                {data.total.toFixed(2)}
                <span className="text-3xl ml-2">kg CO₂</span>
              </div>

              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((data.total / 500) * 100, 100)}%` }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${colors.from} ${colors.to}`}
                />
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-gray-400 mt-3"
              >
                {impactLevel === 'low' && '🎉 Great job! Your footprint is relatively low.'}
                {impactLevel === 'medium' && '⚠️ Moderate impact. Room for improvement!'}
                {impactLevel === 'high' && '🚨 High impact. Let\'s work on reducing this together.'}
              </motion.p>
            </motion.div>
          </motion.div>


          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >

            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="text-4xl"
                >
                  💡
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-400">
                  Recommended Actions
                </h2>
              </div>

              <div className="space-y-4">
                {data.tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group relative bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-500/30 rounded-2xl p-5 hover:border-green-500/60 transition-all duration-300"
                  >

                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-300" />
                    
                    <div className="relative flex items-start gap-4">
                      <motion.div
                        className="text-3xl flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        🌿
                      </motion.div>
                      <p className="text-gray-200 text-lg leading-relaxed flex-1">
                        {tip}
                      </p>
                      <motion.div
                        className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            
            <motion.button
              className="px-8 py-4 border-2 border-green-500 rounded-2xl font-semibold text-lg text-green-400 hover:bg-green-500/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/"}
            >
              Back to Home
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tracker() {
  const [form, setForm] = useState({
    electricity: "",
    travel: "",
    waste: ""
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const particles = useMemo(() => 
    Array.from({ length: 25 }, (_, i) => ({
      left: (i * 4) % 100,
      top: (i * 6.25) % 100,
      duration: 3.5 + (i % 4),
      delay: (i % 6) * 0.25,
      size: 1.5 + (i % 3) * 0.5
    })), []
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (!form.electricity || !form.travel || !form.waste) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/calc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          electricity: Number(form.electricity),
          travel: Number(form.travel),
          waste: Number(form.waste),
        }),
      });

      if (!response.ok) {
        throw new Error("Backend error");
      }

      const result = await response.json();
      localStorage.setItem("carbonResult", JSON.stringify(result));
      
      setTimeout(() => {
        window.location.href = "/Tips";
      }, 500);
    } catch (err) {
      alert("Could not connect to backend");
      console.error(err);
      setIsSubmitting(false);
    }
  };

  const fields = [
    {
      name: "electricity",
      placeholder: "Electricity Usage",
      unit: "kWh/month",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "travel",
      placeholder: "Travel Distance",
      unit: "km/week",
      icon: "🚗",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "waste",
      placeholder: "Waste Production",
      unit: "kg/week",
      icon: "🗑️",
      color: "from-purple-500 to-pink-500"
    }
  ];

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
        className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"
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
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
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
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-full max-w-2xl"
        >
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="inline-block mb-6"
            >
              <div className="text-8xl">📊</div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Carbon Footprint Tracker
            </motion.h1>

            <motion.p
              className="text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Track your environmental impact with precision
            </motion.p>
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >

            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

      
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 space-y-6">
              {fields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                  className="relative"
                >
                  <motion.div
                    className={`relative group ${
                      focusedField === field.name ? 'scale-105' : 'scale-100'
                    } transition-transform duration-300`}
                  >

                    <motion.div 
                      className="flex items-center gap-3 mb-3"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span 
                        className="text-3xl"
                        animate={{ 
                          rotate: focusedField === field.name ? [0, -10, 10, 0] : 0 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {field.icon}
                      </motion.span>
                      <span className="text-gray-300 font-medium">
                        {field.placeholder}
                      </span>
                    </motion.div>


                    <div className="relative">
                      <input
                        type="number"
                        name={field.name}
                        value={form[field.name]}
                        placeholder="Enter value"
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 pr-24 bg-white/5 border-2 ${
                          focusedField === field.name 
                            ? 'border-green-500' 
                            : 'border-white/20'
                        } rounded-2xl text-white text-lg placeholder-gray-500 focus:outline-none transition-all duration-300`}
                      />
                      

                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-gradient-to-r ${field.color} rounded-lg text-white text-sm font-medium`}
                      >
                        {field.unit}
                      </motion.div>


                      <AnimatePresence>
                        {focusedField === field.name && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 -z-10 blur-xl"
                          />
                        )}
                      </AnimatePresence>
                    </div>


                    {form[field.name] && (
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2"
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="pt-4"
              >
                <motion.button
                  onClick={submit}
                  disabled={isSubmitting}
                  className="group relative w-full px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold text-xl text-white overflow-hidden shadow-2xl shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                        />
                        Processing...
                      </>
                    ) : (
                      <>
                        Calculate Footprint
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </span>
                  

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </motion.div>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="grid grid-cols-3 gap-4 pt-6"
              >
                {[
                  { icon: "🔒", text: "Secure" },
                  { icon: "⚡", text: "Instant" },
                  { icon: "🎯", text: "Accurate" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-xs text-gray-400">{item.text}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={() => window.location.href = "/"}
              className="text-green-400 hover:text-green-300 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Home
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
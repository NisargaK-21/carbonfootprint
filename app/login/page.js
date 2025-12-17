"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { login } from "../../auth";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const particles = useMemo(() => 
    Array.from({ length: 25 }, (_, i) => ({
      left: (i * 5.26) % 100,
      top: (i * 7.89) % 100,
      duration: 3 + (i % 3),
      delay: (i % 5) * 0.4
    })), []
  );

  async function handleSubmit(e) {
  e.preventDefault();
  setIsLoading(true);

  try {
    const result = await login(email, password);

    if (result?.user) {
      alert("Logged in successfully!");
      window.location.href = "/";
    } else {
      alert("Login failed");
    }
  } catch (err) {
    alert("Invalid credentials");
    console.error(err);
  }

  setIsLoading(false);
}

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center p-4">

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
        className="absolute top-0 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
      />

      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-400/40 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl w-full">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex flex-col items-center space-y-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl opacity-30" />
            <motion.div 
              className="relative text-9xl"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              🌍
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center space-y-3"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Join the Green Revolution
            </h2>
            <p className="text-gray-400 text-lg max-w-md">
              Track your carbon footprint and make a real impact on our planet
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-8"
          >
            {[
              { value: "10K+", label: "Users" },
              { value: "50M+", label: "CO₂ Tracked" },
              { value: "1M+", label: "Trees Saved" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <motion.div
            className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)" }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl" />

            <div className="relative z-10">

              <motion.div 
                className="lg:hidden text-center mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="text-6xl mb-3">🌱</div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Carbon Footprint
                </h2>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Welcome Back
                </h1>
                <p className="text-gray-400">
                  Enter your credentials to continue
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedInput === 'email' ? 1.02 : 1,
                      borderColor: focusedInput === 'email' ? '#22c55e' : 'rgba(34, 197, 94, 0.2)'
                    }}
                    className="relative"
                  >
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-green-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-green-500/5 pointer-events-none"
                      animate={{ opacity: focusedInput === 'email' ? 1 : 0 }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedInput === 'password' ? 1.02 : 1,
                      borderColor: focusedInput === 'password' ? '#22c55e' : 'rgba(34, 197, 94, 0.2)'
                    }}
                    className="relative"
                  >
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedInput('password')}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-green-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-green-500/5 pointer-events-none"
                      animate={{ opacity: focusedInput === 'password' ? 1 : 0 }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-right"
                >
                  <motion.button
                    type="button"
                    className="text-sm text-green-400 hover:text-green-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Forgot Password?
                  </motion.button>
                </motion.div>


                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  disabled={isLoading}
                  className="relative w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold text-lg overflow-hidden shadow-lg shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>

 
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative my-8"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-900/80 text-gray-400">Or continue with</span>
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { name: 'Google', icon: '🔍' },
                  { name: 'Facebook', icon: '📘' }
                ].map((provider, i) => (
                  <motion.button
                    key={provider.name}
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-gray-300 hover:border-green-500/50 hover:text-green-400 transition-all"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(34, 197, 94, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl">{provider.icon}</span>
                    {provider.name}
                  </motion.button>
                ))}
              </motion.div>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-400">
                  Dont have an account?{' '}
                  <motion.button
                    type="button"
                    className="text-green-400 font-semibold hover:text-green-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.button>
                </p>
              </motion.div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 flex flex-wrap justify-center gap-4 text-gray-500 text-sm"
          >
            {['🔐 Secure', '⚡ Fast', '🌟 Trusted'].map((badge, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, color: '#22c55e' }}
                className="transition-colors"
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
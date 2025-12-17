"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function HomePage() {

  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      left: (i * 5.26) % 100,
      top: (i * 7.89) % 100,
      duration: 3 + (i % 3),
      delay: (i % 5) * 0.4
    })), []
  );
  
  const ctaParticles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      left: (i * 6.67) % 100,
      top: (i * 8.33) % 100,
      duration: 2 + (i % 4) * 0.5,
      delay: (i % 5) * 0.4
    })), []
  );

  const handleNavigate = (path) => {
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
     

      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">


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
        ></motion.div>
        
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
        ></motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
              🌱 Join the Green Revolution
            </span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Track Your Carbon Footprint
          </motion.h1>

          <motion.p 
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Understand how your daily activities impact the environment and
            take meaningful steps toward a <span className="text-green-400 font-semibold">greener future</span>.
          </motion.p>

          <motion.div 
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => handleNavigate("/Tracker")}
              className="group relative px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white font-semibold text-lg overflow-hidden shadow-lg shadow-green-500/50"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Calculating</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={() => handleNavigate("/rewards")}
              className="group px-10 py-4 border-2 border-green-500 rounded-2xl text-green-400 font-semibold text-lg hover:bg-green-500/10 transition backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "#10b981" }}
              whileTap={{ scale: 0.95 }}
            >
              View Rewards
            </motion.button>
          </motion.div>


          <motion.div
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { value: "10K+", label: "Active Users" },
              { value: "50M+", label: "CO₂ Tracked" },
              { value: "1M+", label: "Trees Saved" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-green-400">{stat.value}</div>
                <div className="text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>


      <section className="py-32 px-6 bg-black relative overflow-hidden">
        

        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              ✨ Features
            </motion.span>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Why CarbonFootprint?
            </h2>
            
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful tools to help you make a real difference in the fight against climate change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
              >

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/5 transition-all duration-300"></div>
                
                <motion.div 
                  className="text-6xl mb-6 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {f.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 text-white relative z-10 group-hover:text-green-400 transition-colors">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{f.desc}</p>
                
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                ></motion.div>
              </motion.div>
            ))}

          </div>


          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: "⚡", text: "Real-time Tracking" },
              { icon: "📱", text: "Mobile Friendly" },
              { icon: "🔒", text: "Secure & Private" },
              { icon: "🌟", text: "Free Forever" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-green-500/30 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm text-gray-300">{item.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="py-32 px-6 relative overflow-hidden">
        

        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-emerald-900/40 to-black"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>


        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.15),transparent_70%)]"></div>


        {ctaParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="text-8xl">🌍</div>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Small Actions. Big Impact.
          </motion.h2>

          <motion.p 
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Reduce emissions, earn rewards, and inspire others to protect the
            planet. <span className="text-green-400 font-semibold">Start your journey today.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
          </motion.div>


          <motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              "🔐 100% Secure",
              "⚡ Instant Results", 
              "🎯 Accurate Data",
              "🌟 Trusted by 10K+"
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-sm"
                whileHover={{ scale: 1.1, color: "#22c55e" }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
       <br/>
        <br/>
        <br/>
        <br/>
         <br/>
        <br/>
    </div>
  );
}

const features = [
  {
    icon: "🌍",
    title: "Real Impact",
    desc: "Measure how your electricity, travel, and waste affect the planet."
  },
  {
    icon: "📊",
    title: "Smart Insights",
    desc: "Visual feedback and tips to reduce your carbon emissions."
  },
  {
    icon: "🏆",
    title: "Rewards System",
    desc: "Earn badges and points for making eco-friendly choices."
  }
];
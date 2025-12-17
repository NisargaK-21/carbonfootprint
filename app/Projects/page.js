"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectsPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-emerald-900/30 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center max-w-5xl"
        >
          <span className="inline-block px-5 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm mb-6">
            🌍 Real World Sustainability
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Our Environmental Projects
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto">
            CarbonFootprint initiatives are designed to create measurable
            environmental impact through technology, community participation,
            and sustainable practices.
          </p>
        </motion.div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl font-bold text-green-400 mb-6">
              Why These Projects Matter
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Climate change is driven by everyday choices. Our projects focus
              on bridging the gap between awareness and action by offering
              practical solutions that individuals and communities can adopt.
            </p>

            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✅ Data-driven sustainability initiatives</li>
              <li>✅ Community-focused environmental actions</li>
              <li>✅ Long-term measurable impact</li>
              <li>✅ Education and awareness programs</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-green-400">{s.value}</div>
                <div className="text-gray-400 mt-2">{s.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-20">
            Active Projects
          </h2>

          <div className="space-y-16">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-10"
              >
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="text-6xl">{p.icon}</div>

                  <div>
                    <h3 className="text-3xl font-bold text-green-400">
                      {p.title}
                    </h3>

                    <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                      <div className="bg-white/5 p-4 rounded-xl">
                        📍 Location: {p.location}
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        ⏱ Duration: {p.duration}
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        🎯 Impact: {p.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-gradient-to-br from-green-900/60 via-emerald-900/40 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white">
            Be Part of the Change
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Join hands with CarbonFootprint and help us build a sustainable
            future for generations to come.
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className="mt-10 px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white font-semibold text-lg shadow-lg shadow-green-500/40 hover:scale-105 transition"
          >
            Join a Project
          </button>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-black to-zinc-900 border border-green-500/30 rounded-3xl p-10 max-w-md w-full text-center shadow-2xl"
          >
            <div className="text-6xl mb-4">✅</div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Successfully Joined!
            </h3>

            <p className="text-gray-300 mb-8">
              You have joined <span className="text-green-400 font-semibold">all active projects</span>.
              We’ll notify you with updates and progress.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-8 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition font-semibold"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
}


const stats = [
  { value: "15K+", label: "Participants" },
  { value: "50+", label: "Communities" },
  { value: "120K kg", label: "CO₂ Reduced" },
  { value: "3 Years", label: "Continuous Impact" },
];

const projects = [
  {
    icon: "🌱",
    title: "Urban Tree Plantation",
    desc: "Large-scale tree plantation in urban areas to improve air quality and reduce carbon levels.",
    location: "Multiple Indian Cities",
    duration: "Ongoing",
    impact: "15,000+ trees planted",
  },
  {
    icon: "⚡",
    title: "Renewable Energy Awareness",
    desc: "Helping households understand and adopt solar and energy-efficient solutions.",
    location: "Karnataka",
    duration: "6 Months",
    impact: "30% energy savings",
  },
  {
    icon: "♻️",
    title: "Zero-Waste Campaign",
    desc: "Promoting composting, recycling, and sustainable waste management practices.",
    location: "College Campuses",
    duration: "4 Months",
    impact: "10 tons waste reduced",
  },
];

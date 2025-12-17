"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">

      <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-black"></div>

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-4"
>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">


          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              CarbonFootprint
            </h3>
            <p className="mt-4 text-gray-400 text-sm">
              Track, reduce, and improve your carbon footprint for a greener future.
            </p>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <li className="hover:text-green-400 cursor-pointer">Tracker</li>
              <li className="hover:text-green-400 cursor-pointer">Tips</li>
              <li className="hover:text-green-400 cursor-pointer">Rewards</li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>🌱 Carbon Tracking</li>
              <li>📊 Smart Insights</li>
              <li>🏆 Rewards</li>
              <li>👥 Community</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Take Action</h4>
            <p className="text-gray-400 text-sm mb-4">
              Start your sustainability journey today.
            </p>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold shadow-lg shadow-green-500/40">
              Calculate Footprint
            </button>
          </div>
        </div>


        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <span>© 2025 CarbonFootprint</span>
          <span>Built for a Sustainable Future 🌍</span>
        </div>
      </motion.div>
    </footer>
  );
}

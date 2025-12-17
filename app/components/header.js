"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <header className="fixed top-0 left-0 w-full z-50">

        <div className="bg-black/80 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">


            <Link
              href="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
            >
              Canopy
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-lg font-medium text-gray-300">
              {[
                ["Home", "/"],
                ["Tracker", "/Tracker"],
                ["Projects", "/project"],
                ["Groups", "/groups"],
                ["Rewards", "/rewards"],
              ].map(([label, path]) => (
                <Link
                  key={label}
                  href={path}
                  className="hover:text-green-400 transition"
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/login"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30 hover:scale-105 transition"
              >
                Login
              </Link>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-3xl text-white"
            >
              ☰
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
            >
              <div className="flex flex-col px-6 py-4 gap-4 text-lg text-gray-300">
                {[
                  ["Home", "/"],
                  ["Tracker", "/tracker"],
                  ["Tips", "/tips"],
                  ["Projects", "/project"],
                  ["Groups", "/groups"],
                  ["Rewards", "/rewards"],
                  ["Login", "/login"],
                ].map(([label, path]) => (
                  <Link
                    key={label}
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-green-400 transition"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="h-20" />
    </>
  );
}

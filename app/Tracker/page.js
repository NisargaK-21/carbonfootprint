"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Tracker() {
  const [form, setForm] = useState({
    electricity: "",
    travel: "",
    waste: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const submit = async () => {
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
    window.location.href = "/Tips";
  } catch (err) {
    alert("Could not connect to backend");
    console.error(err);
  }
};



  return (
    <div className="min-h-screen bg-[#2D6A4F] flex items-center justify-center p-6 text-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-[#2D6A4F] mb-6 text-center">
          Carbon Footprint Tracker
        </h2>

        <div className="space-y-4">
          {["electricity", "travel", "waste"].map((field) => (
            <input
              key={field}
              type="number"
              name={field}
              placeholder={
                field === "electricity"
                  ? "Electricity (kWh/month)"
                  : field === "travel"
                  ? "Travel (km/week)"
                  : "Waste (kg/week)"
              }
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
            />
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={submit}
          className="mt-6 w-full bg-[#2D6A4F] text-white p-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#24583F]"
        >
          Submit
        </motion.button>
      </motion.div>
    </div>
  );
}

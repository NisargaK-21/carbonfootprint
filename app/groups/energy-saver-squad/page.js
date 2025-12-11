"use client";

export default function EnergySaverSquad() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* TOP HEADER */}
      <div className="bg-white w-full rounded-3xl shadow-lg p-8 border border-sky-200">
        <h1 className="text-4xl font-extrabold text-sky-700">
          💡 Energy Saver Squad
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Save electricity, reduce bills, and protect the planet with smarter
          energy habits.
        </p>
      </div>

      {/* HERO IMAGE */}
      <div className="w-full flex justify-center mt-8">
        <img
          src="https://img.freepik.com/premium-photo/team-focuses-sustainable-use-energy-business-specifically-exploring-various-ecofr_908985-106685.jpg"
          alt="Energy Saving"
          className="w-[800px] h-[380px] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* HOME ENERGY CHECK */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-sky-200">
        <h2 className="text-2xl font-bold text-sky-700 mb-6">
          🏠 5-Minute Home Energy Check
        </h2>

        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
          <li>Turn off fans and lights in empty rooms.</li>
          <li>Unplug chargers and devices not in use.</li>
          <li>Check if your fridge door is closing properly.</li>
          <li>Use natural light in the daytime instead of tube lights.</li>
          <li>Enable power-saving mode on your laptop and phone.</li>
        </ol>
      </div>

      {/* ROOM-BY-ROOM GOALS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-sky-200">
        <h2 className="text-2xl font-bold text-sky-700 mb-6">
          📊 Room-by-Room Energy Goals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200">
            <h3 className="text-lg font-semibold text-sky-800">🛏 Bedroom</h3>
            <p className="text-gray-700 text-sm mt-2">
              Use LED bulbs and switch off fans when you leave. Try to keep
              only one light on at night.
            </p>
            <p className="text-sky-900 font-semibold mt-3">
              Target: 20% less power
            </p>
          </div>

          <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200">
            <h3 className="text-lg font-semibold text-sky-800">📚 Study Area</h3>
            <p className="text-gray-700 text-sm mt-2">
              Use a focused study lamp instead of lighting the whole room.
            </p>
            <p className="text-sky-900 font-semibold mt-3">
              Target: Use lamp for night study
            </p>
          </div>

          <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200">
            <h3 className="text-lg font-semibold text-sky-800">❄ Fridge Corner</h3>
            <p className="text-gray-700 text-sm mt-2">
              Avoid frequent door opening and keep hot food out until cooled.
            </p>
            <p className="text-sky-900 font-semibold mt-3">
              Target: 10% less fridge usage
            </p>
          </div>
        </div>
      </div>

      {/* SQUAD STATS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-sky-200">
        <h2 className="text-2xl font-bold text-sky-700 mb-6">
          📉 Squad Impact This Month
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200">
            <p className="text-3xl font-bold text-sky-700">62</p>
            <p className="text-gray-700 text-sm mt-1">Homes Participating</p>
          </div>
          <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200">
            <p className="text-3xl font-bold text-sky-700">314</p>
            <p className="text-gray-700 text-sm mt-1">kWh Saved</p>
          </div>
          <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200">
            <p className="text-3xl font-bold text-sky-700">₹4,900</p>
            <p className="text-gray-700 text-sm mt-1">Total Bill Saved</p>
          </div>
          <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200">
            <p className="text-3xl font-bold text-sky-700">⭐ 4.8</p>
            <p className="text-gray-700 text-sm mt-1">Average Habit Score</p>
          </div>
        </div>
      </div>

      {/* MEMBER STORIES */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-sky-200">
        <h2 className="text-2xl font-bold text-sky-700 mb-6">
          🔌 Member Energy Wins
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-sky-50 border p-4 rounded-xl">
            <img 
                src="https://static.toiimg.com/thumb/msid-123657864,width-1280,height-720,resizemode-4/123657864.jpg"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-sky-900">Raksha</p>
            <p className="text-gray-700 text-sm mt-1">
              Turned off laptop and Wi-Fi router every night. Saved one full
              day of power use per week.
            </p>
          </div>
          <div className="bg-sky-50 border p-4 rounded-xl">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjh4G1QiQZwz7rwq2dWf9-k3Rx8Gj8f6F_Q&s"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-sky-900">Aditya</p>
            <p className="text-gray-700 text-sm mt-1">
              Switched all bulbs in his room to LEDs in one weekend.
            </p>
          </div>
          <div className="bg-sky-50 border p-4 rounded-xl">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCQzU5iCGXZr_7SAjLXp5dLdMBcjJoQ7PQ&s"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-sky-900">Meghana</p>
            <p className="text-gray-700 text-sm mt-1">
              Uses natural light and fans instead of AC for most days.
            </p>
          </div>
        </div>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-sky-700 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-orange-500 transition-all">
          ✔ You Are an Energy Saver
        </button>
      </div>
    </div>
  );
}

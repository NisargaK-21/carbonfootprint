"use client";

export default function WaterSavers() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* HEADER */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-sky-200">
        <h1 className="text-4xl font-extrabold text-sky-700">
          💧 Water Savers
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Conserve water and protect our precious freshwater resources – every
          drop counts.
        </p>
      </div>

      {/* HERO + QUICK STATS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 flex justify-center">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20240731/pngtree-concept-of-world-water-day-saving-and-environmental-protection-drop-image_16120412.jpg"
            alt="Save water illustration"
            className="w-full max-w-[800px] h-[360px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border border-sky-200 text-sm">
          <h2 className="text-xl font-bold text-sky-700 mb-4">
            📊 Daily Savings Snapshot
          </h2>
          <p className="text-gray-700">
            Based on member reports from this week:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
            <li>Average shower time reduced by 3 minutes.</li>
            <li>35+ leaks fixed in taps & pipes.</li>
            <li>Over 9,000 liters saved using bucket baths.</li>
          </ul>
        </div>
      </div>

      {/* HABIT CARDS */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-sky-200">
        <h2 className="text-2xl font-bold text-sky-700 mb-6">
          🌊 Simple Water-Saving Habits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200">
            <h3 className="text-lg font-semibold text-sky-800">
              🚿 5-Minute Showers
            </h3>
            <p className="text-gray-700 mt-2">
              Set a timer and finish bathing within 5 minutes. Use a bucket
              instead of running tap water.
            </p>
          </div>

          <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200">
            <h3 className="text-lg font-semibold text-sky-800">
              🪥 Tap-Off Brushing
            </h3>
            <p className="text-gray-700 mt-2">
              Turn off the tap while brushing and washing hands – save 6–10
              liters each time.
            </p>
          </div>

          <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200">
            <h3 className="text-lg font-semibold text-sky-800">
              🌱 Reuse for Plants
            </h3>
            <p className="text-gray-700 mt-2">
              Collect RO reject water or veggie-wash water and reuse it for
              cleaning or watering plants.
            </p>
          </div>
        </div>
      </div>

      {/* LEAK HUNT CHALLENGE */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-sky-200">
        <h2 className="text-2xl font-bold text-sky-700 mb-6">
          🔍 Leak Hunt Challenge
        </h2>

        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <img
            src="https://t3.ftcdn.net/jpg/07/22/98/64/360_F_722986468_JPpHfSWGUBvlgehS12cNsnTZIk1b3GzT.jpg"
            alt="Leak detection"
            className="w-full md:w-72 h-52 md:h-60 rounded-2xl object-cover"
          />
          <div>
            <p className="text-gray-700">
              Walk around your home, campus, or street and check for:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
              <li>Dripping taps or showers.</li>
              <li>Leaking pipes near tanks and wash areas.</li>
              <li>Overflows from water tanks.</li>
            </ul>
            <p className="text-sky-900 font-semibold mt-3">
              Report them in your building / campus group and update the Water
              Savers board.
            </p>
          </div>
        </div>
      </div>

      {/* MEMBER WALL */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-sky-200">
        <h2 className="text-2xl font-bold text-sky-700 mb-6">
          💧 Member Water Wins
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-sky-50 border p-4 rounded-xl">
            <img
                src="https://purebluesustainability.com/wp-content/uploads/2021/11/Tap-Nozzle-to-Save-Water-%E2%80%93-Why-Install-One-and-How.jpg"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-sky-900">Raksha</p>
            <p className="text-gray-700 mt-1">
              Convinced her family to install aerators on taps and reduced flow.
            </p>
          </div>
          <div className="bg-sky-50 border p-4 rounded-xl">
            <img
                src="https://static.vecteezy.com/system/resources/previews/041/873/875/large_2x/ai-generated-watering-hose-pouring-water-on-plant-free-photo.jpeg"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-sky-900">Aditya</p>
            <p className="text-gray-700 mt-1">
              Reuses water from washing vegetables for balcony plants.
            </p>
          </div>
          <div className="bg-sky-50 border p-4 rounded-xl">
            <img
                src="https://thumbs.dreamstime.com/b/urban-street-scene-water-pipe-leaking-onto-sidewalk-water-spills-pipe-near-fallen-autumn-leaves-repair-workers-urban-402510014.jpg"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-sky-900">Meghana</p>
            <p className="text-gray-700 mt-1">
              Reported a major roadside pipe leak and got it fixed in 2 days.
            </p>
          </div>
        </div>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-sky-700 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-sky-800 transition-all">
          ✔ You Are a Water Saver
        </button>
      </div>
    </div>
  );
}

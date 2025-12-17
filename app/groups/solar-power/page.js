"use client";

export default function SolarPowerGroup() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* TOP HEADER */}
      <div className="bg-white w-full rounded-3xl shadow-lg p-8 border border-yellow-200">
        <h1 className="text-4xl font-extrabold text-yellow-700">
          ☀️ Solar Power Group
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Promote clean, renewable, sun-powered energy at home, college, and in
          your community.
        </p>
      </div>

      {/* HERO IMAGE */}
      <div className="w-full flex justify-center mt-8">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/073/580/986/small/solar-panel-technicians-renewable-energy-installation-photo.jpg"
          alt="Solar Panels"
          className="w-[800px] h-[380px] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* SUN FACTS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-yellow-200">
        <h2 className="text-2xl font-bold text-yellow-700 mb-6">
          🌞 Quick Sun Facts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-200">
            <p className="font-semibold text-yellow-800">
              1 hour of sunlight
            </p>
            <p className="text-gray-700 mt-1">
              can theoretically power the entire Earth for a year.
            </p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-200">
            <p className="font-semibold text-yellow-800">
              Rooftop solar
            </p>
            <p className="text-gray-700 mt-1">
              can reduce your electricity bill by 50–90% depending on usage.
            </p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-200">
            <p className="font-semibold text-yellow-800">
              Solar gadgets
            </p>
            <p className="text-gray-700 mt-1">
              like lanterns, power banks, and chargers are great off-grid
              backups.
            </p>
          </div>
        </div>
      </div>

      {/* ROOFTOP CHALLENGE */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-yellow-200">
        <h2 className="text-2xl font-bold text-yellow-700 mb-6">
          🏡 Rooftop & Balcony Challenge
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="https://img.freepik.com/free-photo/solar-panel-rooftop-garden-with-city-views_23-2151972744.jpg?semt=ais_hybrid&w=740&q=80"
            alt="House with solar roof"
            className="w-full md:w-72 h-52 md:h-60 rounded-2xl object-cover"
          />
          <div>
            <p className="text-gray-700 text-sm">
              This month, our goal is to explore how many homes and buildings in
              our community can adopt even small solar solutions.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 text-sm space-y-1">
              <li>Identify rooftops that get good sunlight.</li>
              <li>Research basic solar panel kits or solar lamps.</li>
              <li>
                Talk to at least one family member or neighbour about solar
                options.
              </li>
            </ul>
            <p className="text-yellow-800 font-semibold mt-3">
              Target: 15+ homes showing interest this month.
            </p>
          </div>
        </div>
      </div>

      {/* SOLAR STORIES */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-yellow-200">
        <h2 className="text-2xl font-bold text-yellow-700 mb-6">
          ⚡ Solar Stories from Members
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-yellow-50 border p-4 rounded-xl">
            <img 
                src="https://www.treehugger.com/thmb/4yxv7u2AV2XtPr0Gb9WI63Imjpk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/solar-battery-and-lantern-in-park-close-up-side-view--1278723493-62ab2d005551488a9deba315f4e5b91b.jpg"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-yellow-900">Raksha</p>
            <p className="text-gray-700 mt-1">
              Uses a small solar lantern during evening power cuts instead of
              candles.
            </p>
          </div>
          <div className="bg-yellow-50 border p-4 rounded-xl">
            <img
                src="https://www.shutterstock.com/image-photo/close-woman-charging-her-smartphone-260nw-2303340653.jpg"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-yellow-900">Aditya</p>
            <p className="text-gray-700 mt-1">
              Installed a solar power bank for travel and outdoor events.
            </p>
          </div>
          <div className="bg-yellow-50 border p-4 rounded-xl">
            <img
                src="https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2023/03/Untitled-design-85-2.jpg"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-yellow-900">Meghana</p>
            <p className="text-gray-700 mt-1">
              Researched rooftop solar options for her apartment building.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-yellow-500 text-white rounded-2xl text-lg font-bold hover:bg-yellow-600 transition-all">
            ➕ Share Your Solar Idea
          </button>
        </div>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-yellow-600 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-yellow-700 transition-all">
          ✔ You Shine with Solar
        </button>
      </div>
    </div>
  );
}

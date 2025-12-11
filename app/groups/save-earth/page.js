"use client";

export default function SaveTheEarthGroup() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* HEADER */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-green-200">
        <h1 className="text-4xl font-extrabold text-green-700">
          🌍 Save the Earth Group
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Protect nature, wildlife, oceans, and forests through climate-smart,
          everyday actions.
        </p>
      </div>

      {/* HERO SECTION */}
      <div className="w-full flex justify-center mt-8">
        <img
          src="https://img.freepik.com/premium-photo/earth-hand-by-generative-ai-save-earth-concept_149391-361.jpg"
          alt="Save the planet"
          className="w-full max-w-[850px] h-[360px] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* 3 PILLARS */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-green-200">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          🌱 Our 3 Earth Pillars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-green-50 p-5 rounded-2xl border border-green-200">
            <h3 className="text-lg font-semibold text-green-800">
              🌿 Nature & Trees
            </h3>
            <p className="text-gray-700 mt-2">
              Plant, protect, and care for trees and green spaces in your area.
            </p>
          </div>
          <div className="bg-green-50 p-5 rounded-2xl border border-green-200">
            <h3 className="text-lg font-semibold text-green-800">
              🌊 Oceans & Water
            </h3>
            <p className="text-gray-700 mt-2">
              Reduce plastic use and support clean water bodies and beaches.
            </p>
          </div>
          <div className="bg-green-50 p-5 rounded-2xl border border-green-200">
            <h3 className="text-lg font-semibold text-green-800">
              🌤 Climate & Energy
            </h3>
            <p className="text-gray-700 mt-2">
              Cut emissions through transport, energy, and lifestyle choices.
            </p>
          </div>
        </div>
      </div>

      {/* CAMPAIGNS */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-green-200">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          📢 Live Campaigns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="flex gap-5 bg-green-50 rounded-2xl p-5 border border-green-200">
            <img
              src="https://static.vecteezy.com/system/resources/previews/037/979/818/large_2x/ai-generated-girl-planting-small-tree-in-soil-nurturing-nature-with-care-and-hope-children-planting-trees-image-photo.jpeg"
              alt="Forest protection"
              className="w-28 h-28 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                🌳 &quot;Adopt a Tree&quot; Drive
              </h3>
              <p className="text-gray-700 mt-1">
                Each member picks one tree to care for and monitor throughout
                the year.
              </p>
              <p className="text-green-900 font-semibold mt-2">
                42 trees already adopted
              </p>
            </div>
          </div>

          <div className="flex gap-5 bg-green-50 rounded-2xl p-5 border border-green-200">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYdpDfxpDVTAS1EKpYAJ4Zr5WvyOyymdP9Q&s"
              alt="Ocean cleanup"
              className="w-28 h-28 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                🌊 &quot;No Plastic Week&quot;
              </h3>
              <p className="text-gray-700 mt-1">
                7 days of avoiding single-use plastic and sharing tips to help
                others do the same.
              </p>
              <p className="text-green-900 font-semibold mt-2">
                63 members participating
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GLOBAL HABIT LIST */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-green-200">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          🌎 Tiny Habits with Global Impact
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
          <li>Carry your own bottle, bag, and box everywhere.</li>
          <li>Say no to balloons, glitter, and single-use decorations.</li>
          <li>Unplug chargers and turn off lights when not in use.</li>
          <li>Share climate awareness posts that are factual and positive.</li>
          <li>Support local, seasonal food instead of imported, packaged items.</li>
        </ul>
      </div>

      {/* MEMBER HALL */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-green-200">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          💚 Earth Heroes of the Week
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-green-50 border p-4 rounded-xl">
            <img 
                src="https://img.freepik.com/premium-photo/activist-save-planet-poster-forest-park-kid-volunteer-pollution-global-warming-recycle-ecology_1048944-14444200.jpg?semt=ais_hybrid&w=740&q=80"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-green-900">Raksha</p>
            <p className="text-gray-700 mt-1">
              Organised a climate awareness session for juniors in college.
            </p>
          </div>
          <div className="bg-green-50 border p-4 rounded-xl">
            <img
                src="https://media.istockphoto.com/id/2220843641/photo/diverse-group-of-people-standing-and-sitting-on-a-modern-bus-during-their-commute.jpg?s=612x612&w=0&k=20&c=PAj9BjaYYYQNAmaoyZ0_xgMHV-VhmqdaIZ9oSIFMci8="
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-green-900">Aditya</p>
            <p className="text-gray-700 mt-1">
              Switched to public transport 4 days a week.
            </p>
          </div>
          <div className="bg-green-50 border p-4 rounded-xl">
            <img
                src="https://thumbs.dreamstime.com/b/kids-planting-trees-volunteers-park-151366614.jpg"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-green-900">Meghana</p>
            <p className="text-gray-700 mt-1">
              Leads a weekend tree-watering group in her neighbourhood.
            </p>
          </div>
        </div>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-green-700 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-green-800 transition-all">
          ✔ You Are in Save the Earth Group
        </button>
      </div>
    </div>
  );
}

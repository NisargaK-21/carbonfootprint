"use client";

export default function PlantSquad() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* TOP HEADER */}
      <div className="bg-white w-full rounded-3xl shadow-lg p-8 border border-emerald-200">
        <h1 className="text-4xl font-extrabold text-emerald-700">
          🌳 Plant Squad
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Grow plants, green your surroundings, and spread nature wherever you
          go.
        </p>
      </div>

      {/* HERO IMAGE */}
      <div className="w-full flex justify-center mt-8">
        <img
          src="https://img.freepik.com/premium-photo/people-hands-cupping-plant-nurture-environmental_1033579-177997.jpg"
          alt="Planting Trees"
          className="w-[800px] h-[380px] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* PLANT OF THE MONTH */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-emerald-200">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6">
          🌱 Plant of the Month: Tulsi (Holy Basil)
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="https://t4.ftcdn.net/jpg/16/40/11/43/360_F_1640114360_9OZsYLFp7NAD3P9kpS7X5R0OIvPe2gCT.jpg"
            alt="Tulsi Plant"
            className="w-full md:w-64 h-48 md:h-56 rounded-2xl object-cover"
          />
          <div>
            <p className="text-gray-700">
              Tulsi is an easy-to-grow medicinal plant that purifies air and is
              commonly used in herbal tea and home remedies.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1 text-sm">
              <li>Needs 4–6 hours of sunlight daily.</li>
              <li>Water lightly every day, avoid waterlogging.</li>
              <li>Perfect for balconies, windowsills, and terraces.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* GROW TOGETHER CHALLENGES */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-emerald-200">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6">
          🍀 Grow Together Challenges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
            <h3 className="text-lg font-semibold text-emerald-800">
              🌿 Balcony Jungle
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Add at least 3 new plants to your balcony or window this month.
            </p>
            <p className="text-emerald-900 font-semibold mt-3">
              Progress: 58% members joined
            </p>
          </div>

          <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
            <h3 className="text-lg font-semibold text-emerald-800">
              🌱 Seed Swap
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Share seeds or saplings with at least 2 friends or neighbours.
            </p>
            <p className="text-emerald-900 font-semibold mt-3">
              Progress: 36% members completed
            </p>
          </div>

          <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
            <h3 className="text-lg font-semibold text-emerald-800">
              🌳 One Tree for the Planet
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Plant one long-living tree this season and upload a photo.
            </p>
            <p className="text-emerald-900 font-semibold mt-3">
              Progress: 22% members started
            </p>
          </div>
        </div>
      </div>

      {/* MEMBER GALLERY */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-emerald-200">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6">
          📸 Green Corner – Member Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 border p-4 rounded-xl">
            <img
              src="https://res.akamaized.net/domain/image/upload/t_web/c_fill,w_800,h_450/v1616711155/Stocksy_txp578d1769Ux1300_Medium_2568541_nzey8w.jpg"
              alt="Balcony plants"
              className="w-full h-60 rounded-lg object-cover"
            />
            <p className="mt-3 font-semibold text-emerald-900">Aditya</p>
            <p className="text-gray-700 text-sm">
              Turned his hostel balcony into a mini herb garden.
            </p>
          </div>
          <div className="bg-emerald-50 border p-4 rounded-xl">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20250515/pngtree-cozy-workspace-with-laptop-and-art-surrounded-by-green-plants-image_17296701.jpg"
              alt="Indoor plant shelf"
              className="w-full h-60 rounded-lg object-cover"
            />
            <p className="mt-3 font-semibold text-emerald-900">Raksha</p>
            <p className="text-gray-700 text-sm">
              Created a cozy indoor plant corner near the study table.
            </p>
          </div>
          <div className="bg-emerald-50 border p-4 rounded-xl">
            <img
              src="https://img.freepik.com/premium-photo/people-all-ages-working-together-plant-trees-community-park_1277096-10250.jpg"
              alt="Tree planting"
              className="w-full h-60 rounded-lg object-cover"
            />
            <p className="mt-3 font-semibold text-emerald-900">Meghana</p>
            <p className="text-gray-700 text-sm">
              Organised a tree-planting drive in her neighbourhood.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-emerald-600 text-white rounded-2xl text-lg font-bold hover:bg-emerald-700 transition-all">
            ➕ Share Your Plant Photo
          </button>
        </div>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-emerald-700 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-black hover:text-white transition-all">
          ✔ You Are in Plant Squad
        </button>
      </div>
    </div>
  );
}

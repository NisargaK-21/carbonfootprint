"use client";

export default function ReusableBagTeam() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* HEADER */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-amber-200">
        <h1 className="text-4xl font-extrabold text-amber-700">
          🎒 Reusable Bag Team
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Say NO to plastic. Carry your own bag, bottle, and box – every single
          day.
        </p>
      </div>

      {/* HERO + CHECKLIST */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="flex justify-center">
          <img
            src="https://thumbs.dreamstime.com/b/vibrant-group-enjoying-day-shopping-colorful-bags-laughter-ai-generated-image-vibrant-group-enjoying-day-386398709.jpg"
            alt="Reusable bags illustration"
            className="w-full max-w-[650px] h-[360px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border border-amber-200">
          <h2 className="text-xl font-bold text-amber-700 mb-4">
            🧺 Zero-Plastic Shopping Kit Checklist
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
            <li>1–2 cloth tote bags or jute bags</li>
            <li>1 small pouch for loose vegetables / fruits</li>
            <li>1 steel or glass water bottle</li>
            <li>1 lunch box or dabba for snacks / takeaways</li>
            <li>1 set of reusable cutlery (fork + spoon)</li>
          </ul>
          <p className="text-amber-900 font-semibold mt-4 text-sm">
            Mission: Never accept a plastic bag for the next 30 days.
          </p>
        </div>
      </div>

      {/* CHALLENGES */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-amber-200">
        <h2 className="text-2xl font-bold text-amber-700 mb-6">
          🔥 Team Challenges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800">
              🛒 Plastic-Free Groceries
            </h3>
            <p className="text-gray-700 mt-2">
              Do an entire grocery trip using only your own bags and containers.
            </p>
            <p className="text-amber-900 font-semibold mt-3">
              Progress: 47 members completed
            </p>
          </div>

          <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800">
              📸 Bag Selfie Challenge
            </h3>
            <p className="text-gray-700 mt-2">
              Share a selfie with your favorite reusable bag in 3 different
              places (market, bus stop, campus).
            </p>
            <p className="text-amber-900 font-semibold mt-3">
              Progress: 61 entries
            </p>
          </div>

          <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800">
              👨‍👩‍👧 Family Bag Squad
            </h3>
            <p className="text-gray-700 mt-2">
              Convince at least one family member to start carrying a cloth bag.
            </p>
            <p className="text-amber-900 font-semibold mt-3">
              Progress: 38 families joined
            </p>
          </div>
        </div>
      </div>

      {/* MEMBER STORIES */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-amber-200">
        <h2 className="text-2xl font-bold text-amber-700 mb-6">
          💬 Member Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-amber-50 border p-4 rounded-xl">
            <img src="https://thumbs.dreamstime.com/b/woman-plastic-reusable-shopping-bag-consumerism-sustainability-eco-living-concept-portrait-smiling-young-green-canvas-182919449.jpg" alt="Raksha" className="w-full rounded-lg mb-4" />

            <p className="font-semibold text-amber-900">Raksha</p>
            <p className="text-gray-700 mt-1">
              Carries a mini foldable bag in her college backpack – no more
              last-minute plastic.
            </p>
          </div>
          <div className="bg-amber-50 border p-4 rounded-xl">
            <img src="https://www.shutterstock.com/image-photo/plastic-free-zero-waste-sustainable-260nw-2481366529.jpg" alt="Aditya" className="w-full rounded-lg mb-4" />
            <p className="font-semibold text-amber-900">Aditya</p>
            <p className="text-gray-700 mt-1">
              Helped his local shop switch from plastic covers to paper and
              cloth bags.
            </p>
          </div>
          <div className="bg-amber-50 border p-4 rounded-xl">
            <img src="https://img.freepik.com/premium-photo/arabic-woman-hands-wearing-abaya-holding-showing-shopping-bags-from-house-entrance_606429-2310.jpg" alt="Meghana" className="w-full rounded-lg mb-4" />
            <p className="font-semibold text-amber-900">Meghana</p>
            <p className="text-gray-700 mt-1">
              Keeps a &quot;bag box&quot; near the main door so no one forgets
              to carry bags.
            </p>
          </div>
        </div>
      </div>

      {/* TIPS SECTION */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-amber-200">
        <h2 className="text-2xl font-bold text-amber-700 mb-6">
          💡 Tips to Never Forget Your Bag
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
          <li>Keep 1 bag in your backpack, 1 in your scooter / car.</li>
          <li>Hang a bag near the main door as a visual reminder.</li>
          <li>Use a bright, fun bag you enjoy carrying.</li>
          <li>Tell your friends – they&apos;ll remind you if you forget.</li>
        </ul>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-amber-600 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-amber-700 transition-all">
          ✔ You Are in Reusable Bag Team
        </button>
      </div>
    </div>
  );
}

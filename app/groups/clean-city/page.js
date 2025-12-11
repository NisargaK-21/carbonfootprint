"use client";

export default function CleanCityLeague() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* TOP HEADER */}
      <div className="bg-white w-full rounded-3xl shadow-lg p-8 border border-slate-200">
        <h1 className="text-4xl font-extrabold text-slate-800">
          🧹 Clean City League
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Keep your city clean, tidy, and trash-free. Small actions from each of
          us add up to a beautiful, healthy community.
        </p>
      </div>

      {/* HERO + KEY STATS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 flex justify-center">
          <img
            src="https://media.istockphoto.com/id/1022255446/photo/thumb-up-for-cleaning-the-park.jpg?s=1024x1024&w=is&k=20&c=4i5Evww1nv9lbp25l2jAVC_RsoY9WvWS9WC2wZweDsE="
            alt="City cleaning"
            className="w-full max-w-[800px] h-[380px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-200 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            📊 League Stats – This Month
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Clean-up events</span>
              <span className="font-semibold text-slate-800">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Garbage bags collected</span>
              <span className="font-semibold text-slate-800">184</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Volunteers joined</span>
              <span className="font-semibold text-slate-800">73</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Plastic items removed</span>
              <span className="font-semibold text-slate-800">3,250+</span>
            </div>
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-all">
            🧤 Join Next Clean-Up
          </button>
        </div>
      </div>

      {/* WEEKEND MISSIONS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          🔥 Weekend Missions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800">
              🏞 Park Patrol
            </h3>
            <p className="text-gray-700 mt-2">
              Spend 1 hour in a nearby park picking litter and reporting broken
              bins to local authorities.
            </p>
            <p className="text-slate-900 font-semibold mt-3">
              Goal: 40 members this weekend
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800">
              🏫 Campus Cleanup
            </h3>
            <p className="text-gray-700 mt-2">
              Organise a mini clean-up drive around your college or school
              entrance and parking area.
            </p>
            <p className="text-slate-900 font-semibold mt-3">
              Goal: 6 campuses joining
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800">
              🗑 Dustbin Detective
            </h3>
            <p className="text-gray-700 mt-2">
              Click photos of areas without dustbins & submit them. We&apos;ll
              compile and send to the local corporation.
            </p>
            <p className="text-slate-900 font-semibold mt-3">
              Goal: 25 locations mapped
            </p>
          </div>
        </div>
      </div>

      {/* LEAGUE HIGHLIGHTS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          🏅 League Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <img 
                src="https://media.istockphoto.com/id/513586374/photo/worker-with-cleaning-equipments-and-wet-floor-sign.jpg?s=612x612&w=0&k=20&c=GiyQAx-APuW5zFgfyHcoObafkSBEPk-Jg9tsPuRaUaY="
                alt="Lake clean-up"
                className="w-full h-60 rounded-lg object-cover"
            />
            <p className="font-semibold text-slate-900">Raksha</p>
            <p className="text-gray-700 mt-1">
              Started a weekly staircase & corridor clean-up in her apartment.
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <img 
                src="https://www.shutterstock.com/image-vector/please-dont-waste-food-vector-600nw-2354622007.jpg"
                alt="Poster making"
                className="w-full h-60 rounded-lg object-cover"
            />
            <p className="font-semibold text-slate-900">Aditya</p>
            <p className="text-gray-700 mt-1">
              Designed posters about &quot;Don&apos;t Litter&quot; and placed them
              near canteens.
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3davIP_cEb_T5CHZizJ2lsQR7c6CXDtXEig&s"
                alt="Lake clean-up"
                className="w-full h-60 rounded-lg object-cover"
            />
            <p className="font-semibold text-slate-900">Meghana</p>
            <p className="text-gray-700 mt-1">
              Coordinated a lake clean-up with 20+ volunteers.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">❓ Quick FAQ</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-slate-900">
              Do I need any special tools?
            </p>
            <p>Basic gloves, a mask, and a reusable bag are enough.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">
              How often are events?
            </p>
            <p>We run at least 2–3 city events and many mini local drives.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">
              Can I start my own mini clean-up?
            </p>
            <p>
              Yes! Start with your street and share photos in the group for
              others to join.
            </p>
          </div>
        </div>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-white text-slate-900 rounded-2xl text-xl font-bold shadow-md hover:bg-white hover:text-black transition-all">
          ✔ You Are in Clean City League
        </button>
      </div>
    </div>
  );
}

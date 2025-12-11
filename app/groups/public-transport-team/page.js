"use client";

export default function PublicTransportHeroes() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* TOP HEADER */}
      <div className="bg-white w-full rounded-3xl shadow-lg p-8 border border-blue-200">
        <h1 className="text-4xl font-extrabold text-blue-700">
          🚌 Public Transport Heroes
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Choose buses, metros, and shared rides to reduce pollution, traffic, and
          your carbon footprint.
        </p>
      </div>

      {/* HERO BANNER */}
      <div className="w-full flex justify-center mt-8">
        <img
          src="https://media.istockphoto.com/id/948671462/photo/freelancer-working-on-laptop-in-public-bus.jpg?s=612x612&w=0&k=20&c=JDy6Ux4xsRX95LO3TlaPMah6Tl0Eo--UH7-ENinUGFs="
          alt="Public Transport Illustration"
          className="w-[800px] h-[380px] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* WHY PUBLIC TRANSPORT MATTERS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          🌍 Why Public Transport Matters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800">
              🚗 Fewer Cars
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              One full bus can remove up to 30–40 cars from the road, cutting
              emissions and traffic jams.
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800">
              💸 Save Money
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Spend less on fuel, parking, tolls, and maintenance by choosing
              shared rides.
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800">
              😌 Stress-Free Travel
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Read, listen to music, or relax while you travel instead of
              getting stuck driving in traffic.
            </p>
          </div>
        </div>
      </div>

      {/* WEEKLY MISSIONS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          🔥 Weekly Hero Missions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission 1 */}
          <div className="flex gap-5 bg-blue-100 rounded-2xl p-5 border border-blue-300">
            <img
              src="https://img.freepik.com/free-vector/bus-stop-concept-illustration_114360-1492.jpg"
              alt="Bus Stop"
              className="w-28 h-28 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                🚌 3-Day Bus Challenge
              </h3>
              <p className="text-gray-700">
                Use only bus or metro for 3 days this week for college or work.
              </p>
              <p className="text-blue-900 font-semibold mt-2">
                Progress: 52% members trying
              </p>
            </div>
          </div>

          {/* Mission 2 */}
          <div className="flex gap-5 bg-blue-100 rounded-2xl p-5 border border-blue-300">
            <img
              src="https://img.freepik.com/free-vector/carpool-concept-illustration_114360-8116.jpg"
              alt="Carpool"
              className="w-28 h-28 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                🚙 Carpool Friday
              </h3>
              <p className="text-gray-700">
                Share your ride with at least one friend or colleague every
                Friday.
              </p>
              <p className="text-blue-900 font-semibold mt-2">
                Progress: 40% members completed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HERO BOARD */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          ⭐ Hero Board
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border p-4 rounded-xl">
            <img
                src="https://media.istockphoto.com/id/1189350722/photo/crowded-japanese-subway-train.jpg?s=612x612&w=0&k=20&c=g7AkE99TQTXMvcSYT-REVOLVjqa4gBGIAX5_zk5Eqx4="
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-blue-900">Raksha</p>
            <p className="text-gray-700 text-sm mt-1">
              Took the metro for all classes this week. Saved 4L of fuel.
            </p>
          </div>
          <div className="bg-blue-50 border p-4 rounded-xl">
            <img
                src="https://media.istockphoto.com/id/2225221628/photo/a-lovely-woman-drives-a-car-as-she-travels-with-a-diverse-group-of-friends-on-a-summer.jpg?s=612x612&w=0&k=20&c=d04xp-pPNWhwwnt_b-zj2_aR3e0gFVF-hrStccbrHWc="
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-blue-900">Rahul</p>
            <p className="text-gray-700 text-sm mt-1">
              Started a college carpool group with 5 members.
            </p>
          </div>
          <div className="bg-blue-50 border p-4 rounded-xl">
            <img
                src="https://media.istockphoto.com/id/1485323993/photo/young-pensive-woman-riding-in-a-bus.jpg?s=612x612&w=0&k=20&c=wnCdHtEikeQxPczny9xKNnoq-NgygptNQR7xPjtm-uI="
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-blue-900">Meghana</p>
            <p className="text-gray-700 text-sm mt-1">
              Switched from auto to bus for daily commute.
            </p>
          </div>
        </div>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-blue-700 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-black hover:text-white transition-all">
          ✔ You Are a Transport Hero
        </button>
      </div>
    </div>
  );
}

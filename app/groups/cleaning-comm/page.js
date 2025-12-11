"use client";

export default function CleanFuelCommunity() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* HEADER */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-lime-200">
        <h1 className="text-4xl font-extrabold text-lime-700">
          🚐 Clean Fuel Community
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Switch to cleaner fuels like CNG, EVs, and low-emission options for a
          greener future.
        </p>
      </div>

      {/* HERO + STATS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/image-fuel-nozzle-with-leaves-coming-out-it-biofuel-esg-business-concept_687292-7990.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Clean transport"
            className="w-full max-w-[800px] h-[360px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border border-lime-200 text-sm">
          <h2 className="text-xl font-bold text-lime-700 mb-4">
            📊 Commute Impact
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>18 members regularly use CNG autos / cabs.</li>
            <li>11 members use electric scooters / cycles.</li>
            <li>Average CO₂ cut: 1.3 kg per person per day (approx).</li>
          </ul>
        </div>
      </div>

      {/* FUEL CHOICES SECTION */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-lime-200">
        <h2 className="text-2xl font-bold text-lime-700 mb-6">
          ⛽ Smarter Fuel Choices
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-lime-50 p-5 rounded-2xl border border-lime-200">
            <h3 className="text-lg font-semibold text-lime-800">
              🚐 CNG / Electric Rides
            </h3>
            <p className="text-gray-700 mt-2">
              Prefer CNG autos, e-rickshaws, or EV cabs whenever available.
            </p>
          </div>

          <div className="bg-lime-50 p-5 rounded-2xl border border-lime-200">
            <h3 className="text-lg font-semibold text-lime-800">
              🚲 Human-Powered First
            </h3>
            <p className="text-gray-700 mt-2">
              For short distances, walk or cycle instead of using motorbikes.
            </p>
          </div>

          <div className="bg-lime-50 p-5 rounded-2xl border border-lime-200">
            <h3 className="text-lg font-semibold text-lime-800">
              👥 Share the Ride
            </h3>
            <p className="text-gray-700 mt-2">
              Carpool or share autos with friends going to the same place.
            </p>
          </div>
        </div>
      </div>

      {/* CLEAN FUEL PLEDGE */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-lime-200">
        <h2 className="text-2xl font-bold text-lime-700 mb-6">
          ✍️ Clean Fuel Pledge
        </h2>
        <p className="text-gray-700 text-sm">
          &quot;Whenever I have a choice, I will prefer a cleaner travel option –
          CNG, EV, public transport, or walking – instead of a solo fossil fuel
          ride.&quot;
        </p>
        <p className="text-lime-900 font-semibold mt-4 text-sm">
          ✅ 54 members have signed this pledge.
        </p>
      </div>

      {/* MEMBER STORIES */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-lime-200">
        <h2 className="text-2xl font-bold text-lime-700 mb-6">
          🌿 Community Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-lime-50 border p-4 rounded-xl">
            <img
                src="https://www.shutterstock.com/image-photo/dhaka-bangladesh-06-jun-2024-600nw-2472800789.jpg"
                alt="Raksha in CNG auto"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-lime-900">Raksha</p>
            <p className="text-gray-700 mt-1">
              Switched her regular auto to a CNG share auto route for college.
            </p>
          </div>
          <div className="bg-lime-50 border p-4 rounded-xl">
                <img 
                src="https://yulu-blogs-cdn.yulu.bike/large_Whats_App_Image_2023_09_28_at_18_07_39_1_240a0ba2e8.jpg"
                alt="Raksha in CNG auto"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-lime-900">Aditya</p>
            <p className="text-gray-700 mt-1">
              Rented an electric scooter for daily commute instead of petrol
              bike.
            </p>
          </div>
          <div className="bg-lime-50 border p-4 rounded-xl">
            <img 
                src="https://img.freepik.com/free-photo/smiley-group-friends-road-trip-break_23-2148375052.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Raksha in CNG auto"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-lime-900">Meghana</p>
            <p className="text-gray-700 mt-1">
              Started a carpool group for weekend outings with friends.
            </p>
          </div>
        </div>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-lime-600 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-lime-700 transition-all">
          ✔ You Are in Clean Fuel Community
        </button>
      </div>
    </div>
  );
}

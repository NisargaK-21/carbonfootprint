"use client";

export default function ZeroWasteTeam() {
  return (
    <div className="min-h-screen bg-black p-6">

      {/* TOP HEADER - FULL WIDTH */}
      <div className="bg-white w-full rounded-3xl shadow-lg p-8 border border-green-200">
        <h1 className="text-4xl font-extrabold text-green-700">
          🌍 Zero Waste Community
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Together we reduce waste, reuse better, recycle smarter, and build a cleaner future.
        </p>
      </div>

      {/* BANNER IMAGE - FULL WIDTH */}
      {/* BANNER IMAGE - CENTERED */}
<div className="w-full flex justify-center mt-8">
  <img
    src="https://media.istockphoto.com/id/1362580060/photo/zero-waste-concept-waste-recycling-for-a-clean-and-healthy-environment-ecology-lifestyle-and.jpg?s=612x612&w=0&k=20&c=3GhFlBTLwWuf8X3ViCyBtX-EzipylIbfv7gcgs0bpV4="
    alt="Zero Waste Banner"
    className="w-[800px] h-[450px] object-cover rounded-3xl shadow-lg"

  />
</div>


      {/* CHALLENGES SECTION - FULL WIDTH */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-green-200">
        <h2 className="text-2xl font-bold text-green-700 mb-6">🔥 Ongoing Challenges</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Challenge 1 */}
          <div className="flex gap-5 bg-green-100 rounded-2xl p-5 border border-green-300">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              className="w-28 h-28 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-green-800">🚯 Plastic-Free Week</h3>
              <p className="text-gray-700">
                Avoid all single-use plastics for 7 days. Share updates in the contribution feed.
              </p>
              <p className="text-green-900 font-semibold mt-2">Progress: 65%</p>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="flex gap-5 bg-green-100 rounded-2xl p-5 border border-green-300">
            <img
              src="https://media.istockphoto.com/id/1127769509/photo/zero-waste-shopping-concept.jpg?s=612x612&w=0&k=20&c=WD8Me9hmjiBJ6nf8eQnIBqwvA7KzsDRInFOzIewOPac="
              className="w-28 h-28 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-green-800">🛍 Zero-Waste Shopping</h3>
              <p className="text-gray-700">
                Use reusable bags, bottles, and containers for all purchases.
              </p>
              <p className="text-green-900 font-semibold mt-2">Progress: 48%</p>
            </div>
          </div>

        </div>
      </div>

      {/* CONTRIBUTIONS SECTION */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-green-200">
        <h2 className="text-2xl font-bold text-green-700 mb-6">🌱 Member Contributions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Contribution 1 */}
          <div className="bg-green-50 border p-4 rounded-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNsflh2-zuXvHDGotlj3gkd079zlchnGCyw&s"
              className="w-full h-72 rounded-lg object-cover"
            />
            <p className="mt-3 font-semibold text-green-900">Raksha</p>
            <p className="text-gray-700 text-sm">Recycled 4kg of plastic bottles this week.</p>
          </div>

          {/* Contribution 2 */}
          <div className="bg-green-50 border p-4 rounded-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6q2I55DlzxjEORnf-rHr445LZkptSIial-w&s"
              className="w-full h-72 rounded-lg object-cover"
            />
            <p className="mt-3 font-semibold text-green-900">Aditya</p>
            <p className="text-gray-700 text-sm">Switched fully to cloth bags.</p>
          </div>

          {/* Contribution 3 */}
          <div className="bg-green-50 border p-4 rounded-xl">
            <img
              src="https://thumbs.dreamstime.com/b/kitchen-waste-deposit-compost-garden-recycling-410308866.jpg"
              className="w-full h-72 rounded-lg object-cover"
            />
            <p className="mt-3 font-semibold text-green-900">Meghana</p>
            <p className="text-gray-700 text-sm">Started composting kitchen waste.</p>
          </div>

        </div>

        {/* Add contribution button */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-green-600 text-white rounded-2xl text-lg font-bold hover:bg-green-700 transition-all">
            ➕ Add Your Contribution
          </button>
        </div>
      </div>

      {/* UPCOMING EVENTS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-green-200">
        <h2 className="text-2xl font-bold text-green-700 mb-6">📅 Upcoming Programs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Event 1 */}
          <div className="flex gap-5 bg-green-100 rounded-2xl p-5 border border-green-300">
            <img
              src="https://www.shutterstock.com/image-vector/beach-cleanupdrive-silhouette-featuring-people-600nw-2658250907.jpg"
              className="w-28 h-28 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                🌿 Community Clean-Up Drive
              </h3>
              <p className="text-gray-700">Help clean local parks and public areas.</p>
              <p className="text-green-800 font-medium mt-2">📅 10th March</p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="flex gap-5 bg-green-100 rounded-2xl p-5 border border-green-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinnhuDnHzQ5lqqKaP6iK4mqG5mYWf7R9GuA&s"
              className="w-28 h-28 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                🏡 Zero-Waste Home Workshop
              </h3>
              <p className="text-gray-700">Learn practical zero-waste lifestyle ideas.</p>
              <p className="text-green-800 font-medium mt-2">📅 18th March</p>
            </div>
          </div>

        </div>
      </div>

      {/* MEMBER STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-green-700 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-green-800 transition-all">
          ✔ You Are a Member
        </button>
      </div>
    </div>
  );
}
